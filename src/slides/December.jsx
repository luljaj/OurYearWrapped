import MonthIntro from '../components/MonthIntro.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import MultiStat from '../components/MultiStat.jsx'

export const decemberSlides = [
  {
    key: 'dec-1',
    gradientClass: 'winter-gradient',
    images: [],
    Component: () => <MonthIntro month="December 2025" subtitle="Finals, debates, holidays, home." />,
  },
  {
    key: 'dec-2',
    gradientClass: 'winter-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Stranger Things debates & finals survival'} fontSize="lg" />,
  },
  {
    key: 'dec-2b',
    gradientClass: 'winter-gradient',
    images: ['photo34.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo34.jpeg"
        caption="Stranger things and sushi"
        layout="landscape"
      />
    ),
  },
  {
    key: 'dec-3',
    gradientClass: 'winter-gradient',
    images: ['photo22.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo22.jpeg"
        caption="Finally home for the holidays"
        date="Back home together"
        layout="landscape"
      />
    ),
  },
  {
    key: 'dec-4',
    gradientClass: 'winter-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="December stats"
        stats={[
          { number: 2, label: 'Missed Hair Color Changes (somehow, i have missed both)', icon: '💇‍♀️' },
          { number: 3, label: 'Sushi Nights', icon: '🍣' },
          { number: 1, label: 'Mid season of television watch (Stranger Things 5)', icon: '📺' },
        ]}
      />
    ),
  },
  {
    key: 'dec-5',
    gradientClass: 'winter-gradient',
    images: ['photo23.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo23.jpeg"
        caption="Korean BBQ round 2, youre so good at cooking!"
        date="Christmas NYC"
        layout="portrait"
      />
    ),
  },
]
