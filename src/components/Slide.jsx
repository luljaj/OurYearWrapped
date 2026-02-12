import { motion, useReducedMotion } from 'framer-motion'
import { slideVariants } from '../utils/animations.js'
import { ANIMATION_DURATION } from '../utils/constants.js'

const MotionSection = motion.section

export default function Slide({
  children,
  gradientClass,
  direction,
  index,
  total,
  debug,
  slideKey,
}) {
  const reduced = useReducedMotion()

  return (
    <MotionSection
      className={`absolute inset-0 h-full w-full overflow-hidden ${gradientClass || ''}`}
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
      <div className="pointer-events-none absolute inset-0 oyw-noise" aria-hidden="true" />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      {debug ? (
        <div className="pointer-events-none absolute left-4 top-4 z-30">
          <div className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs font-bold text-[#2a0e1c] shadow-glow">
            {index + 1}/{total} {slideKey ? `(${slideKey})` : ''}
          </div>
        </div>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-10 md:px-10">
        <div className="w-full max-w-[860px]">{children}</div>
      </div>
    </MotionSection>
  )
}
