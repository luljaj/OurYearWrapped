import MonthIntro from '../components/MonthIntro.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import StatReveal from '../components/StatReveal.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import MultiStat from '../components/MultiStat.jsx'

export const marchSlides = [
  {
    key: 'mar-1',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <MonthIntro month="March 2025" subtitle="Pickleball and Boba arc" />,
  },
  {
    key: 'mar-2',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Our Pickleball & Boba Era Began 🏓🧋'} fontSize="lg" />,
  },
  {
    key: 'mar-3',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <StatReveal number={7} description="Pickleball sessions together" icon="🏓" />
    ),
  },
  {
    key: 'mar-3b',
    gradientClass: 'spring-gradient',
    images: ['photo26.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo26.jpeg"
        caption="Pickleball trip"
        date="March 2025"
        layout="landscape"
      />
    ),
  },
  {
    key: 'mar-4',
    gradientClass: 'spring-gradient',
    images: ['photo2.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo2.jpeg"
        caption="Peekskill boba trip"
        date="March 2025"
        layout="landscape"
      />
    ),
  },
  {
    key: 'mar-5',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="March stats"
        stats={[
          { number: 11, label: 'Boba runs (March–June)', icon: '🧋' },
          { number: 25, label: 'Meals together in March', icon: '🍽️' },
          { number: 4, label: 'Restaurant trips together', icon: '🍝' },
        ]}
      />
    ),
  },
]
