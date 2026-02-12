import { motion } from 'framer-motion'

const MotionDiv = motion.div
const MotionSpan = motion.span

function splitWords(text) {
  const lines = String(text || '').split('\n')
  return lines.map((line) => line.split(' ').filter(Boolean))
}

export default function QuoteSlide({ text, author, fontSize = 'xl', tone = 'soft' }) {
  const wordsByLine = splitWords(text)
  const sizeClass =
    fontSize === 'lg'
      ? 'text-4xl md:text-6xl'
      : fontSize === 'sm'
        ? 'text-3xl md:text-5xl'
        : 'text-4xl md:text-6xl'

  const colorClass = tone === 'dark' ? 'text-white' : 'text-[#2a0e1c]'
  const mutedClass = tone === 'dark' ? 'text-white/80' : 'text-[color:var(--oyw-muted)]'

  return (
    <div className="mx-auto w-full max-w-[860px] text-center">
      <MotionDiv
        className="oyw-glass rounded-3xl px-6 py-10 shadow-glow md:px-10 md:py-14"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03 } },
        }}
      >
        <div
          className={`font-script ${sizeClass} leading-[1.12] tracking-wide ${colorClass}`}
        >
          {wordsByLine.map((words, li) => (
            <div key={li}>
              {words.map((w, wi) => (
                <MotionSpan
                  key={`${li}-${wi}`}
                  className="inline-block mr-[0.35em]"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  {w}
                </MotionSpan>
              ))}
            </div>
          ))}
        </div>

        {author ? (
          <div className={`mt-6 font-body text-sm font-semibold ${mutedClass}`}>
            {author}
          </div>
        ) : null}
      </MotionDiv>
    </div>
  )
}
