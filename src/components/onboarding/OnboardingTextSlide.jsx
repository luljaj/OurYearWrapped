import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function OnboardingTextSlide({
  text,
  size = 'lg', // sm | md | lg
}) {
  const sizeClass =
    size === 'sm'
      ? 'text-3xl md:text-4xl'
      : size === 'md'
        ? 'text-4xl md:text-5xl'
        : 'text-5xl md:text-6xl'

  return (
    <div className="mx-auto w-full max-w-[920px] text-center">
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
      </MotionDiv>
    </div>
  )
}
