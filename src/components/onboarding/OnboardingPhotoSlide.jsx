import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { publicImage } from '../../utils/assets.js'

const MotionDiv = motion.div

function photoLabelFromSrc(src) {
  const m = String(src || '').match(/photo(\d+)\.jpg/i)
  if (!m) return null
  return `Photo ${m[1]}`
}

export default function OnboardingPhotoSlide({
  src,
  caption,
}) {
  const [failed, setFailed] = useState(false)
  const [isTiny, setIsTiny] = useState(false)

  const url = useMemo(() => publicImage(src), [src])
  const label = useMemo(() => photoLabelFromSrc(src), [src])
  const showPlaceholder = failed || isTiny

  return (
    <div className="mx-auto w-full max-w-[760px] text-center">
      <MotionDiv
        className="relative mx-auto overflow-hidden rounded-[32px] border-2 border-valentine-pink/60 bg-white/35 p-4 shadow-glow"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/30">
          {!failed ? (
            <img
              src={url}
              alt={caption || label || 'Photo'}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              onLoad={(e) => {
                const el = e.currentTarget
                setIsTiny(el.naturalWidth <= 2 && el.naturalHeight <= 2)
              }}
            />
          ) : null}

          {showPlaceholder ? (
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-3xl bg-white/65 px-6 py-4 text-center">
                <div className="font-display text-3xl font-extrabold text-dark-pink">
                  {label || 'Photo'}
                </div>
                <div className="mt-2 font-body text-sm font-semibold text-[#2a0e1c]/65">
                  Replace in <span className="font-mono">public/images/</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {caption ? (
          <div className="mt-5 font-script text-5xl leading-[1.05] tracking-wide text-dark-pink">
            {caption}
          </div>
        ) : null}
      </MotionDiv>
    </div>
  )
}
