import { useMemo } from 'react'
import { publicImage } from '../utils/assets.js'

function chunkIntoColumns(items, columns) {
  const cols = Array.from({ length: columns }, () => [])
  for (let i = 0; i < items.length; i++) cols[i % columns].push(items[i])
  return cols
}

export default function ScrollingGalleryBackground({
  filenames = [],
  columns = 4,
  opacity = 0.28,
}) {
  const urls = useMemo(() => filenames.map((f) => publicImage(f)), [filenames])
  const cols = useMemo(() => chunkIntoColumns(urls, columns), [urls, columns])

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-screen w-screen -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 grid grid-cols-2 gap-4 p-4 md:grid-cols-4 md:gap-6 md:p-6"
        style={{ opacity }}
      >
        {cols.map((items, colIdx) => {
          const dir = colIdx % 2 === 0 ? 'up' : 'down'
          const duration = 34 + colIdx * 7
          const anim = dir === 'up' ? 'oyw-marquee-up' : 'oyw-marquee-down'
          const doubled = items.concat(items)

          return (
            <div key={colIdx} className="relative h-full overflow-hidden rounded-2xl">
              <div
                className="flex flex-col gap-4"
                style={{
                  animation: `${anim} ${duration}s linear infinite`,
                  willChange: 'transform',
                }}
              >
                {doubled.map((src, idx) => (
                  <div
                    key={`${colIdx}-${idx}`}
                    className="overflow-hidden rounded-xl bg-white/10 shadow-glow"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-32 w-full object-cover md:h-40"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
