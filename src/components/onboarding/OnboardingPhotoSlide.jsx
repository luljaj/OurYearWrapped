import { motion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { publicImage } from '../../utils/assets.js'
import { useDebug } from '../../context/DebugContext.jsx'

const MotionDiv = motion.div

function photoLabelFromSrc(src) {
  const m = String(src || '').match(/photo(\d+)\.(?:jpe?g)/i)
  if (!m) return null
  return `Photo ${m[1]}`
}

function swapJpegExt(filename) {
  const s = String(filename || '')
  if (s.toLowerCase().endsWith('.jpeg')) return s.slice(0, -5) + '.jpg'
  if (s.toLowerCase().endsWith('.jpg')) return s.slice(0, -4) + '.jpeg'
  return null
}

export default function OnboardingPhotoSlide({
  src,
  caption,
}) {
  const debug = useDebug()
  const [failed, setFailed] = useState(false)
  const [isTiny, setIsTiny] = useState(false)
  const triedAltRef = useRef(false)
  const [resolvedSrc, setResolvedSrc] = useState(src)

  const url = useMemo(() => publicImage(resolvedSrc), [resolvedSrc])
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
        <div className="relative w-full min-h-[70vh] overflow-hidden rounded-3xl bg-white/30 flex items-center justify-center">
          {!failed ? (
            <img
              src={url}
              alt={caption || label || 'Photo'}
              className="block max-h-[70vh] w-auto max-w-full object-contain"
              loading="lazy"
              decoding="async"
              onError={() => {
                if (triedAltRef.current) {
                  setFailed(true)
                  return
                }
                const altSrc = swapJpegExt(resolvedSrc)
                if (!altSrc || altSrc === resolvedSrc) {
                  setFailed(true)
                  return
                }
                triedAltRef.current = true
                setFailed(false)
                setIsTiny(false)
                setResolvedSrc(altSrc)
              }}
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

          {debug ? (
            <div className="pointer-events-none absolute bottom-3 left-3 z-40 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] font-bold text-[#2a0e1c] shadow-glow">
              {resolvedSrc !== src ? `${src} -> ${resolvedSrc}` : src}
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
