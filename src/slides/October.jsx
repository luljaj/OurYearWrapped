import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import QuoteSlide from '../components/QuoteSlide.jsx'
import StatReveal from '../components/StatReveal.jsx'

function OctoberMoviesAndSleepovers() {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <QuoteSlide
        text={'4 movies watched:\nNightmare Before Christmas\nCoraline\nCorpse Bride\nThe Notebook'}
        fontSize="lg"
      />
      <div className="mt-6">
        <StatReveal number={19} description="Sleepovers in college so far" icon="🌙" />
      </div>
    </div>
  )
}

export const octoberSlides = [
  {
    key: 'oct-1',
    gradientClass: 'fall-gradient',
    images: [],
    Component: () => <MonthIntro month="October 2025" subtitle="Movies, drives, Halloween, and learning." />,
  },
  {
    key: 'oct-3',
    gradientClass: 'fall-gradient',
    images: ['photo28.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo28.jpeg"
        caption="Case comp (we deserved better 😤)"
        date="October 2025"
        layout="landscape"
      />
    ),
  },
  {
    key: 'oct-4',
    gradientClass: 'fall-gradient',
    images: [],
    Component: () => <QuoteSlide text={'Movie marathon month 🎬'} fontSize="lg" />,
  },
  {
    key: 'oct-5',
    gradientClass: 'fall-gradient',
    images: [],
    Component: OctoberMoviesAndSleepovers,
  },
  {
    key: 'oct-6',
    gradientClass: 'fall-gradient',
    images: ['photo19.jpeg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo19.jpeg"
        caption="Gorgeous all weekend long 🎃"
        date="Halloween"
        layout="portrait"
      />
    ),
  },
]
