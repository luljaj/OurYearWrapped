import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import MultiStat from '../components/MultiStat.jsx'

function FireworksSlide() {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <PhotoMoment
        photoSrc="photo13.jpg"
        caption="Jones Beach fireworks"
        date="July 2025"
        layout="landscape"
      />
      <p className="mt-3 text-center font-body text-sm font-semibold text-[color:var(--oyw-muted)]">
        (an aboslutely grueling parking lot experience)
      </p>
    </div>
  )
}

export const julySlides = [
  {
    key: 'jul-1',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => <MonthIntro month="July 2025" subtitle="Fireworks, city adventures, firsts." />,
  },
  {
    key: 'jul-2',
    gradientClass: 'summer-gradient',
    images: ['photo13.jpg'],
    Component: FireworksSlide,
  },
  {
    key: 'jul-3',
    gradientClass: 'summer-gradient',
    images: ['photo14.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo14.jpg"
        caption="Fulton St Subway Station was the backrooms."
        date="NYC adventure"
        layout="portrait"
      />
    ),
  },
  {
    key: 'jul-4',
    gradientClass: 'summer-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="July highlights"
        stats={[
          { number: '🇲🇪', label: 'Montenegro trip (missed you instantly)', icon: '🇲🇪' },
          { number: 1, label: 'First Korean BBQ together', icon: '🍖' },
          { number: 1, label: 'Times you fell asleep on the train', icon: '😴' },
          { number: '3', label: 'Chao Down: quite the night', icon: '🌃' },
        ]}
      />
    ),
  },
]
