import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const MotionDiv = motion.div

export default function PasswordGate({
  expectedPassword,
  onUnlock,
  title = 'One more thing…',
  subtitle = 'Enter the password to unlock your gift.',
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const ok = useMemo(() => value.trim() === expectedPassword, [expectedPassword, value])

  const submit = () => {
    if (ok) {
      setError('')
      onUnlock?.()
      return
    }
    setError('Wrong password. Try again.')
  }

  return (
    <div className="mx-auto w-full max-w-[860px]">
      <MotionDiv
        className="relative overflow-hidden rounded-3xl border-2 border-valentine-pink/60 bg-white/45 px-6 py-10 shadow-glow md:px-10 md:py-14"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-valentine-pink/35 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent-pink/25 blur-2xl" />
        <div className="pointer-events-none absolute left-6 top-6 select-none text-deep-pink/25" aria-hidden="true">
          ❤
        </div>
        <div className="pointer-events-none absolute bottom-6 right-6 select-none text-deep-pink/25" aria-hidden="true">
          ❤
        </div>

        <h2 className="text-center font-script text-5xl leading-[1.05] tracking-wide text-deep-pink md:text-6xl">
          {title}
        </h2>
        <p className="mt-4 text-center font-body text-sm font-semibold text-[color:var(--oyw-muted)] md:text-base">
          {subtitle}
        </p>

        <div className="mx-auto mt-8 max-w-[520px]">
          <label className="block text-sm font-bold tracking-wide text-[#2a0e1c]/70">
            Password
          </label>
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError('')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit()
            }}
            className="mt-2 w-full rounded-2xl border border-valentine-pink/55 bg-[#fff0f5] px-4 py-3 font-body text-base font-semibold text-[#2a0e1c] shadow-glow outline-none placeholder:text-[#2a0e1c]/45 focus:ring-2 focus:ring-deep-pink/35"
            placeholder="••••••••••"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            inputMode="text"
          />

          {error ? (
            <div className="mt-3 rounded-2xl bg-white/55 px-4 py-3 font-body text-sm font-bold text-dark-pink">
              {error}
            </div>
          ) : null}

          <button
            type="button"
            onClick={submit}
            className="mt-5 w-full rounded-2xl bg-deep-pink px-5 py-3 font-body text-base font-extrabold text-white shadow-glow hover:bg-dark-pink focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Unlock Our Year Wrapped
          </button>

          <div className="mt-4 text-center font-body text-xs font-semibold text-[#2a0e1c]/60">
            Tip: use the exact capitalization.
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
