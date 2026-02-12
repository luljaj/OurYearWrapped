import { motion, usePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const MotionDiv = motion.div

export default function OnboardingTextSlide({
  text,
  onNext,
  autoAdvanceMs = 0,
  size = 'lg', // xxs | xs | sm | md | lg | xl
  effect, // shrinkShake
}) {
  const reduced = useReducedMotion()
  const [isPresent] = usePresence()
  const timeoutRef = useRef(null)

  useEffect(() => {
    // AnimatePresence keeps exiting slides mounted for the exit animation.
    // If the user manually advances, cancel any pending auto-advance to avoid skipping.
    if (!isPresent && timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [isPresent])

  useEffect(() => {
    if (!onNext || !autoAdvanceMs) return
    timeoutRef.current = setTimeout(() => onNext(), autoAdvanceMs)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [autoAdvanceMs, onNext])

  const shake = effect === 'shrinkShake' && !reduced
  const sizeClass =
    size === 'xxs'
      ? 'text-sm md:text-base'
      : size === 'xs'
      ? 'text-xl md:text-2xl'
      : size === 'sm'
        ? 'text-3xl md:text-4xl'
        : size === 'md'
          ? 'text-4xl md:text-5xl'
          : size === 'xl'
            ? 'text-6xl md:text-7xl'
            : 'text-5xl md:text-6xl'

  return (
    <div className="mx-auto w-full max-w-[920px] text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <MotionDiv
          animate={shake ? { scale: [1, 0.84, 0.74] } : undefined}
          transition={
            shake
              ? {
                  delay: 0.12,
                  duration: 1.15,
                  ease: 'easeInOut',
                  times: [0, 0.55, 1],
                }
              : undefined
          }
        >
          <MotionDiv
            animate={
              shake
                ? {
                    x: [0, -2, 2, -2, 2, 0],
                    rotate: [0, -0.6, 0.6, -0.4, 0.4, 0],
                  }
                : undefined
            }
            transition={
              shake
                ? {
                    delay: 0.12,
                    duration: 0.56,
                    repeat: 2,
                    ease: 'easeInOut',
                  }
                : undefined
            }
          >
            <div
              className={`font-script ${sizeClass} leading-[1.12] tracking-wide text-dark-pink whitespace-pre-line`}
            >
              {text}
            </div>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}
