import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function BodyTextSlide({ text, title }) {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <MotionDiv
        className="oyw-glass rounded-3xl px-6 py-10 shadow-glow md:px-10 md:py-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {title ? (
          <h2 className="text-center font-script text-4xl text-[#2a0e1c] md:text-5xl">
            {title}
          </h2>
        ) : null}
        <p className={`font-body text-lg leading-relaxed text-[#2a0e1c]/90 md:text-xl ${title ? 'mt-6' : ''}`}>
          {text}
        </p>
      </MotionDiv>
    </div>
  )
}

