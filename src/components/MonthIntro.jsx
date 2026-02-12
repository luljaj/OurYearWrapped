import { motion } from 'framer-motion'
import { scaleIn, staggerContainer } from '../utils/animations.js'

const MotionDiv = motion.div

function FloatingHearts() {
  const hearts = [
    { x: '10%', y: '18%', s: 22, r: -12, o: 0.35 },
    { x: '78%', y: '16%', s: 26, r: 12, o: 0.35 },
    { x: '16%', y: '72%', s: 28, r: 8, o: 0.25 },
    { x: '82%', y: '70%', s: 20, r: -6, o: 0.25 },
    { x: '50%', y: '10%', s: 18, r: 0, o: 0.18 },
  ]

  return (
    <MotionDiv
      className="pointer-events-none absolute inset-0"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {hearts.map((h, idx) => (
        <MotionDiv
          key={idx}
          className="absolute select-none"
          style={{
            left: h.x,
            top: h.y,
            transform: `rotate(${h.r}deg)`,
            opacity: h.o,
            fontSize: h.s,
          }}
          variants={scaleIn}
          transition={{ duration: 0.5, delay: idx * 0.12 }}
        >
          ❤
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}

export default function MonthIntro({ month, subtitle }) {
  return (
    <div className="relative text-center">
      <FloatingHearts />
      <MotionDiv
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto inline-block rounded-3xl px-6 py-8 md:px-10"
      >
        <div className="font-body text-sm font-semibold tracking-wide text-[color:var(--oyw-muted)]">
          Our Year Wrapped
        </div>
        <h1 className="mt-3 font-script text-5xl leading-[1.05] tracking-wide text-[#2a0e1c] drop-shadow-sm md:text-7xl">
          {month}
        </h1>
        {subtitle ? (
          <p className="mt-4 font-body text-base text-[color:var(--oyw-muted)] md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </MotionDiv>
    </div>
  )
}
