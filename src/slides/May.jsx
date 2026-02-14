import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'

export const maySlides = [
  {
    key: 'may-1',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <MonthIntro month="Our Commitment" subtitle="May 2025" />,
  },
  {
    key: 'may-2',
    gradientClass: 'binghamton-gradient',
    images: ['photo4.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo4.jpeg"
        caption="We both chose Binghamton 💚"
        date="Commitment Day"
        layout="landscape"
      />
    ),
  },
  {
    key: 'may-3',
    gradientClass: 'spring-gradient',
    images: ['photo5.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo5.jpeg"
        caption="Cici"
        date="You bought Cici off of that Tiktok Live"
        layout="portrait"
      />
    ),
  },
  {
    key: 'may-4',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'And your Miu miu bag was in shipping hell'} />,
  },
]
