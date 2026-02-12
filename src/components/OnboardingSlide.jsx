import { motion, useReducedMotion } from 'framer-motion'
import { slideVariants } from '../utils/animations.js'
import { ANIMATION_DURATION } from '../utils/constants.js'

const MotionSection = motion.section
const MotionDiv = motion.div

function HeartsBackground({ mode = 'default', reduced = false }) {
  const hearts =
    mode === 'love'
      ? [
          { left: '6%', top: '16%', size: 44, opacity: 0.2, duration: 5.3, delay: 0.1, pattern: 'orbit' },
          { left: '86%', top: '12%', size: 40, opacity: 0.2, duration: 5.9, delay: 0.5, pattern: 'figure8' },
          { left: '12%', top: '72%', size: 38, opacity: 0.17, duration: 6.6, delay: 0.3, pattern: 'swoop' },
          { left: '82%', top: '74%', size: 34, opacity: 0.16, duration: 6.9, delay: 0.2, pattern: 'orbit2' },
          { left: '50%', top: '8%', size: 30, opacity: 0.15, duration: 6.1, delay: 0.0, pattern: 'orbit' },
          { left: '46%', top: '82%', size: 28, opacity: 0.14, duration: 7.2, delay: 0.6, pattern: 'figure8' },
          { left: '26%', top: '10%', size: 22, opacity: 0.12, duration: 7.6, delay: 0.4, pattern: 'drift' },
          { left: '72%', top: '22%', size: 24, opacity: 0.12, duration: 7.3, delay: 0.8, pattern: 'drift2' },
          { left: '22%', top: '58%', size: 20, opacity: 0.1, duration: 7.8, delay: 0.2, pattern: 'swoop2' },
          { left: '78%', top: '56%', size: 20, opacity: 0.1, duration: 8.2, delay: 0.9, pattern: 'swoop' },
        ]
      : mode === 'big'
        ? [
            { left: '6%', top: '14%', size: 34, opacity: 0.2, duration: 6.0, delay: 0.1, pattern: 'drift' },
            { left: '86%', top: '12%', size: 38, opacity: 0.18, duration: 6.8, delay: 0.5, pattern: 'drift2' },
            { left: '14%', top: '72%', size: 42, opacity: 0.15, duration: 6.4, delay: 0.2, pattern: 'swoop2' },
            { left: '82%', top: '74%', size: 30, opacity: 0.16, duration: 7.1, delay: 0.8, pattern: 'swoop' },
            { left: '50%', top: '10%', size: 26, opacity: 0.13, duration: 7.5, delay: 0.0, pattern: 'orbit2' },
            { left: '44%', top: '80%', size: 24, opacity: 0.12, duration: 8.1, delay: 0.6, pattern: 'drift' },
            { left: '26%', top: '18%', size: 22, opacity: 0.1, duration: 8.6, delay: 0.3, pattern: 'drift2' },
            { left: '72%', top: '22%', size: 22, opacity: 0.1, duration: 8.2, delay: 0.9, pattern: 'swoop2' },
          ]
      : [
          { left: '8%', top: '16%', size: 18, opacity: 0.18, duration: 6.4, delay: 0.0, pattern: 'drift' },
          { left: '84%', top: '14%', size: 22, opacity: 0.16, duration: 7.2, delay: 0.4, pattern: 'drift2' },
          { left: '16%', top: '70%', size: 24, opacity: 0.12, duration: 6.8, delay: 0.2, pattern: 'swoop2' },
          { left: '80%', top: '72%', size: 18, opacity: 0.12, duration: 7.6, delay: 0.8, pattern: 'swoop' },
          { left: '48%', top: '10%', size: 16, opacity: 0.1, duration: 8.4, delay: 0.1, pattern: 'orbit2' },
          { left: '44%', top: '78%', size: 14, opacity: 0.1, duration: 8.9, delay: 0.6, pattern: 'drift' },
        ]

  const patterns =
    mode === 'love'
      ? {
          orbit: {
            x: [0, 36, 0, -36, 0],
            y: [-26, 0, 26, 0, -26],
            scale: [1, 1.32, 1.14, 1.44, 1.1],
            rotate: [0, 18, -14, 16, 0],
          },
          orbit2: {
            x: [0, -38, 0, 38, 0],
            y: [0, -24, 0, 24, 0],
            scale: [1, 1.26, 1.12, 1.38, 1.08],
            rotate: [0, -16, 12, -14, 0],
          },
          figure8: {
            x: [0, 32, 0, -32, 0],
            y: [0, -32, 0, 32, 0],
            scale: [1, 1.3, 1.14, 1.42, 1.1],
            rotate: [0, 14, -18, 10, 0],
          },
          swoop: {
            x: [0, 22, -14, 16, 0],
            y: [0, -32, 22, -22, 0],
            scale: [1, 1.22, 1.08, 1.28, 1.08],
            rotate: [0, 10, -12, 8, 0],
          },
          swoop2: {
            x: [0, -24, 16, -16, 0],
            y: [0, -28, 18, -20, 0],
            scale: [1, 1.2, 1.08, 1.26, 1.08],
            rotate: [0, -12, 10, -8, 0],
          },
          drift: {
            x: [0, 18, -12, 14, 0],
            y: [0, -22, 14, -16, 0],
            scale: [1, 1.16, 1.06, 1.22, 1.06],
            rotate: [0, 8, -10, 6, 0],
          },
          drift2: {
            x: [0, -18, 13, -14, 0],
            y: [0, -20, 16, -14, 0],
            scale: [1, 1.15, 1.06, 1.2, 1.06],
            rotate: [0, -10, 8, -6, 0],
          },
        }
      : {
          drift: {
            x: [0, 10, -6, 8, 0],
            y: [0, -12, 8, -10, 0],
            scale: [1, 1.08, 1.02, 1.1, 1.02],
            rotate: [0, 6, -6, 4, 0],
          },
          drift2: {
            x: [0, -9, 6, -7, 0],
            y: [0, -12, 8, -10, 0],
            scale: [1, 1.07, 1.02, 1.09, 1.02],
            rotate: [0, -6, 6, -4, 0],
          },
          swoop: {
            x: [0, 10, -8, 6, 0],
            y: [0, -14, 10, -12, 0],
            scale: [1, 1.06, 1.02, 1.08, 1.02],
            rotate: [0, 6, -8, 4, 0],
          },
          swoop2: {
            x: [0, -10, 8, -6, 0],
            y: [0, -14, 10, -12, 0],
            scale: [1, 1.06, 1.02, 1.08, 1.02],
            rotate: [0, -6, 8, -4, 0],
          },
          orbit2: {
            x: [0, 12, 0, -12, 0],
            y: [-8, 0, 8, 0, -8],
            scale: [1, 1.06, 1.02, 1.08, 1.02],
            rotate: [0, 8, -6, 6, 0],
          },
        }

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {hearts.map((h, idx) => (
        // The patterns are small, relative offsets so the hearts can sit in corners
        // without crossing the content too aggressively.
        <MotionDiv
          key={idx}
          className="absolute select-none text-deep-pink"
          style={{
            left: h.left,
            top: h.top,
            fontSize: h.size,
            opacity: h.opacity,
            textShadow:
              mode === 'love'
                ? '0 0 26px rgba(255, 20, 147, 0.28)'
                : mode === 'big'
                  ? '0 0 22px rgba(255, 20, 147, 0.22)'
                  : '0 0 18px rgba(255, 20, 147, 0.18)',
          }}
          initial={
            reduced
              ? undefined
              : mode === 'love'
                ? { opacity: 0, scale: 0.75 }
                : { opacity: 0, scale: 0.9 }
          }
          animate={
            reduced
              ? undefined
              : {
                  opacity: [h.opacity, h.opacity * 1.12, h.opacity],
                  x: patterns[h.pattern]?.x || 0,
                  y: patterns[h.pattern]?.y || 0,
                  scale: patterns[h.pattern]?.scale || 1,
                  rotate: patterns[h.pattern]?.rotate || 0,
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: h.duration,
                  delay: h.delay || 0,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
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
  heartsMode = 'default', // default | big | love
}) {
  const reduced = useReducedMotion()
  const isWhite = typeof gradientClass === 'string' && gradientClass.includes('bg-white')
  const showHearts = !isWhite || heartsMode === 'love'
  const loveShake =
    heartsMode === 'love' && !reduced
      ? {
          x: [0, -2, 2, -1.5, 1.5, 0],
          rotate: [0, -0.35, 0.35, -0.25, 0.25, 0],
          scale: [1, 1.006, 1],
        }
      : {}

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
      {showHearts ? <HeartsBackground mode={heartsMode} reduced={reduced} /> : null}

      {debug ? (
        <div className="pointer-events-none absolute left-4 top-4 z-30">
          <div className="rounded-full bg-white/70 px-3 py-1 font-mono text-xs font-bold text-[#2a0e1c] shadow-glow">
            {index + 1}/{total} {slideKey ? `(${slideKey})` : ''}
          </div>
        </div>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-10 md:px-10">
        <MotionDiv
          className="w-full max-w-[880px]"
          animate={loveShake}
          transition={
            heartsMode === 'love' && !reduced
              ? {
                  duration: 1.15,
                  repeat: Infinity,
                  repeatDelay: 0.35,
                  ease: 'easeInOut',
                }
              : undefined
          }
        >
          {children}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
