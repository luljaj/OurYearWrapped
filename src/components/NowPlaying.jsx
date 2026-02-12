import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function NowPlaying({
  enabled,
  error,
  hasTrack,
  trackTitle,
  onToggleEnabled,
  onTogglePause,
  paused,
  needsUnmute,
  onUnmute,
}) {
  const label = trackTitle || 'No track'
  const sub =
    !enabled
      ? 'Audio off (tap to enable)'
      : !hasTrack
        ? 'No song for this slide'
        : error
          ? 'Audio file missing/invalid'
          : needsUnmute
            ? 'Tap to unmute'
          : paused
            ? 'Paused'
            : 'Playing'

  return (
    <div className="pointer-events-auto absolute right-4 top-4 z-40">
      <MotionDiv
        className="oyw-glass flex items-center gap-3 rounded-full px-4 py-2 shadow-glow"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <button
          type="button"
          onClick={onToggleEnabled}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/55 text-[#2a0e1c] hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
          aria-label={enabled ? 'Disable audio' : 'Enable audio'}
          title={enabled ? 'Disable audio' : 'Enable audio'}
        >
          ♫
        </button>

        <div className="min-w-0">
          <div className="text-[11px] font-bold tracking-wide text-[#2a0e1c]/70">NOW PLAYING</div>
          <div className="truncate font-body text-sm font-semibold text-[#2a0e1c]">{label}</div>
          <div className="text-[11px] font-semibold text-[#2a0e1c]/60">{sub}</div>
        </div>

        {enabled ? (
          needsUnmute ? (
            <button
              type="button"
              onClick={onUnmute}
              className="rounded-full bg-deep-pink px-3 py-2 text-xs font-bold text-white shadow-glow hover:bg-dark-pink focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
              aria-label="Unmute"
              title="Unmute"
            >
              Unmute
            </button>
          ) : (
            <button
              type="button"
              onClick={onTogglePause}
              className="rounded-full bg-white/45 px-3 py-2 text-xs font-bold text-[#2a0e1c] hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-deep-pink/40"
              aria-label={paused ? 'Play' : 'Pause'}
              title={paused ? 'Play' : 'Pause'}
            >
              {paused ? 'Play' : 'Pause'}
            </button>
          )
        ) : null}
      </MotionDiv>
    </div>
  )
}
