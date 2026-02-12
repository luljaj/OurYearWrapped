import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import PasswordGate from '../PasswordGate.jsx'

const MotionDiv = motion.div

function pad2(n) {
  return String(n).padStart(2, '0')
}

function getNextValentine3pmEST() {
  const now = new Date()
  const year = now.getFullYear()
  const candidate = new Date(`${year}-02-14T15:00:00-05:00`)
  if (now.getTime() <= candidate.getTime()) return candidate
  return new Date(`${year + 1}-02-14T15:00:00-05:00`)
}

export default function OnboardingCountdownSlide({
  onUnlock,
  expectedPassword,
}) {
  const target = useMemo(() => getNextValentine3pmEST(), [])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diffMs = Math.max(0, target.getTime() - now)
  const done = diffMs <= 0

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)

  return (
    <div className="mx-auto w-full max-w-[980px] text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="font-script text-6xl leading-[1.02] tracking-wide text-dark-pink md:text-7xl">
          Our Year Wrapped
        </div>

        {!done ? (
          <>
            <div className="mt-10 font-display text-4xl font-extrabold tracking-tight text-deep-pink md:text-6xl">
              {days}:{pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
            </div>
          </>
        ) : (
          <div className="mt-10">
            <PasswordGate
              expectedPassword={expectedPassword}
              onUnlock={onUnlock}
              title="It's time."
              subtitle="Enter the password to open Our Year Wrapped."
            />
          </div>
        )}
      </MotionDiv>
    </div>
  )
}
