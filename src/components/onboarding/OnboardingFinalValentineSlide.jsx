import OnboardingChoiceSlide from './OnboardingChoiceSlide.jsx'

export default function OnboardingFinalValentineSlide({ onYes }) {
  return (
    <OnboardingChoiceSlide
      question={'Will you be my valentine, my beautiful girl?'}
      questionFadeDuration={3.2}
      questionSize="lg"
      buttonsDelayMs={4200}
      yesText="Yes"
      noText="No"
      noDisabled
      noCaption="No way out of this one!"
      onYes={onYes}
    />
  )
}
