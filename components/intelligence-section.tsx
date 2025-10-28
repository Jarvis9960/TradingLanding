import DataVisualization from "./data-visualization"

type IntelCard = {
  value: string
  label: string
  description: string
  accent: string
  gradient: string
}

const intelCards: IntelCard[] = [
  {
    value: "99.7%",
    label: "Signal Accuracy",
    description: "Live + historical execution edge with independent validation.",
    accent: "#f8c660",
    gradient: "from-[#f8c660]/15 via-transparent to-transparent",
  },
  {
    value: "50ms",
    label: "Execution Speed",
    description: "Colocation and automation engineered for sub-50ms reaction windows.",
    accent: "#67e9ff",
    gradient: "from-[#67e9ff]/15 via-transparent to-transparent",
  },
  {
    value: "24/7",
    label: "Capital Watch",
    description: "Sentinel desk monitoring every session with anomaly escalation.",
    accent: "#a58bff",
    gradient: "from-[#a58bff]/15 via-transparent to-transparent",
  },
]

export default function IntelligenceSection() {
  return (
    <section className="relative z-10 overflow-hidden px-4 py-24 text-white md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[#05070f]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,117,255,0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#05070f] to-[#03040a]" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_minmax(0,1fr)]">
          <div className="space-y-10">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.5em] text-white/60">
              Intelligence Stack
              <span className="hidden text-[0.7rem] tracking-[0.4em] text-white/40 sm:inline">
                Signal · Liquidity · Risk
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-semibold md:text-5xl">Precision intelligence for fast markets</h2>
              <p className="max-w-xl text-base text-white/60 md:text-lg">
                Our layered intelligence stack balances signal conviction, execution speed, and capital health in real time so your
                desk can commit with confidence. Every metric is reconciled across 40+ venues and pressure-tested against
                regime shifts.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {intelCards.map((card) => (
                <article
                  key={card.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6 shadow-[0_24px_60px_rgba(3,7,18,0.45)] backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-px rounded-[26px] border border-white/10" aria-hidden />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`} aria-hidden />

                  <div className="relative space-y-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{card.value}</span>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em]" style={{ color: card.accent }}>
                        {card.label}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">{card.description}</p>
                    <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-white/40">
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.accent }} />
                      Verified continuously
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <DataVisualization />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
