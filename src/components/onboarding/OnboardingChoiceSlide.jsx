import { motion, usePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import ConfettiBurst from './ConfettiBurst.jsx'

const MotionDiv = motion.div

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

export default function OnboardingChoiceSlide({
  question,
  yesText = 'Yes',
  noText = 'No',
  noDisabled = false,
  noCaption,
  onYes,
  transitionToWhiteOnYes = false,
  yesDelayMs = 900,
  buttonsDelayMs = 0,
  questionFadeDuration = 0.9, // seconds
  questionSize = 'md', // sm | md | lg | xl
}) {
  const containerRef = useRef(null)
  const noRef = useRef(null)
  const yesTimeout = useRef(null)
  const buttonsTimeout = useRef(null)
  const hoverCooldown = useRef(0)
  const [isPresent] = usePresence()

  const [buttonsVisible, setButtonsVisible] = useState(() => buttonsDelayMs <= 0)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [posReady, setPosReady] = useState(false)
  const [confetti, setConfetti] = useState(0)
  const [white, setWhite] = useState(false)
  const [yesScale, setYesScale] = useState(1)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    // AnimatePresence keeps exiting slides mounted during exit animations.
    // Cancel pending timeouts on exit to avoid double-advancing/skipping.
    if (!isPresent) {
      if (yesTimeout.current) clearTimeout(yesTimeout.current)
      yesTimeout.current = null
      if (buttonsTimeout.current) clearTimeout(buttonsTimeout.current)
      buttonsTimeout.current = null
    }
  }, [isPresent])

  const yesStyle = useMemo(
    () => ({
      transform: `scale(${yesScale})`,
    }),
    [yesScale],
  )

  useEffect(() => {
    // initial placement for the NO button (near the YES button)
    const el = containerRef.current
    const btn = noRef.current
    if (!el || !btn) return
    const cr = el.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    const startX = clamp(cr.width * 0.56, 16, cr.width - br.width - 16)
    const startY = clamp(cr.height * 0.56, 16, cr.height - br.height - 16)
    setNoPos({ x: startX, y: startY })
    setPosReady(true)
  }, [])

  useEffect(() => {
    if (buttonsDelayMs <= 0) return
    buttonsTimeout.current = setTimeout(() => setButtonsVisible(true), buttonsDelayMs)
    return () => {
      if (buttonsTimeout.current) clearTimeout(buttonsTimeout.current)
      buttonsTimeout.current = null
    }
  }, [buttonsDelayMs])

  useEffect(() => {
    return () => {
      if (yesTimeout.current) clearTimeout(yesTimeout.current)
      if (buttonsTimeout.current) clearTimeout(buttonsTimeout.current)
      buttonsTimeout.current = null
    }
  }, [])

  const teleportNo = () => {
    const el = containerRef.current
    const btn = noRef.current
    if (!el || !btn) return
    const cr = el.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    const x = randomBetween(16, Math.max(16, cr.width - br.width - 16))
    const y = randomBetween(24, Math.max(24, cr.height - br.height - 16))
    setNoPos({ x, y })
  }

  const onNoClick = () => {
    if (!buttonsVisible) return
    if (noDisabled || locked) return
    teleportNo()
    setYesScale((s) => Math.min(1.35, s * 1.06))
  }

  const onNoHover = () => {
    if (!buttonsVisible) return
    if (noDisabled || locked) return
    const now = Date.now()
    if (now - hoverCooldown.current < 120) return
    hoverCooldown.current = now
    teleportNo()
    setYesScale((s) => Math.min(1.35, s * 1.03))
  }

  const onYesClick = () => {
    if (!buttonsVisible) return
    if (locked) return
    setLocked(true)
    setConfetti((c) => c + 1)
    if (transitionToWhiteOnYes) setWhite(true)
    yesTimeout.current = setTimeout(() => onYes?.(), yesDelayMs)
  }

  const questionSizeClass =
    questionSize === 'sm'
      ? 'text-3xl md:text-4xl'
      : questionSize === 'lg'
        ? 'text-5xl md:text-6xl'
        : questionSize === 'xl'
          ? 'text-6xl md:text-7xl'
          : 'text-4xl md:text-5xl'

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <div className="relative mx-auto h-[64vh] w-full max-w-[920px] md:h-[66vh]">
        {question ? (
          <MotionDiv
            className={`absolute left-1/2 top-[44%] w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center font-script ${questionSizeClass} leading-[1.08] tracking-wide text-dark-pink whitespace-pre-line`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: questionFadeDuration, ease: 'easeInOut' }}
          >
            {question}
          </MotionDiv>
        ) : null}

        <div
          ref={containerRef}
          className="absolute bottom-0 left-1/2 h-[28vh] w-full -translate-x-1/2 md:h-[30vh]"
        >
          <ConfettiBurst trigger={confetti} />

          {!buttonsVisible ? (
            <MotionDiv
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-body text-sm font-semibold text-[#2a0e1c]/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              …
            </MotionDiv>
          ) : null}

          <div
            className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: buttonsVisible ? 1 : 0,
              pointerEvents: buttonsVisible ? 'auto' : 'none',
            }}
          >
            <div className="mx-auto flex w-full max-w-[520px] items-center justify-center gap-4">
              <button
                type="button"
                onClick={onYesClick}
                disabled={!buttonsVisible || locked}
                className="rounded-full bg-deep-pink px-10 py-4 font-body text-lg font-extrabold text-white shadow-glow hover:bg-dark-pink focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-60"
                style={yesStyle}
              >
                {yesText}
              </button>
            </div>
          </div>

          <MotionDiv
            className="absolute"
            animate={posReady ? { x: noPos.x, y: noPos.y } : {}}
            transition={{ type: 'spring', stiffness: 520, damping: 32 }}
            style={{ opacity: posReady && buttonsVisible ? 1 : 0, pointerEvents: buttonsVisible ? 'auto' : 'none' }}
          >
            <div className="relative">
              <button
                ref={noRef}
                type="button"
                onClick={onNoClick}
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse') onNoHover()
                }}
                onMouseEnter={onNoHover}
                disabled={noDisabled || !buttonsVisible || locked}
                className={`rounded-full px-10 py-4 font-body text-lg font-extrabold shadow-glow focus:outline-none focus:ring-2 focus:ring-deep-pink/30 disabled:opacity-60 ${
                  noDisabled
                    ? 'cursor-not-allowed bg-white/40 text-[#2a0e1c]/55'
                    : 'bg-white/55 text-[#2a0e1c] hover:bg-white/75 disabled:hover:bg-white/55'
                }`}
              >
                {noText}
              </button>

              {noDisabled ? (
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <div className="text-3xl font-black text-dark-pink/70">✕</div>
                </div>
              ) : null}

              {noCaption ? (
                <div className="pointer-events-none absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 rounded-full bg-white/60 px-3 py-1 font-body text-xs font-bold text-[#2a0e1c]/70">
                  {noCaption}
                </div>
              ) : null}
            </div>
          </MotionDiv>

          {/* white fade overlay */}
          {transitionToWhiteOnYes ? (
            <motion.div
              className="pointer-events-none absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: white ? 1 : 0 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
