import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import StatReveal from '../components/StatReveal.jsx'
import MultiStat from '../components/MultiStat.jsx'

function GreenwichWithPhoto() {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="grid items-center gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <StatReveal compact number={2} description="Greenwich adventures" icon="🗺️" />
        </div>
        <div>
          <PhotoMoment
            photoSrc="photo27.jpeg"
            caption="Greenwich trip"
            date="April 2025"
            layout="landscape"
            maxWClass="max-w-none"
          />
        </div>
      </div>
    </div>
  )
}

export const aprilSlides = [
  {
    key: 'apr-1',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => <MonthIntro month="April 2025" subtitle="Our first tour of Binghamton, and more." />,
  },
  {
    key: 'apr-2',
    gradientClass: 'spring-gradient',
    images: ['photo3.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo3.jpeg"
        caption="Our future home 💚"
        date="Binghamton tour"
        layout="landscape"
      />
    ),
  },
  {
    key: 'apr-3',
    gradientClass: 'spring-gradient',
    images: ['photo27.jpeg'],
    Component: GreenwichWithPhoto,
  },
  {
    key: 'apr-4',
    gradientClass: 'spring-gradient',
    images: [],
    Component: () => (
      <MultiStat
        title="Restaurant tour"
        stats={[
          { number: 7, label: 'Different restaurants eaten at', icon: '🍴' },
        ]}
        note="McDonald's, Okinawa, Bagel and the Bean, Sea and Stone, Chili's, Prime Pub, J Bagels"
      />
    ),
  },
]
