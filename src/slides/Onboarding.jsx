import OnboardingChoiceSlide from '../components/onboarding/OnboardingChoiceSlide.jsx'
import OnboardingCountdownSlide from '../components/onboarding/OnboardingCountdownSlide.jsx'
import OnboardingFinalValentineSlide from '../components/onboarding/OnboardingFinalValentineSlide.jsx'
import OnboardingPhotoSlide from '../components/onboarding/OnboardingPhotoSlide.jsx'
import OnboardingTextSlide from '../components/onboarding/OnboardingTextSlide.jsx'
import { useEffect, useRef } from 'react'
import { motion, usePresence } from 'framer-motion'

export const ONBOARDING_PASSWORD = 'TeaganMyHeart'

const PINK = 'bg-[#FFF0F5]'
const MotionDiv = motion.div
const MotionSpan = motion.span

function OnboardingNerveRackingSlide({ onNext }) {
  // No auto-advance.

  const dot = (delay) => (
    <MotionSpan
      aria-hidden="true"
      className="inline-block"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      .
    </MotionSpan>
  )

  return (
    <div className="mx-auto w-full max-w-[920px] text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="font-script text-5xl leading-[1.12] tracking-wide text-dark-pink md:text-6xl whitespace-pre-line">
          Wow. This is nerve racking
          {dot(0)}
          {dot(0.12)}
          {dot(0.24)}
        </div>
      </MotionDiv>
    </div>
  )
}

export const onboardingSlides = [
  {
    key: 'onboard-01',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={'Hello, my beautiful girl.'}
        onNext={onNext}
        autoAdvanceMs={0}
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
        autoAdvanceMs={0}
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
        autoAdvanceMs={0}
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
        autoAdvanceMs={0}
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
        autoAdvanceMs={0}
      />
    ),
  },
  {
    key: 'onboard-06',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'It has to be obvious right?'} onNext={onNext} autoAdvanceMs={0} />
    ),
  },
  {
    key: 'onboard-07',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Well.'} onNext={onNext} autoAdvanceMs={0} effect="shrinkShake" />
    ),
  },
  {
    key: 'onboard-08',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Here it is.'} onNext={onNext} autoAdvanceMs={0} size="xl" />
    ),
  },
  {
    key: 'onboard-09',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={"I've been meaning to tell you this for a long time."}
        onNext={onNext}
        autoAdvanceMs={0}
        size="md"
      />
    ),
  },
  {
    key: 'onboard-10',
    gradientClass: PINK,
    images: [],
    Component: OnboardingNerveRackingSlide,
  },
  {
    key: 'onboard-11',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Uh.'} onNext={onNext} autoAdvanceMs={0} size="xxs" />
    ),
  },
  {
    key: 'onboard-12',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Baby, I...'} onNext={onNext} autoAdvanceMs={0} />,
  },
  {
    key: 'onboard-13',
    gradientClass: PINK,
    heartsMode: 'big',
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'I have a huge crush on you.'} onNext={onNext} autoAdvanceMs={0} />
    ),
  },
  {
    key: 'onboard-15',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={'Like, look at you baby'} onNext={onNext} autoAdvanceMs={0} />,
  },
  {
    key: 'onboard-16',
    gradientClass: PINK,
    images: ['photo31.jpg'],
    Component: ({ onNext }) => (
      <OnboardingPhotoSlide src="photo31.jpg" caption="wow!!" onNext={onNext} autoAdvanceMs={0} />
    ),
  },
  {
    key: 'onboard-17',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => <OnboardingTextSlide text={"You're so pretty."} onNext={onNext} autoAdvanceMs={0} />,
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
    Component: ({ onNext }) => <OnboardingTextSlide text={'Yaaaay!'} onNext={onNext} autoAdvanceMs={0} />,
  },
  {
    key: 'onboard-20',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Thank you beautiful!'} onNext={onNext} autoAdvanceMs={0} />
    ),
  },
  {
    key: 'onboard-21',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide text={'Now, I have a big question for you.'} onNext={onNext} autoAdvanceMs={0} size="md" />
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
    heartsMode: 'love',
    images: [],
    Component: ({ onNext }) => <OnboardingFinalValentineSlide onYes={onNext} />,
  },
  {
    key: 'onboard-23a',
    gradientClass: PINK,
    images: [],
    Component: ({ onNext }) => (
      <OnboardingTextSlide
        text={
          'My beautiful girl, I am so glad to have you as my valentine.\nI love you forever and always and I will always cherish your heart.\nI hope you have an amazing birthday.'
        }
        onNext={onNext}
        autoAdvanceMs={0}
        size="xs"
      />
    ),
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
