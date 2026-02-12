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
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={'Hello, my beautiful girl.'}
        onNext={onNext}
        autoAdvanceMs={2800}
      />
    ),
  },
  {
    key: 'onboard-02',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={`I'm sorry I'm so late to the party, I'm looking up at my whiteboard and your wrote "clocks ticking"`}
        onNext={onNext}
        autoAdvanceMs={5200}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-03',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={'I just wanted to give you a magical birthday, so I took extra time to prepare this for you.'}
        onNext={onNext}
        autoAdvanceMs={5200}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-04',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={'I had to prepare this for you, because, honestly, I have something to tell you'}
        onNext={onNext}
        autoAdvanceMs={4800}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-05',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={"What is it? You're probably thinking?"}
        onNext={onNext}
        autoAdvanceMs={3200}
      />
    ),
  },
  {
    key: 'onboard-06',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'It has to be obvious right?'} onNext={onNext} autoAdvanceMs={2800} />
    ),
  },
  {
    key: 'onboard-07',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Well.'} onNext={onNext} autoAdvanceMs={1800} />,
  },
  {
    key: 'onboard-08',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Here it is.'} onNext={onNext} autoAdvanceMs={1800} />,
  },
  {
    key: 'onboard-09',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={"I've been meaning to tell you this for a long time."}
        onNext={onNext}
        autoAdvanceMs={4200}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-10',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Wow. This is nerve racking..'} onNext={onNext} autoAdvanceMs={3200} />
    ),
  },
  {
    key: 'onboard-11',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Uh.'} onNext={onNext} autoAdvanceMs={1500} />,
  },
  {
    key: 'onboard-12',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Baby, I...'} onNext={onNext} autoAdvanceMs={2400} />,
  },
  {
    key: 'onboard-13',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'I have a huge crush on you.'} onNext={onNext} autoAdvanceMs={3200} />
    ),
  },
  {
    key: 'onboard-14',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'I have a big crush on you.'} onNext={onNext} autoAdvanceMs={3200} />
    ),
  },
  {
    key: 'onboard-15',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Like, look at you baby'} onNext={onNext} autoAdvanceMs={2800} />,
  },
  {
    key: 'onboard-16',
    gradientClass: PINK,
    images: ['photo31.jpg'],
    Component: ({ onNext }) => (
      <OnboardingPhotoSlide src="photo31.jpg" caption="wow!!" onNext={onNext} autoAdvanceMs={5200} />
    ),
  },
  {
    key: 'onboard-17',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={"You're so pretty."} onNext={onNext} autoAdvanceMs={2600} />,
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
    Component: ({ onNext }) => <OnboardingTextSlide text={'Yaaaay!'} onNext={onNext} autoAdvanceMs={2200} />,
  },
  {
    key: 'onboard-20',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Thank you beautiful!'} onNext={onNext} autoAdvanceMs={2600} />
    ),
  },
  {
    key: 'onboard-21',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Now, I have a big question for you.'} onNext={onNext} autoAdvanceMs={3200} size="md" />
    ),
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
