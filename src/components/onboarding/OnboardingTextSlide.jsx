import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function OnboardingTextSlide({
  text,
  onNext,
  size = 'lg', // sm | md | lg
}) {
  const sizeClass =
    size === 'sm'
      ? 'text-3xl md:text-4xl'
      : size === 'md'
        ? 'text-4xl md:text-5xl'
        : 'text-5xl md:text-6xl'

  return (
    <button
      type="button"
      onClick={() => onNext?.()}
      className="mx-auto block w-full max-w-[920px] text-center focus:outline-none focus:ring-2 focus:ring-deep-pink/30 rounded-3xl"
      aria-label="Next"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div
          className={`font-script ${sizeClass} leading-[1.12] tracking-wide text-dark-pink whitespace-pre-line`}
        >
          {text}
        </div>

        <div className="mt-10 font-body text-xs font-semibold text-[#2a0e1c]/45">
          Tap to continue
        </div>
      </MotionDiv>
    </button>
  )
}
