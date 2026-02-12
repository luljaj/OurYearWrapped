import MultiStat from '../components/MultiStat.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'

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
    Component: () => <QuoteSlide text={'(infinity) reasons I love you'} fontSize="lg" />,
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
    key: 'close-5',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Problems that shook us both to the core.'} fontSize="lg" />,
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
    gradientClass: 'celebration-gradient',
    images: [],
    Component: () => (
      <QuoteSlide
        text={'Happy Valentines Day, forever and always, Teagan. Love, Luka.'}
        fontSize="lg"
        tone="dark"
      />
    ),
  },
]
