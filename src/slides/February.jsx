import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'

export const februarySlides = [
  {
    key: 'feb-1',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <MonthIntro month="February 2025" subtitle="Our First Valentines" />,
  },
  {
    key: 'feb-2',
    gradientClass: 'spring-gradient',
    images: ['photo1.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo1.jpg"
        caption="Where it all started… again"
        date="Valentine's Day 2025"
        layout="portrait"
      />
    ),
  },
  {
    key: 'feb-3',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <QuoteSlide text={'Little did we know what this year had in store…'} fontSize="lg" />
    ),
  },
]
