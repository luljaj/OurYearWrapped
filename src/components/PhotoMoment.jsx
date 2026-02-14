import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations.js'
import { publicImage } from '../utils/assets.js'
import { useMemo, useRef, useState } from 'react'
import { useDebug } from '../context/DebugContext.jsx'

const MotionDiv = motion.div
const MotionP = motion.p

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

export default function PhotoMoment({
  photoSrc,
  caption,
  date,
  layout = 'portrait',
  alt,
  maxWClass,
}) {
  const debug = useDebug()
  const [failed, setFailed] = useState(false)
  const [isTiny, setIsTiny] = useState(false)
  const [resolvedSrc, setResolvedSrc] = useState(photoSrc)
  const triedAltRef = useRef(false)

  const url = useMemo(() => publicImage(resolvedSrc), [resolvedSrc])
  const label = useMemo(() => photoLabelFromSrc(photoSrc), [photoSrc])

  const maxW =
    layout === 'landscape'
      ? 'max-w-[740px] md:max-w-[780px]'
      : layout === 'square'
        ? 'max-w-[520px] md:max-w-[560px]'
        : 'max-w-[520px] md:max-w-[560px]'

  const showPlaceholder = failed || isTiny

  return (
    <div className="relative">
      <MotionDiv
        className={`oyw-glass mx-auto w-full ${maxWClass || maxW} overflow-hidden rounded-3xl p-4 shadow-glow md:p-5`}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {date ? (
          <div className="mb-3 text-center font-body text-xs font-semibold tracking-wide text-[color:var(--oyw-muted)] md:text-sm">
            {date}
          </div>
        ) : null}

        <div className="relative w-full min-h-[70vh] overflow-hidden rounded-2xl bg-white/35 flex items-center justify-center">
	          {!failed ? (
	            <img
	              src={url}
	              alt={alt || caption || label || 'Photo moment'}
	              loading="lazy"
	              decoding="async"
	              className="block max-h-[70vh] w-auto max-w-full object-contain"
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
	                // Our placeholder images are 1x1. If replaced with real photos, this becomes false.
	                setIsTiny(el.naturalWidth <= 2 && el.naturalHeight <= 2)
	              }}
	            />
	          ) : null}

          {showPlaceholder ? (
            <div className="absolute inset-0 grid place-items-center bg-white/25">
              <div className="text-center">
                <div className="font-display text-2xl font-extrabold text-[#2a0e1c] md:text-3xl">
                  {label || 'Photo'}
                </div>
                <div className="mt-2 font-body text-sm text-[color:var(--oyw-muted)]">
                  Replace in <span className="font-mono">public/images/</span>
                </div>
              </div>
            </div>
          ) : null}

          {debug ? (
            <div className="pointer-events-none absolute bottom-3 left-3 z-40 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] font-bold text-[#2a0e1c] shadow-glow">
              {resolvedSrc !== photoSrc ? `${photoSrc} -> ${resolvedSrc}` : photoSrc}
            </div>
          ) : null}

          {/* Decorative corners */}
          <div className="pointer-events-none absolute left-3 top-3 select-none text-xl opacity-30">
            ❤
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 select-none text-xl opacity-30">
            ❤
          </div>
        </div>

        {caption ? (
          <MotionP
            className="mt-4 text-center font-script text-2xl leading-[1.05] tracking-wide text-[#2a0e1c] md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {caption}
          </MotionP>
        ) : null}
      </MotionDiv>
    </div>
  )
}
