import MonthIntro from '../components/MonthIntro.jsx'
import PhotoMoment from '../components/PhotoMoment.jsx'
import BodyTextSlide from '../components/BodyTextSlide.jsx'

export const januarySlides = [
  {
    key: 'jan-1',
    gradientClass: 'winter-gradient',
    images: [],
    Component: () => <MonthIntro month="January 2025" subtitle="A fresh start. Stronger together." />,
  },
  {
    key: 'jan-2',
    gradientClass: 'winter-gradient',
    images: ['photo24.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo24.jpg"
        caption="Back to our roots at Royal indian"
        date="Back to school"
        layout="landscape"
      />
    ),
  },
  {
    key: 'jan-3',
    gradientClass: 'winter-gradient',
    images: ['photo25.jpg'],
    Component: () => (
      <PhotoMoment
        photoSrc="photo25.jpg"
        caption="You carried my snowboard, (you're so cute)"
        date="January 2025"
        layout="portrait"
      />
    ),
  },
  {
    key: 'jan-4',
    gradientClass: 'winter-gradient',
    images: [],
    Component: () => (
      <BodyTextSlide
        text={
          "You started going to the gym, which I am so proud of you, and you are studying harder, and your hair looks gorgeous, you're staying out of drama, and all of it. You are everything amazing, and I am so proud of you."
        }
      />
    ),
  },
]
