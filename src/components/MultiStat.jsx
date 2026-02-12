import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function MultiStat({ stats = [], title, note }) {
  const mdColsClass =
    stats.length === 1 ? 'md:grid-cols-1' : stats.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className="mx-auto w-full max-w-[860px]">
      {title ? (
        <h2 className="text-center font-script text-4xl text-[#2a0e1c] md:text-5xl">
          {title}
        </h2>
      ) : null}

      <MotionDiv
        className={`mt-6 grid gap-4 md:mt-8 ${mdColsClass}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {stats.map((s, idx) => (
          <MotionDiv
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="oyw-glass group rounded-3xl p-5 shadow-glow transition-transform duration-200 hover:-translate-y-1 hover:shadow-glowStrong"
          >
            <div className="text-2xl opacity-90" aria-hidden="true">
              {s.icon || '❤'}
            </div>
            <div className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#2a0e1c]">
              {s.number}
            </div>
            <div className="mt-2 font-body text-sm font-semibold text-[color:var(--oyw-muted)]">
              {s.label}
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>

      {note ? (
        <p className="mt-6 text-center font-body text-sm font-semibold text-[color:var(--oyw-muted)] md:text-base">
          {note}
        </p>
      ) : null}
    </div>
  )
}
