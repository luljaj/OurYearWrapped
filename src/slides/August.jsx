import MonthIntro from '../components/MonthIntro.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'

export const augustSlides = [
  {
    key: 'aug-1',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <MonthIntro month="August 2025" subtitle="Distance… and college starting." />,
  },
  {
    key: 'aug-1b',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => <QuoteSlide text={'We started college together'} fontSize="lg" />,
  },
  {
    key: 'aug-1c',
    gradientClass: 'struggle-gradient',
    images: ['photo16.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo16.jpeg"
        caption="Taichi Sushi Burrito"
        date="it was lowkey a scam"
        layout="landscape"
      />
    ),
  },
  {
    key: 'aug-1c2',
    gradientClass: 'struggle-gradient',
    images: ['photo33.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo33.jpeg"
        caption="Going to Pho-nomenal"
        layout="landscape"
      />
    ),
  },
  {
    key: 'aug-1d',
    gradientClass: 'struggle-gradient',
    images: ['photo32.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo32.jpeg"
        caption="Eating outside marketplace"
        date="Seems so long ago"
        layout="landscape"
      />
    ),
  },
  {
    key: 'aug-5',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <QuoteSlide text={'August\n\nNew beginnings for us and our relationship'} fontSize="lg" />,
  },
]
