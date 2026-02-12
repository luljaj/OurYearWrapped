import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import OnboardingChoiceSlide from './OnboardingChoiceSlide.jsx'

const MotionDiv = motion.div

export default function OnboardingFinalValentineSlide({ onYes }) {
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowButtons(true), 4200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <MotionDiv
        className="text-center font-script text-5xl leading-[1.06] tracking-wide text-dark-pink md:text-6xl whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2, ease: 'easeInOut' }}
      >
        Will you be my valentine, my beautiful girl?
      </MotionDiv>

      {showButtons ? (
        <div className="mt-8">
          <OnboardingChoiceSlide
            question=""
            yesText="Yes"
            noText="No"
            noDisabled
            noCaption="No way out of this one!"
            onYes={onYes}
          />
        </div>
      ) : (
        <MotionDiv
          className="mt-10 text-center font-body text-sm font-semibold text-[#2a0e1c]/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          …
        </MotionDiv>
      )}
    </div>
  )
}
