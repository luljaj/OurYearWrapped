import { motion } from 'framer-motion'
import QuoteSlide from '../components/QuoteSlide.jsx'
import MultiStat from '../components/MultiStat.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'

const MotionDiv = motion.div

function SplitCheckpoint() {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="grid gap-5 md:grid-cols-2">
        <MotionDiv
          className="oyw-glass rounded-3xl p-6 shadow-glow md:p-8"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="font-script text-4xl text-[#2a0e1c] md:text-5xl">First 6 months</h2>
          <p className="mt-3 font-body text-sm font-semibold text-[color:var(--oyw-muted)] md:text-base">
            Halfway… and already unforgettable.
          </p>
          <div className="mt-6">
            <MultiStat
              stats={[
                { number: '💌', label: 'Thousands of little moments', icon: '💌' },
                { number: '🏓', label: 'Pickleball + boba era', icon: '🧋' },
                { number: '🎓', label: 'Graduation together', icon: '🎓' },
              ]}
            />
          </div>
        </MotionDiv>

        <MotionDiv
          className="oyw-glass rounded-3xl p-6 shadow-glow md:p-8"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="font-body text-xs font-semibold tracking-wide text-[color:var(--oyw-muted)]">
            Montage
          </div>
          <div className="mt-4 grid gap-4">
            <PhotoMoment photoSrc="photo13.jpeg" caption="Summer nights" date="July 2025" layout="landscape" />
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}

export const midYearSlides = [
  {
    key: 'mid-1',
    gradientClass: 'summer-gradient',
    images: ['photo13.jpeg'],
    Component: SplitCheckpoint,
  },
  {
    key: 'mid-2',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <QuoteSlide text={'And we were just getting started…'} fontSize="lg" />,
  },
]
