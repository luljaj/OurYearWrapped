import MonthIntro from '../components/MonthIntro.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import StatReveal from '../components/StatReveal.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import MultiStat from '../components/MultiStat.jsx'

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
    Component: () => <QuoteSlide text={'College began… and it was really hard at first'} fontSize="lg" />,
  },
  {
    key: 'aug-1c',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => <QuoteSlide text={'The sushi burrito scam'} fontSize="lg" />,
  },
  {
    key: 'aug-1d',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Being able to eat outside the marketplace.. miss it.'} fontSize="lg" />,
  },
  {
    key: 'aug-2',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Distance… and I missed you the whole time'} fontSize="lg" />,
  },
  {
    key: 'aug-3',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => (
      <StatReveal
        number={'Came home early because missing you was too hard'}
        description="True story."
        icon="💗"
      />
    ),
  },
  {
    key: 'aug-4',
    gradientClass: 'summer-gradient',
    images: ['photo15.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo15.jpg"
        caption="Came home to your beautiful new look"
        date="New hair color reveal"
        layout="portrait"
      />
    ),
  },
  {
    key: 'aug-5',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="August moments"
        stats={[
          { number: 'Depop', label: 'Selling era', icon: '📦' },
          { number: 1, label: "Jones Beach in mom's car", icon: '🚗' },
          { number: 1, label: 'Edamame tricks you fell for 😂', icon: '🫘' },
        ]}
      />
    ),
  },
]
