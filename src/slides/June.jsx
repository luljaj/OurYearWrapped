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
    images: ['photo6.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo6.jpeg"
        caption="You looked absolutely stunning"
        date="Compo Beach"
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
	    images: ['photo7.jpeg', 'photo8.jpeg', 'photo9.jpeg'],
	    Component: () => (
	      <PhotoGrid
	        title="Promposal prep"
	        subtitle="A little chaotic. A lot of love."
	        photos={[
	          { src: 'photo7.jpeg', caption: 'idea' },
	          { src: 'photo8.jpeg', caption: 'crafting' },
	          { src: 'photo9.jpeg', caption: 'final touches' },
	        ]}
	      />
	    ),
	  },
  {
    key: 'jun-5',
    gradientClass: 'summer-gradient',
    images: ['photo10.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo10.jpeg"
        caption="Beautiful bouquet, huh"
        date="Senior Sunset + Promposal"
        layout="landscape"
      />
    ),
  },
  {
    key: 'jun-6',
    gradientClass: 'summer-gradient',
    images: ['photo11.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo11.jpeg"
        caption="The most beautiful night"
        date="Prom night"
        layout="portrait"
      />
    ),
  },
  {
    key: 'jun-7b',
    gradientClass: 'summer-gradient',
    images: ['photo16.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo16.jpg"
        caption="Too many fried oreos"
        date="Seaside"
        layout="landscape"
      />
    ),
  },
  {
    key: 'jun-8',
    gradientClass: 'summer-gradient',
    images: ['photo12.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo12.jpeg"
        caption="We did it together 🎓"
        date="Graduation"
        layout="landscape"
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
]
