import { motion, useReducedMotion } from 'framer-motion'
import { slideVariants } from '../utils/animations.js'
import { ANIMATION_DURATION } from '../utils/constants.js'

const MotionSection = motion.section
const MotionDiv = motion.div

function HeartsBackground() {
  const hearts = [
    { left: '8%', top: '16%', size: 18, opacity: 0.18, duration: 5.2 },
    { left: '84%', top: '14%', size: 22, opacity: 0.16, duration: 6.2 },
    { left: '16%', top: '70%', size: 24, opacity: 0.12, duration: 5.8 },
    { left: '80%', top: '72%', size: 18, opacity: 0.12, duration: 6.8 },
    { left: '48%', top: '10%', size: 16, opacity: 0.1, duration: 7.2 },
    { left: '44%', top: '78%', size: 14, opacity: 0.1, duration: 7.8 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {hearts.map((h, idx) => (
        <MotionDiv
          key={idx}
          className="absolute select-none text-deep-pink"
          style={{ left: h.left, top: h.top, fontSize: h.size, opacity: h.opacity }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤
        </MotionDiv>
      ))}
    </div>
  )
}

export default function OnboardingSlide({
  children,
  gradientClass,
  direction,
  index,
  total,
  debug,
  slideKey,
}) {
  const reduced = useReducedMotion()
  const isWhite = typeof gradientClass === 'string' && gradientClass.includes('bg-white')

  return (
    <MotionSection
      className={`absolute inset-0 h-full w-full overflow-hidden ${
        gradientClass || 'bg-[#FFF0F5]'
      }`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: reduced ? 'tween' : 'spring', stiffness: 320, damping: 34 },
        opacity: { duration: ANIMATION_DURATION * 0.9 },
      }}
    >
      {isWhite ? null : <HeartsBackground />}

      {debug ? (
        <div className="pointer-events-none absolute left-4 top-4 z-30">
          <div className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs font-bold text-[#2a0e1c] shadow-glow">
            {index + 1}/{total} {slideKey ? `(${slideKey})` : ''}
          </div>
        </div>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-10 md:px-10">
        <div className="w-full max-w-[880px]">{children}</div>
      </div>
    </MotionSection>
  )
}
