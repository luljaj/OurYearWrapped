import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Navigation from './components/Navigation.jsx'
import NowPlaying from './components/NowPlaying.jsx'
import ProgressIndicator from './components/ProgressIndicator.jsx'
import Slide from './components/Slide.jsx'
import { slides } from './slides/slides.js'
import { publicAudio, publicImage } from './utils/assets.js'
import {
  AUTO_ADVANCE_HOLD_MS,
  AUTO_ADVANCE_INTERVAL_MS,
  PRELOAD_AHEAD_SLIDES,
  SWIPE_THRESHOLD,
} from './utils/constants.js'
import { getTrackForSlide } from './utils/audio.js'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function preload(src) {
  const img = new Image()
  img.decoding = 'async'
  img.src = src
}

export default function App() {
  const total = slides.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 forward, -1 backward
  const [debug, setDebug] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [audioPaused, setAudioPaused] = useState(true)

  const pointer = useRef({ active: false, x0: 0, y0: 0 })
  const spaceHoldTimer = useRef(null)
  const autoAdvanceInterval = useRef(null)
  const audioRef = useRef(null)
  const audioTrackRef = useRef(null)

  const active = useMemo(() => slides[currentSlide], [currentSlide])
  const activeTrack = useMemo(() => getTrackForSlide(active), [active])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((s) => clamp(s + 1, 0, total - 1))
  }, [total])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((s) => clamp(s - 1, 0, total - 1))
  }, [total])

  const goToSlide = useCallback((index) => {
    const i = clamp(index, 0, total - 1)
    setDirection(i >= currentSlide ? 1 : -1)
    setCurrentSlide(i)
  }, [currentSlide, total])

  const goToStart = useCallback(() => goToSlide(0), [goToSlide])
  const goToEnd = useCallback(() => goToSlide(total - 1), [goToSlide, total])

  const stopAutoAdvance = useCallback(() => {
    if (autoAdvanceInterval.current) {
      clearInterval(autoAdvanceInterval.current)
      autoAdvanceInterval.current = null
    }
  }, [])

  const startAutoAdvance = useCallback(() => {
    stopAutoAdvance()
    autoAdvanceInterval.current = setInterval(() => {
      setDirection(1)
      setCurrentSlide((s) => (s >= total - 1 ? s : s + 1))
    }, AUTO_ADVANCE_INTERVAL_MS)
  }, [stopAutoAdvance, total])

  const handleSwipe = useCallback((deltaX) => {
    if (deltaX < -SWIPE_THRESHOLD) nextSlide()
    if (deltaX > SWIPE_THRESHOLD) prevSlide()
  }, [nextSlide, prevSlide])

  useEffect(() => {
    // Preload images for the next slides (best-effort).
    const ahead = []
    for (let i = 1; i <= PRELOAD_AHEAD_SLIDES; i++) {
      const s = slides[currentSlide + i]
      if (!s) continue
      for (const img of s.images || []) ahead.push(img)
    }

    const uniq = [...new Set(ahead)]
    const run = () => uniq.forEach((f) => preload(publicImage(f)))

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 600 })
      return
    }
    const t = setTimeout(run, 120)
    return () => clearTimeout(t)
  }, [currentSlide])

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio()
      audio.preload = 'auto'
      audio.loop = true
      audioRef.current = audio

      audio.addEventListener('playing', () => {
        setAudioError(false)
        setAudioPaused(false)
      })
      audio.addEventListener('pause', () => {
        // pause can also fire during source changes
        setAudioPaused(true)
      })
      audio.addEventListener('error', () => {
        setAudioError(true)
        setAudioPaused(true)
      })
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!audioEnabled) {
      audio.pause()
      audioTrackRef.current = null
      return
    }

    if (!activeTrack) {
      audio.pause()
      audioTrackRef.current = null
      return
    }

    const nextSrc = publicAudio(activeTrack.file)
    const prevSrc = audioTrackRef.current
    if (prevSrc !== nextSrc) {
      audioTrackRef.current = nextSrc
      audio.src = nextSrc
    }

    // Try to play (may be blocked until user gesture; we keep UI for retry).
    Promise.resolve(audio.play()).catch(() => {
      // Autoplay policy or load errors will keep us paused until user taps Play.
      setAudioPaused(true)
    })
  }, [activeTrack, audioEnabled])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        stopAutoAdvance()
        goToStart()
        return
      }
      if (e.key.toLowerCase() === 'd') {
        setDebug((v) => !v)
        return
      }
      if (e.code === 'Space') {
        // Tap space: next. Hold: auto-advance (until released).
        if (spaceHoldTimer.current || autoAdvanceInterval.current) return
        spaceHoldTimer.current = setTimeout(() => {
          spaceHoldTimer.current = null
          startAutoAdvance()
        }, AUTO_ADVANCE_HOLD_MS)
      }
    }

    const onKeyUp = (e) => {
      if (e.code !== 'Space') return

      if (spaceHoldTimer.current) {
        clearTimeout(spaceHoldTimer.current)
        spaceHoldTimer.current = null
        nextSlide()
        return
      }

      stopAutoAdvance()
    }

    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [goToStart, nextSlide, prevSlide, startAutoAdvance, stopAutoAdvance])

  useEffect(() => () => stopAutoAdvance(), [stopAutoAdvance])

  const onPointerDown = (e) => {
    // Ignore interactive controls to avoid accidental swipes.
    const el = e.target
    if (el && el.closest && el.closest('button,a,input,textarea,select')) return
    pointer.current = { active: true, x0: e.clientX, y0: e.clientY }
  }

  const onPointerUp = (e) => {
    if (!pointer.current.active) return
    const deltaX = e.clientX - pointer.current.x0
    const deltaY = e.clientY - pointer.current.y0
    pointer.current.active = false
    // If mostly vertical, ignore (allow scroll-y bounce).
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.2) return
    handleSwipe(deltaX)
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (pointer.current.active = false)}
    >
      <a
        href="#oyw-end"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white/90 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#2a0e1c]"
      >
        Skip to the end
      </a>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <Slide
          key={active.key}
          direction={direction}
          gradientClass={active.gradientClass}
          index={currentSlide}
          total={total}
          debug={debug}
          slideKey={active.key}
        >
          <active.Component />
        </Slide>
      </AnimatePresence>

      <NowPlaying
        enabled={audioEnabled}
        hasTrack={Boolean(activeTrack)}
        error={audioError}
        paused={audioPaused}
        trackTitle={activeTrack?.title || null}
        onToggleEnabled={() => setAudioEnabled((v) => !v)}
        onTogglePause={() => {
          const audio = audioRef.current
          if (!audio) return
          if (audio.paused) {
            Promise.resolve(audio.play()).catch(() => {
              setAudioPaused(true)
            })
          } else {
            audio.pause()
          }
        }}
      />

      <Navigation
        current={currentSlide}
        total={total}
        onPrev={prevSlide}
        onNext={nextSlide}
        onStart={goToStart}
        onEnd={goToEnd}
        debug={debug}
        onJump={goToSlide}
      />

      <ProgressIndicator total={total} current={currentSlide} onJump={goToSlide} />

      <div id="oyw-end" className="sr-only" aria-hidden="true" />
    </div>
  )
}
