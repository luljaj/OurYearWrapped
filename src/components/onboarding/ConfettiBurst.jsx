import { motion } from 'framer-motion'
import { useMemo } from 'react'

const MotionSpan = motion.span

function mulberry32(seed) {
  let t = seed >>> 0
  return function () {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

export default function ConfettiBurst({ trigger = 0, count = 42 }) {
  const parts = useMemo(() => {
    const rnd = mulberry32(1337 + trigger * 97)
    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#fff']

    return Array.from({ length: count }).map((_, i) => {
      const angle = rnd() * Math.PI * 2
      const radius = 80 + rnd() * 220
      const dx = Math.cos(angle) * radius
      const dy = Math.sin(angle) * radius * 0.8 - (60 + rnd() * 60)
      const rot = (rnd() * 720 - 360) | 0
      const size = 6 + rnd() * 8
      const delay = rnd() * 0.08
      const color = colors[(i + Math.floor(rnd() * colors.length)) % colors.length]

      return { dx, dy, rot, size, delay, color }
    })
  }, [count, trigger])

  if (!trigger) return null

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {parts.map((p, idx) => (
        <MotionSpan
          key={`${trigger}-${idx}`}
          className="absolute left-1/2 top-1/2 block"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: 2,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.dx, y: p.dy, rotate: p.rot, opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: p.delay }}
        />
      ))}
    </div>
  )
}

