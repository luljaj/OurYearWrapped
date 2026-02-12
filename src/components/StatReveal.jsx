import { motion } from 'framer-motion'
import { pulseGlow } from '../utils/animations.js'
import { useCountUp } from '../utils/animations.js'

const MotionDiv = motion.div

function isFiniteNumber(n) {
  return typeof n === 'number' && Number.isFinite(n)
}

export default function StatReveal({ number, unit, description, icon, compact = false }) {
  const canCount = isFiniteNumber(number)
  const animated = useCountUp(canCount ? number : 0, 1.5)
  const display = canCount ? Math.round(animated) : String(number ?? '')

  const wrapperMax = compact ? 'max-w-none' : 'max-w-[760px]'
  const pad = compact ? 'px-5 py-7 md:px-6 md:py-8' : 'px-6 py-10 md:px-10 md:py-12'
  const iconSize = compact ? 'text-2xl md:text-3xl mb-2' : 'text-3xl md:text-4xl mb-3'
  const numSize = compact ? 'text-5xl md:text-6xl' : 'text-7xl md:text-8xl'
  const descSize = compact ? 'text-sm md:text-base' : 'text-base md:text-lg'

  return (
    <div className={`mx-auto w-full ${wrapperMax} text-center`}>
      <MotionDiv
        className={`oyw-glass rounded-3xl shadow-glow ${pad}`}
        variants={pulseGlow}
        animate="animate"
      >
        {icon ? (
          <div className={`${iconSize} opacity-90`} aria-hidden="true">
            {icon}
          </div>
        ) : null}

        <div className={`font-display ${numSize} font-extrabold tracking-tight text-[#2a0e1c]`}>
          {display}
          {unit ? (
            <span className="ml-2 align-middle text-2xl font-bold text-[color:var(--oyw-muted)] md:text-3xl">
              {unit}
            </span>
          ) : null}
        </div>

        {description ? (
          <div className={`mt-3 font-body font-semibold text-[color:var(--oyw-muted)] ${descSize}`}>
            {description}
          </div>
        ) : null}
      </MotionDiv>
    </div>
  )
}
