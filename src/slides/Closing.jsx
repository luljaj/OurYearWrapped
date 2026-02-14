import MultiStat from '../components/MultiStat.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import ScrollingGalleryBackground from '../components/ScrollingGalleryBackground.jsx'
import { IMAGE_MANIFEST } from '../utils/imageManifest.js'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function StatsBento() {
  return (
    <MultiStat
      title="The stats"
      stats={[
        { number: 38, label: 'Sleepovers', icon: '🌙' },
        { number: 11, label: 'Boba runs in March', icon: '🧋' },
        { number: 290, label: 'Meals together', icon: '🍽️' },
        { number: 17, label: 'Uber Eats trips', icon: '🛵' },
        { number: 5, label: 'City trips', icon: '🏙️' },
        { number: 95, label: 'Fun times', icon: '🎉' },
      ]}
    />
  )
}

export const closingSlides = [
  {
    key: 'close-1',
    gradientClass: 'celebration-gradient',
    images: [],
    Component: StatsBento,
  },
  {
    key: 'close-2',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'But, my favorite stat…'} fontSize="lg" />,
  },
  {
    key: 'close-3',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'∞ reasons I love you'} fontSize="lg" />,
  },
  {
    key: 'close-4',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => (
      <QuoteSlide text={'Our year was a rollercoaster of love, but we had problems.'} fontSize="lg" />
    ),
  },
  {
    key: 'close-6',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'But our love prevailed, as it always does.'} fontSize="lg" />,
  },
  {
    key: 'close-7',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <QuoteSlide
        text={'Because no matter what happens, our hearts are forever intertwined.'}
        fontSize="lg"
      />
    ),
  },
  {
    key: 'close-8',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <QuoteSlide
        text={'Every day I wake up, my body and soul look for you.'}
        fontSize="lg"
      />
    ),
  },
  {
    key: 'close-9',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'I am so glad to be with you today…'} fontSize="lg" />,
  },
  {
    key: 'close-10',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <QuoteSlide text={'And I am grateful to be with you for the rest of my life.'} fontSize="lg" />
    ),
  },
  {
    key: 'close-11',
    gradientClass: 'bg-[#FFE3F1]',
    images: [],
    Component: ClosingFinalSlide,
  },
]

function ClosingFinalSlide() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <ScrollingGalleryBackground filenames={IMAGE_MANIFEST} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FFE3F1] via-[#FFF0F5] to-[#FFE9F4] opacity-40" />
      <FinalReadMeCard open={open} onClose={() => setOpen(false)} />
      <div className="relative z-10">
        <QuoteSlide
          text={'Happy Valentines Day, forever and always, Teagan. Love, Luka.'}
          fontSize="lg"
        />
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full bg-white/90 px-6 py-3 font-body text-sm font-extrabold text-dark-pink shadow-glow hover:bg-white focus:outline-none focus:ring-2 focus:ring-deep-pink/30"
          >
            Read me!
          </button>
        </div>
      </div>
    </div>
  )
}

function FinalReadMeCard({ open, onClose }) {

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, open])

  const text =
    "Hey, beautiful. Sorry I don't have a physical card for you, but I have this. I just want you to know how proud I am of you and how sure I am of our relationship. i understand we have had our troubles this year, and I am sorry to hurt you the way I have. I mean it with my whole heart when I tell you that it hurts me to know that I've treated you that way. Making this made me think of how happy we were before. While i was making this though, I thought about how nothing has changed since then. I know that I still love you the way I always ahve, if not more. I love you more and more every day we are together, no matter what. Nothing will ever bring us apart. We are meant to be. My heart begs for you every second, and my mind knows for sure that you are the one. Even when we are arguing, and I'm angry or sad and crying, I still love you with my whole soul. I mean it when I say that I would do anything for you. You are what love means in my eyes. You are the concept of love, in all of your grace and beauty. I love you, more than anything Teagan. I love you so much. Thank you for being mine."

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button type="button" className="absolute inset-0 cursor-default bg-black/60" aria-label="Close card" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Read me card"
            className="relative w-full max-w-[980px] overflow-hidden rounded-[28px] border border-white/45 bg-[#FFF0F5] shadow-glow"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-deep-pink/20 px-6 py-4">
              <div className="font-display text-base font-extrabold tracking-wide text-[#2a0e1c]">
                Read me
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-white/70 px-3 py-1 text-xs font-extrabold text-[#2a0e1c] hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
              >
                Close
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto px-6 py-6 md:px-10 md:py-9">
              <div className="font-script text-xl leading-9 tracking-wide text-[#2a0e1c]/90 whitespace-pre-line md:text-2xl">
                {text}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
