export default function Navigation({
  current,
  total,
  onStart,
  onEnd,
  debug,
  onJump,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      {/* Clickable controls */}
      {debug ? (
        <div className="pointer-events-auto absolute bottom-24 left-4 flex items-center gap-2">
          <button
            type="button"
            onClick={onStart}
            className="oyw-glass rounded-full px-3 py-2 text-xs font-semibold text-[#2a0e1c] shadow-glow hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
            aria-label="Go to start"
          >
            Start
          </button>
          <button
            type="button"
            onClick={onEnd}
            className="oyw-glass rounded-full px-3 py-2 text-xs font-semibold text-[#2a0e1c] shadow-glow hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
            aria-label="Skip to end"
          >
            End
          </button>
        </div>
      ) : null}

      <div className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {debug ? (
          <div className="oyw-glass flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-[#2a0e1c] shadow-glow">
            <span className="font-mono">
              {current + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => {
                const raw = window.prompt(`Jump to slide (1-${total})`, String(current + 1))
                const n = Number(raw)
                if (!Number.isFinite(n)) return
                onJump(Math.round(n) - 1)
              }}
              className="rounded-full bg-white/50 px-2 py-1 hover:bg-white/70"
            >
              Jump
            </button>
          </div>
        ) : null}
      </div>

      <div className="pointer-events-none absolute bottom-8 left-0 right-0 text-center font-body text-[11px] font-semibold text-[color:var(--oyw-muted)]">
        Swipe, use arrow keys, or tap space
      </div>
    </div>
  )
}
