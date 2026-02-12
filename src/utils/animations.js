import { animate, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export const scaleIn = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const heartFloat = {
  animate: {
    y: [-12, -26],
    opacity: [0.8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
}

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(255, 105, 180, 0.35)',
      '0 0 44px rgba(255, 105, 180, 0.6)',
      '0 0 20px rgba(255, 105, 180, 0.35)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export function useCountUp(targetNumber, duration = 1.5) {
  const reducedMotion = useReducedMotion()
  const target = useMemo(() => {
    if (typeof targetNumber !== 'number' || !Number.isFinite(targetNumber)) return 0
    return targetNumber
  }, [targetNumber])

  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reducedMotion) return

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(latest),
    })

    return () => controls.stop()
  }, [duration, reducedMotion, target])

  return reducedMotion ? target : value
}
