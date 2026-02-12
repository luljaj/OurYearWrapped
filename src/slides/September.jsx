import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import StatReveal from '../components/StatReveal.jsx'

export const septemberSlides = [
  {
    key: 'sep-1',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => <MonthIntro month="September 2025" subtitle="Your birthday month." />,
  },
  {
    key: 'sep-2',
    gradientClass: 'struggle-gradient',
    images: [],
    Component: () => (
      <StatReveal number={'Too Many'} description="Times eaten at the marketplace" icon="🛍️" />
    ),
  },
  {
    key: 'sep-3',
    gradientClass: 'struggle-gradient',
    images: ['photo17.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo17.jpg"
        caption="You gave me the best birthday of my life"
        date="Birthday celebration"
        layout="landscape"
      />
    ),
  },
]
