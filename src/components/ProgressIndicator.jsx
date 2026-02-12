function range(a, b) {
  const out = []
  for (let i = a; i <= b; i++) out.push(i)
  return out
}

export default function ProgressIndicator({ total, current, onJump }) {
  const MAX_DOTS = 21

  let indices = []
  if (total <= MAX_DOTS) {
    indices = range(0, total - 1)
  } else {
    const windowSize = 11
    const half = Math.floor(windowSize / 2)
    let start = Math.max(1, current - half)
    let end = Math.min(total - 2, start + windowSize - 1)
    start = Math.max(1, end - windowSize + 1)

    indices = [0, ...range(start, end), total - 1]
    indices = [...new Set(indices)].sort((a, b) => a - b)
  }

  return (
    <div className="pointer-events-auto absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center px-6">
      <div className="oyw-glass flex max-w-[92vw] flex-wrap justify-center gap-2 rounded-full px-4 py-2 shadow-glow">
        {indices.map((idx, i) => {
          const prev = indices[i - 1]
          const gap = typeof prev === 'number' ? idx - prev : 0
          const active = idx === current
          return (
            <span key={idx} className="flex items-center gap-2">
              {gap > 1 ? (
                <span className="h-1 w-4 rounded-full bg-white/40" aria-hidden="true" />
              ) : null}
              <button
                type="button"
                onClick={() => onJump(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active ? 'bg-deep-pink w-5' : 'bg-white/60 hover:bg-white/85'
                }`}
                aria-label={`Go to slide ${idx + 1} of ${total}`}
              />
            </span>
          )
        })}
      </div>
    </div>
  )
}
