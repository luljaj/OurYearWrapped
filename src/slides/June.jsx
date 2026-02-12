import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import PhotoGrid from '../components/PhotoGrid.jsx'
import MultiStat from '../components/MultiStat.jsx'

export const juneSlides = [
  {
    key: 'jun-1',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <MonthIntro month="June 2025" subtitle="The biggest month. The brightest memories." />,
  },
  {
    key: 'jun-2',
    gradientClass: 'summer-gradient',
    images: ['photo6.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo6.jpg"
        caption="You looked absolutely stunning"
        date="Component Beach"
        layout="landscape"
      />
    ),
  },
  {
    key: 'jun-3',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Meanwhile, I was planning something special…'} />,
  },
  {
    key: 'jun-4',
    gradientClass: 'summer-gradient',
    images: ['photo7.jpg', 'photo8.jpg', 'photo9.jpg'],
    Component: () => (
      <PhotoGrid
        title="Promposal prep"
        subtitle="A little chaotic. A lot of love."
        photos={[
          { src: 'photo7.jpg', left: '6%', top: '14%', rotation: -10, caption: 'idea' },
          { src: 'photo8.jpg', left: '34%', top: '6%', rotation: 8, caption: 'crafting' },
          { src: 'photo9.jpg', left: '56%', top: '22%', rotation: -4, caption: 'final touches' },
        ]}
      />
    ),
  },
  {
    key: 'jun-5',
    gradientClass: 'summer-gradient',
    images: ['photo10.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo10.jpg"
        caption="She said yes 💕"
        date="Senior Sunset + Promposal"
        layout="landscape"
      />
    ),
  },
  {
    key: 'jun-6',
    gradientClass: 'summer-gradient',
    images: ['photo11.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo11.jpg"
        caption="The most beautiful night"
        date="Prom night"
        layout="portrait"
      />
    ),
  },
  {
    key: 'jun-7',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="June stats"
        stats={[
          { number: 2, label: 'Sleepovers (so far)', icon: '🌙' },
          { number: 45, label: 'Fried Oreos', icon: '🍪' },
          { number: 5, label: 'Tanning sessions together', icon: '☀️' },
        ]}
      />
    ),
  },
  {
    key: 'jun-8',
    gradientClass: 'summer-gradient',
    images: ['photo12.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo12.jpg"
        caption="We did it together 🎓"
        date="Graduation"
        layout="landscape"
      />
    ),
  },
]
