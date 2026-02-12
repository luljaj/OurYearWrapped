import { motion } from 'framer-motion'
import { publicImage } from '../utils/assets.js'
import { useMemo, useState } from 'react'

const MotionDiv = motion.div

function photoLabelFromSrc(src) {
  const m = String(src || '').match(/photo(\d+)\.jpg/i)
  if (!m) return null
  return `Photo ${m[1]}`
}

function Polaroid({ src, alt, caption }) {
  const [failed, setFailed] = useState(false)
  const [isTiny, setIsTiny] = useState(false)
  const label = useMemo(() => photoLabelFromSrc(src), [src])
  const showPlaceholder = failed || isTiny

  return (
    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/30">
      {!failed ? (
        <img
          src={publicImage(src)}
          alt={alt || label || 'Grid photo'}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
          onLoad={(e) => {
            const el = e.currentTarget
            setIsTiny(el.naturalWidth <= 2 && el.naturalHeight <= 2)
          }}
        />
      ) : null}

      {showPlaceholder ? (
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-full bg-white/60 px-3 py-1 text-[11px] font-bold text-[#2a0e1c]">
            {caption || label || 'Photo'}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default function PhotoGrid({ photos = [], title, subtitle }) {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      {title ? (
        <h2 className="text-center font-script text-4xl text-[#2a0e1c] md:text-5xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mt-2 text-center font-body text-sm font-semibold text-[color:var(--oyw-muted)] md:text-base">
          {subtitle}
        </p>
      ) : null}

      <div className="relative mt-8 h-[420px] w-full md:h-[520px]">
        {photos.map((p, idx) => (
          <MotionDiv
            key={idx}
            className="oyw-glass absolute w-[46%] rounded-2xl p-3 shadow-glow md:w-[40%]"
            style={{
              left: p.left,
              top: p.top,
              transform: `rotate(${p.rotation || 0}deg)`,
            }}
            initial={{ opacity: 0, y: -40, rotate: (p.rotation || 0) - 6 }}
            animate={{ opacity: 1, y: 0, rotate: p.rotation || 0 }}
            transition={{ delay: idx * 0.12, duration: 0.8, type: 'spring' }}
          >
            <div className="relative">
              <Polaroid src={p.src} alt={p.alt || `Grid photo ${idx + 1}`} caption={p.caption} />
            </div>
            <div className="mt-2 text-center font-body text-[11px] font-semibold text-[color:var(--oyw-muted)]">
              {p.caption || 'memory'}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
