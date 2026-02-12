import { motion } from 'framer-motion'
import QuoteSlide from '../components/QuoteSlide.jsx'
import MultiStat from '../components/MultiStat.jsx'

const MotionDiv = motion.div

function OpeningTitle() {
  return (
    <div className="mx-auto w-full max-w-[860px] text-center">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="oyw-glass rounded-3xl px-6 py-12 shadow-glow md:px-10 md:py-14"
      >
        <div className="font-body text-xs font-semibold tracking-[0.24em] text-[#2a0e1c]/60 md:text-sm">
          OUR YEAR WRAPPED
        </div>
        <h1 className="mt-4 font-script text-5xl leading-[1.05] text-deep-pink drop-shadow-sm md:text-6xl">
          Our Year Wrapped,
          <br />
          my beautiful valentine,
        </h1>
        <div className="mt-6 font-body text-sm font-semibold text-[#2a0e1c]/70 md:text-base">
          (Swipe to start)
        </div>
      </MotionDiv>
    </div>
  )
}

function LoadingSlide() {
  return (
    <div className="mx-auto w-full max-w-[640px] text-center">
      <div className="oyw-glass rounded-3xl px-6 py-12 shadow-glow md:px-10 md:py-14">
        <div className="font-script text-4xl text-[#2a0e1c] md:text-5xl">
          Loading our memories…
        </div>
        <div className="mt-10 overflow-hidden rounded-full bg-white/40">
          <MotionDiv
            className="h-3 rounded-full bg-deep-pink/70"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.3, ease: 'easeInOut' }}
          />
        </div>
        <MotionDiv
          className="mt-6 font-body text-sm font-semibold text-[color:var(--oyw-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          (Swipe or press → to begin)
        </MotionDiv>
      </div>
    </div>
  )
}

export const openingSlides = [
  {
    key: 'opening-1',
    gradientClass: 'spring-gradient',
    images: [],
    Component: OpeningTitle,
  },
  {
    key: 'opening-2',
    gradientClass: 'spring-gradient',
    images: [],
    Component: function CheckIn() {
      return (
        <MultiStat
          title="Quick check-in"
          stats={[
            { number: 365, label: "days since last Valentine's", icon: '💞' },
            { number: 2, label: 'days since your birthday', icon: '🎂' },
          ]}
          note="Been a little while, lets check what went down since then!"
        />
      )
    },
  },
  {
    key: 'opening-3',
    gradientClass: 'spring-gradient',
    images: [],
    Component: function BuiltTogether() {
      return (
        <QuoteSlide
          text={"Here's what we built together…"}
          fontSize="lg"
        />
      )
    },
  },
  {
    key: 'opening-4',
    gradientClass: 'spring-gradient',
    images: [],
    Component: LoadingSlide,
  },
]
