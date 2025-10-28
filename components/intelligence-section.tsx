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
    gradient: "from-[#f8c660]/20 via-transparent to-transparent",
  },
  {
    value: "50ms",
    label: "Execution Speed",
    description: "Colocation and automation engineered for sub-50ms reaction windows.",
    accent: "#67e9ff",
    gradient: "from-[#67e9ff]/25 via-transparent to-transparent",
  },
  {
    value: "24/7",
    label: "Capital Watch",
    description: "Sentinel desk monitoring every session with anomaly escalation.",
    accent: "#a58bff",
    gradient: "from-[#a58bff]/25 via-transparent to-transparent",
  },
]

export default function IntelligenceSection() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-28 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[#04050c]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,_rgba(80,148,255,0.35)_0%,_rgba(4,5,12,0)_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-44 top-56 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(103,233,255,0.28)_0%,_rgba(4,5,12,0)_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#05070f]/90 to-[#02030a]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_minmax(0,1fr)]">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[0.65rem] uppercase tracking-[0.55em] text-white/60 shadow-[0_12px_40px_rgba(4,7,18,0.55)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse-glow" />
              Intelligence Stack
              <span className="hidden text-[0.65rem] tracking-[0.45em] text-white/35 sm:inline">Signal · Liquidity · Risk</span>
            </div>

            <div className="space-y-6">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-[2.9rem] md:leading-[1.1]">
                Precision intelligence for fast markets
              </h2>
              <p className="max-w-2xl text-base text-white/70 md:text-lg">
                Our layered intelligence stack balances signal conviction, execution speed, and capital health in real time so your
                desk can commit with conviction. Every metric is reconciled across 40+ venues and pressure-tested against regime
                shifts.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[34px] border border-white/5 bg-white/5 blur-3xl" aria-hidden="true" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {intelCards.map((card, index) => (
                  <article
                    key={card.label}
                    className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#090c16]/90 via-[#0a0f1f]/80 to-[#060812]/90 p-6 shadow-[0_24px_60px_rgba(5,10,25,0.55)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_28px_70px_rgba(8,14,32,0.6)]"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-px rounded-[26px] border border-white/10" aria-hidden="true" />
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition duration-500 group-hover/card:opacity-100`} aria-hidden="true" />

                    <div className="relative space-y-5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-4xl font-semibold tracking-tight text-white md:text-[2.8rem]">{card.value}</span>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.38em]" style={{ color: card.accent }}>
                          {card.label}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">{card.description}</p>
                      <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/45">
                        <span className="inline-flex h-1.5 w-1.5 items-center justify-center rounded-full" style={{ backgroundColor: card.accent }}>
                          <span className="block h-full w-full rounded-full bg-white/70 opacity-0 transition duration-500 group-hover/card:opacity-80" />
                        </span>
                        Verified continuously
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <DataVisualization />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>
  )
}
