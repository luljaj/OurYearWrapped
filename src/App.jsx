import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Navigation from './components/Navigation.jsx'
import OnboardingSlide from './components/OnboardingSlide.jsx'
import Slide from './components/Slide.jsx'
import { onboardingSlides } from './slides/Onboarding.jsx'
import { wrappedSlides } from './slides/slides.js'
import { DebugContext } from './context/DebugContext.jsx'
import { publicAudio, publicImage } from './utils/assets.js'
import {
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
  const isDev = import.meta.env.DEV
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const v = localStorage.getItem('oyw_unlocked')
      // Default to unlocked (Our Year Wrapped) unless explicitly locked.
      if (v === null) return true
      return v === '1'
    } catch {
      return true
    }
  })
  const [debug, setDebug] = useState(false)
  const deck = unlocked ? wrappedSlides : onboardingSlides
  const Wrapper = unlocked ? Slide : OnboardingSlide
  // Forward navigation should work in normal onboarding (ArrowRight / Space / swipe).
  // Backward navigation + jump UI should only be available once unlocked, or in dev debug.
  const allowForward = true
  const allowBack = unlocked || (isDev && debug)
  const allowUiNavigation = unlocked || (isDev && debug)
  const total = deck.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 forward, -1 backward
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [audioError, setAudioError] = useState(false)
  const [audioPaused, setAudioPaused] = useState(true)
  const [audioNeedsUnmute, setAudioNeedsUnmute] = useState(false)

  const pointer = useRef({ active: false, x0: 0, y0: 0 })
  const spaceDown = useRef(false)
  const audioRef = useRef(null)
  const audioTrackRef = useRef(null)

  const active = useMemo(() => deck[currentSlide], [currentSlide, deck])
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

  const handleSwipe = useCallback((deltaX) => {
    if (deltaX < -SWIPE_THRESHOLD) {
      if (!allowForward) return
      nextSlide()
    }
    if (deltaX > SWIPE_THRESHOLD) {
      if (!allowBack) return
      prevSlide()
    }
  }, [allowBack, allowForward, nextSlide, prevSlide])

  const unlockWrapped = useCallback(() => {
    try {
      localStorage.setItem('oyw_unlocked', '1')
    } catch {
      // ignore
    }
    setDirection(1)
    setCurrentSlide(0)
    setUnlocked(true)
  }, [])

  useEffect(() => {
    // Persist the new default so refreshes stay in wrapped mode.
    if (!unlocked) return
    try {
      const v = localStorage.getItem('oyw_unlocked')
      if (v === null) localStorage.setItem('oyw_unlocked', '1')
    } catch {
      // ignore
    }
  }, [unlocked])

  useEffect(() => {
    // Preload images for the next slides (best-effort).
    const ahead = []
    for (let i = 1; i <= PRELOAD_AHEAD_SLIDES; i++) {
      const s = deck[currentSlide + i]
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
  }, [currentSlide, deck])

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

    // Try to play with audio. If autoplay is blocked, fall back to muted autoplay
    // so the track is "running" immediately, then let the user unmute on first gesture.
    audio.muted = false
    Promise.resolve(audio.play())
      .then(() => {
        setAudioNeedsUnmute(false)
      })
      .catch(() => {
        audio.muted = true
        Promise.resolve(audio.play())
          .then(() => {
            setAudioNeedsUnmute(true)
          })
          .catch(() => {
            // Autoplay policy or load errors will keep us paused until user taps Play.
            setAudioPaused(true)
            setAudioNeedsUnmute(false)
          })
      })
  }, [activeTrack, audioEnabled])

  useEffect(() => {
    // One-time attempt to unmute+play on first user gesture (works around autoplay policy).
    const audio = audioRef.current
    if (!audioEnabled || !audio || !audioNeedsUnmute) return

    const tryUnmute = () => {
      audio.muted = false
      Promise.resolve(audio.play())
        .then(() => setAudioNeedsUnmute(false))
        .catch(() => {
          // still blocked; keep muted
          audio.muted = true
        })
    }

    const onFirstGesture = () => tryUnmute()
    window.addEventListener('pointerdown', onFirstGesture, { once: true })
    window.addEventListener('keydown', onFirstGesture, { once: true })
    return () => {
      window.removeEventListener('pointerdown', onFirstGesture)
      window.removeEventListener('keydown', onFirstGesture)
    }
  }, [audioEnabled, audioNeedsUnmute])

  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target
      if (
        target &&
        target.closest &&
        target.closest('input,textarea,select,[contenteditable="true"]')
      ) {
        return
      }

      const key = e.key
      const code = e.code

      // Prevent page scrolling/scroll-jank on slide keys even when navigation is locked.
      if (key === 'ArrowRight' || key === 'ArrowLeft' || key === 'Escape' || code === 'Space') {
        e.preventDefault()
      }

      if (key === 'ArrowRight') {
        if (!allowForward) return
        if (e.repeat) return
        nextSlide()
        return
      }
      if (key === 'ArrowLeft') {
        if (!allowBack) return
        if (e.repeat) return
        prevSlide()
        return
      }
      if (key === 'Escape') {
        if (!allowBack) return
        goToStart()
        return
      }
      if (e.key.toLowerCase() === 'd') {
        setDebug((v) => !v)
        return
      }
      if (code === 'Space') {
        if (!allowForward) return
        if (e.repeat) return
        spaceDown.current = true
      }
    }

    const onKeyUp = (e) => {
      const target = e.target
      if (
        target &&
        target.closest &&
        target.closest('input,textarea,select,[contenteditable="true"]')
      ) {
        return
      }

      if (!allowForward) return
      if (e.code !== 'Space') return

      if (!spaceDown.current) return
      spaceDown.current = false
      nextSlide()
    }

    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [allowBack, allowForward, goToStart, nextSlide, prevSlide])

  const onPointerDown = (e) => {
    if (!allowForward && !allowBack) return
    // Ignore interactive controls to avoid accidental swipes.
    const el = e.target
    if (el && el.closest && el.closest('button,a,input,textarea,select')) return
    pointer.current = { active: true, x0: e.clientX, y0: e.clientY }
  }

  const onPointerUp = (e) => {
    if (!allowForward && !allowBack) return
    if (!pointer.current.active) return
    const deltaX = e.clientX - pointer.current.x0
    const deltaY = e.clientY - pointer.current.y0
    pointer.current.active = false
    // If mostly vertical, ignore (allow scroll-y bounce).
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.2) return
    handleSwipe(deltaX)
  }

  return (
    <DebugContext.Provider value={debug}>
      <div
        className="relative h-full w-full overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointer.current.active = false)}
      >
      {allowUiNavigation ? (
        <a
          href="#oyw-end"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white/90 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#2a0e1c]"
        >
          Skip to the end
        </a>
      ) : null}

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <Wrapper
          key={active.key}
          direction={direction}
          gradientClass={active.gradientClass}
          heartsMode={active.heartsMode}
          index={currentSlide}
          total={total}
          debug={debug}
          slideKey={active.key}
        >
          <active.Component onUnlock={unlockWrapped} onNext={nextSlide} onPrev={prevSlide} />
        </Wrapper>
      </AnimatePresence>

	      {allowUiNavigation ? (
	        <>
	          <Navigation
	            current={currentSlide}
	            total={total}
	            onStart={goToStart}
	            onEnd={goToEnd}
	            debug={debug}
	            onJump={goToSlide}
	          />
	        </>
	      ) : null}

      <div id="oyw-end" className="sr-only" aria-hidden="true" />
      </div>
    </DebugContext.Provider>
  )
}
