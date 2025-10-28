import DataVisualization from "./data-visualization"

type MetricHighlight = {
  value: string
  label: string
  accent: string
  hint: string
}

const metricHighlights: MetricHighlight[] = [
  {
    value: "99.9%",
    label: "Signal lock",
    hint: "synced",
    accent: "from-[#f8c660] via-[#fef3c7] to-[#f8c660]",
  },
  {
    value: "42 venues",
    label: "Depth mesh",
    hint: "global",
    accent: "from-[#67e9ff] via-[#c7f0ff] to-[#67e9ff]",
  },
  {
    value: "47ms",
    label: "Route glide",
    hint: "swift",
    accent: "from-[#a58bff] via-[#e5d9ff] to-[#a58bff]",
  },
  {
    value: "24/7",
    label: "Desk cover",
    hint: "calm",
    accent: "from-[#6fffd6] via-[#c9ffe9] to-[#6fffd6]",
  },
]

const rhythmBeats = [
  { title: "Pulse", value: "steady", accent: "from-[#f8c660]/25 via-transparent to-transparent" },
  { title: "Spread", value: "tight", accent: "from-[#67e9ff]/25 via-transparent to-transparent" },
  { title: "Flow", value: "balanced", accent: "from-[#6fffd6]/25 via-transparent to-transparent" },
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
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[0.7rem] uppercase tracking-[0.55em] text-white/60 shadow-[0_15px_45px_rgba(4,9,18,0.5)]">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse-glow" />
            Realtime Pulse
            <span className="hidden text-[0.65rem] tracking-[0.45em] text-white/35 sm:inline">Signal · Flow · Rhythm</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-[2.6rem] font-semibold leading-tight tracking-tight text-white md:text-[2.9rem]">
              Lean intelligence for fast markets
            </h2>
            <p className="text-base text-white/60 md:text-lg">Watch the pulse, act in sync.</p>
          </div>
        </div>

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div className="grid gap-6 sm:grid-cols-2">
              {metricHighlights.map((metric, index) => (
                <article
                  key={metric.label}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-[26px] border border-white/10 bg-black/60 p-6 shadow-[0_18px_50px_rgba(4,9,18,0.45)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_26px_70px_rgba(6,12,26,0.55)] opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition duration-500 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 60%)` }} />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${metric.accent} opacity-[0.08]`} aria-hidden="true" />
                  <div className="relative space-y-3 text-left">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-3xl font-semibold text-white sm:text-[2.6rem]">{metric.value}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{metric.label}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.5em] text-white/35">{metric.hint}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_24px_70px_rgba(5,10,24,0.5)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,198,96,0.18),transparent_70%)]" aria-hidden="true" />
              <div className="relative grid gap-4 sm:grid-cols-3">
                {rhythmBeats.map((beat, index) => (
                  <div
                    key={beat.title}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 text-left shadow-[0_16px_40px_rgba(6,12,26,0.45)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_55px_rgba(6,12,26,0.5)] opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${120 + index * 110}ms` }}
                  >
                    <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${beat.accent}`} aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_70%)]" aria-hidden="true" />
                    <div className="relative space-y-2">
                      <p className="text-[0.7rem] uppercase tracking-[0.45em] text-white/45">{beat.title}</p>
                      <p className="text-xl font-semibold text-white">{beat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
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
