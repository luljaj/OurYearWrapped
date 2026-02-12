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
    images: ['photo4.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo4.jpg"
        caption="We both chose Binghamton 💚"
        date="Commitment Day"
        layout="landscape"
      />
    ),
  },
  {
    key: 'may-3',
    gradientClass: 'spring-gradient',
    images: ['photo5.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo5.jpg"
        caption="Cici joined the family"
        date="Labubu Cici"
        layout="portrait"
      />
    ),
  },
  {
    key: 'may-4',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <QuoteSlide text={'And your miu miu bag just refused to deliver'} />,
  },
]
