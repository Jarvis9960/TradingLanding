import DataVisualization from "./data-visualization"

type MetricHighlight = {
  value: string
  title: string
  detail: string
  accent: string
}

const metricHighlights: MetricHighlight[] = [
  {
    value: "99.7%",
    title: "Signal Integrity",
    detail: "Cross-exchange reconciliation and synthetic fills keep models honest and sharp.",
    accent: "from-[#f8c660] via-[#fef3c7] to-[#f8c660]",
  },
  {
    value: "<50ms",
    title: "Execution Delay",
    detail: "Adaptive routing lives inside every venue to trim latency before it appears on tape.",
    accent: "from-[#67e9ff] via-[#c7f0ff] to-[#67e9ff]",
  },
  {
    value: "24/7",
    title: "Capital Watch",
    detail: "Sentinel desks handoff between regions to keep coverage continuous and calm.",
    accent: "from-[#a58bff] via-[#e5d9ff] to-[#a58bff]",
  },
  {
    value: "40+",
    title: "Venues Ingested",
    detail: "Liquidity and risk signals stitch together from cash, derivatives, and dark pools.",
    accent: "from-[#6fffd6] via-[#c9ffe9] to-[#6fffd6]",
  },
]

export default function IntelligenceSection() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-28 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[#02040a]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-44 top-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,_rgba(115,153,255,0.25)_0%,_rgba(2,4,10,0)_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-36 bottom-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(109,255,227,0.22)_0%,_rgba(2,4,10,0)_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_60%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#030510]/80 to-[#010208]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl space-y-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[0.7rem] uppercase tracking-[0.55em] text-white/60 shadow-[0_15px_45px_rgba(4,9,18,0.5)]">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse-glow" />
            Precision Stack
            <span className="hidden text-[0.65rem] tracking-[0.45em] text-white/35 sm:inline">Signal · Liquidity · Risk</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-[2.75rem] font-semibold leading-tight tracking-tight text-white md:text-[3rem]">
              Precision intelligence for fast markets
            </h2>
            <p className="text-base text-white/65 md:text-lg">
              A living intelligence fabric that listens to market structure, rewrites strategy paths, and harmonizes humans with
              automation before the tape shifts. Simple to scan, confident to act on.
            </p>
          </div>
        </div>

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div className="grid gap-6 sm:grid-cols-2">
              {metricHighlights.map((metric, index) => (
                <article
                  key={metric.title}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-[26px] border border-white/10 bg-black/60 p-6 shadow-[0_18px_50px_rgba(4,9,18,0.45)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_26px_70px_rgba(6,12,26,0.55)] opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition duration-500 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 60%)` }} />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${metric.accent} opacity-[0.08]`} aria-hidden="true" />
                  <div className="relative space-y-3 text-left">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-3xl font-semibold text-white sm:text-[2.6rem]">{metric.value}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{metric.title}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">{metric.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <DataVisualization />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
