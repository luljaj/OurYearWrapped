import MonthIntro from '../components/MonthIntro.jsx'
import StatReveal from '../components/StatReveal.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'

function ConfettiOverlay() {
  const pieces = Array.from({ length: 18 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-3 w-3 rounded-sm bg-white/70"
          style={{
            left: `${(i * 100) / pieces.length}%`,
            animation: `oyw-fall ${2.2 + (i % 6) * 0.22}s linear infinite`,
            transform: `rotate(${i * 20}deg)`,
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  )
}

export const novemberSlides = [
  {
    key: 'nov-1',
    gradientClass: 'fall-gradient',
    images: [],
    Component: () => <MonthIntro month="November 2025" subtitle="Turning point. A deeper kind of love." />,
  },
  {
    key: 'nov-2',
    gradientClass: 'fall-gradient',
    images: [],
    Component: () => <StatReveal number={6} description="People you got out in dodgeball (2x MVP 🏆)" icon="🏆" />,
  },
  {
    key: 'nov-3',
    gradientClass: 'fall-gradient',
    images: ['photo29.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo29.jpeg"
        caption="Texas Roadhouse"
        date="November 2025"
        layout="landscape"
      />
    ),
  },
  {
    key: 'nov-4',
    gradientClass: 'fall-gradient',
    images: ['photo30.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo30.jpeg"
        caption="Breaking Bad begins"
        date="November 2025"
        layout="portrait"
      />
    ),
  },
  {
    key: 'nov-5',
    gradientClass: 'fall-gradient',
    images: [],
    Component: () => (
      <StatReveal number={4} description="Taco Bell Uber Eats in November alone" icon="🌮" />
    ),
  },
  {
    key: 'nov-6',
    gradientClass: 'celebration-gradient',
    images: [],
    Component: function Anniversary() {
      return (
        <div className="relative">
          <ConfettiOverlay />
          <QuoteSlide text={'One Year Anniversary 💕'} fontSize="lg" />
        </div>
      )
    },
  },
  {
    key: 'nov-7',
    gradientClass: 'celebration-gradient',
    images: ['photo20.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo20.jpeg"
        caption="My forever love, my angel."
        date="Bouquet"
        layout="portrait"
      />
    ),
  },
  {
    key: 'nov-8',
    gradientClass: 'celebration-gradient',
    images: ['photo21.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo21.jpeg"
        caption="Anniversary together"
        date="November 2025"
        layout="landscape"
      />
    ),
  },
]
