import OnboardingChoiceSlide from '../components/onboarding/OnboardingChoiceSlide.jsx'
import OnboardingCountdownSlide from '../components/onboarding/OnboardingCountdownSlide.jsx'
import OnboardingFinalValentineSlide from '../components/onboarding/OnboardingFinalValentineSlide.jsx'
import OnboardingPhotoSlide from '../components/onboarding/OnboardingPhotoSlide.jsx'
import OnboardingTextSlide from '../components/onboarding/OnboardingTextSlide.jsx'

export const ONBOARDING_PASSWORD = 'TeaganMyHeart'

const PINK = 'bg-[#FFF0F5]'

export const onboardingSlides = [
  {
    key: 'onboard-01',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={'Hello, my beautiful girl.'}
      />
    ),
  },
  {
    key: 'onboard-02',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={`I'm sorry I'm so late to the party, I'm looking up at my whiteboard and your wrote "clocks ticking"`}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-03',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={'I just wanted to give you a magical birthday, so I took extra time to prepare this for you.'}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-04',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={'I had to prepare this for you, because, honestly, I have something to tell you'}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-05',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={"What is it? You're probably thinking?"}
      />
    ),
  },
  {
    key: 'onboard-06',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'It has to be obvious right?'} />,
  },
  {
    key: 'onboard-07',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Well.'} />,
  },
  {
    key: 'onboard-08',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Here it is.'} />,
  },
  {
    key: 'onboard-09',
    gradientClass: PINK,
    images: [],
    Component: () => (
      <OnboardingTextSlide
        text={"I've been meaning to tell you this for a long time."}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-10',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Wow. This is nerve racking..'} />,
  },
  {
    key: 'onboard-11',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Uh.'} />,
  },
  {
    key: 'onboard-12',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Baby, I...'} />,
  },
  {
    key: 'onboard-13',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'I have a huge crush on you.'} />,
  },
  {
    key: 'onboard-14',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'I have a big crush on you.'} />,
  },
  {
    key: 'onboard-15',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Like, look at you baby'} />,
  },
  {
    key: 'onboard-16',
    gradientClass: PINK,
    images: ['photo31.jpg'],
    Component: () => <OnboardingPhotoSlide src="photo31.jpg" caption="wow!!" />,
  },
  {
    key: 'onboard-17',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={"You're so pretty."} />,
  },
  {
    key: 'onboard-18',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingChoiceSlide
        question={'Do you have a crush on me too?'}
        yesText="Yes"
        noText="No"
        onYes={onNext}
      />
    ),
  },
  {
    key: 'onboard-19',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Yaaaay!'} />,
  },
  {
    key: 'onboard-20',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Thank you beautiful!'} />,
  },
  {
    key: 'onboard-21',
    gradientClass: PINK,
    images: [],
    Component: () => <OnboardingTextSlide text={'Now, I have a big question for you.'} size="md" />,
  },
  {
    key: 'onboard-22',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingChoiceSlide
        question={'Do you wanna hear it?'}
        yesText="Yes"
        noText="No"
        transitionToWhiteOnYes
        yesDelayMs={2400}
        onYes={onNext}
      />
    ),
  },
  {
    key: 'onboard-23',
    gradientClass: 'bg-white',
    heartsMode: 'love',
    images: [],
    Component: ({ onNext }) => <OnboardingFinalValentineSlide onYes={onNext} />,
  },
  {
    key: 'onboard-24',
    gradientClass: PINK,
    images: [],
    Component: ({ onUnlock }) => (
      <OnboardingCountdownSlide
        expectedPassword={ONBOARDING_PASSWORD}
        onUnlock={onUnlock}
        message="I love you baby, I have something ready for you soon"
      />
    ),
  },
]
