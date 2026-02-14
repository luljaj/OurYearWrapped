import { motion } from 'framer-motion'
import { publicImage } from '../utils/assets.js'
import { useMemo, useRef, useState } from 'react'
import { useDebug } from '../context/DebugContext.jsx'

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

function Polaroid({ src, alt, caption }) {
  const debug = useDebug()
  const [failed, setFailed] = useState(false)
  const [isTiny, setIsTiny] = useState(false)
  const [resolvedSrc, setResolvedSrc] = useState(src)
  const triedAltRef = useRef(false)
  const label = useMemo(() => photoLabelFromSrc(src), [src])
  const showPlaceholder = failed || isTiny
  const url = useMemo(() => publicImage(resolvedSrc), [resolvedSrc])

  return (
    <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/35 bg-transparent flex items-center justify-center">
      {!failed ? (
        <img
          src={url}
          alt={alt || label || 'Grid photo'}
          loading="lazy"
          decoding="async"
          className="block max-h-[70vh] h-auto w-auto max-w-full object-contain"
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
        <div className="absolute inset-0 grid place-items-center bg-white/10">
          <div className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold text-[#2a0e1c]">
            {caption || label || 'Photo'}
          </div>
        </div>
      ) : null}

      {debug ? (
        <div className="pointer-events-none absolute bottom-2 left-2 z-40 rounded-full bg-white/85 px-2 py-1 font-mono text-[10px] font-bold text-[#2a0e1c] shadow-glow">
          {resolvedSrc !== src ? `${src} -> ${resolvedSrc}` : src}
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

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {photos.map((p, idx) => (
          <MotionDiv
            key={idx}
            className="rounded-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative">
              <Polaroid src={p.src} alt={p.alt || `Grid photo ${idx + 1}`} caption={p.caption} />
            </div>
            <div className="mt-3 text-center font-body text-xs font-semibold text-[color:var(--oyw-muted)]">
              {p.caption || 'memory'}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
