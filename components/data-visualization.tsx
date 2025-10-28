const signalStreams = [
  {
    label: "Signal Health",
    value: "99.7% alignment",
    description: "Multi-venue markouts reconcile in real time with hashed audit trails for every fill.",
    fill: 96,
    accent: "from-[#f8c660] via-[#fef1ba] to-[#f8c660]",
    meta: "Continuous",
  },
  {
    label: "Latency Envelope",
    value: "48ms median",
    description: "Predictive routing pivots order flow before congestion hits the matching engine.",
    fill: 90,
    accent: "from-[#67e9ff] via-[#cbf3ff] to-[#67e9ff]",
    meta: "Sub-50ms",
  },
  {
    label: "Liquidity Cover",
    value: "24/7 desk",
    description: "Global sentinels handover seamlessly so regimes stay observed through every session.",
    fill: 88,
    accent: "from-[#a58bff] via-[#e2d9ff] to-[#a58bff]",
    meta: "Always on",
  },
]

const microTiles = [
  {
    title: "Execution Pace",
    metric: "x6 uplift",
    accent: "from-[#f8c660]/25 via-transparent to-transparent",
  },
  {
    title: "Risk Lens",
    metric: "12μ drift",
    accent: "from-[#67e9ff]/25 via-transparent to-transparent",
  },
  {
    title: "Session Sync",
    metric: "0 gaps",
    accent: "from-[#a58bff]/25 via-transparent to-transparent",
  },
  {
    title: "Route Memory",
    metric: "180d",
    accent: "from-[#4ff9c6]/25 via-transparent to-transparent",
  },
]

const snapshotTiles = [
  {
    title: "Drawdown Guard",
    metric: "0.13%",
    detail: "Variance is throttled via staged throttles with automated unwind scripts on standby.",
    accent: "from-[#f8c660]/40 via-transparent to-transparent",
  },
  {
    title: "Coverage Arc",
    metric: "40+ venues",
    detail: "Cash, futures, and dark pools co-exist in a single canvas with impact weighting applied.",
    accent: "from-[#67e9ff]/35 via-transparent to-transparent",
  },
]

export default function DataVisualization() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#05070f]/85 p-8 shadow-[0_30px_90px_rgba(5,10,28,0.55)] backdrop-blur-2xl sm:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-10">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_20px_60px_rgba(6,12,26,0.5)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_70%)]" aria-hidden="true" />
          <div className="relative flex flex-col gap-4 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/55">Orbit Console</p>
                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[2.4rem]">Flow synchroniser</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Live
              </span>
            </div>
            <p className="max-w-xl break-words text-sm text-white/65">
              Collates machine foresight, human intervention notes, and liquidity telemetry into a single ambient layer that stays readable even when markets accelerate.
            </p>
          </div>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/5 to-transparent" aria-hidden="true" />
          <div className="space-y-6">
            {signalStreams.map((stream, index) => (
              <div
                key={stream.label}
                className="group relative space-y-5 pl-12 opacity-0 sm:pl-16 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 140}ms` }}
              >
                <span className="pointer-events-none absolute left-4 top-16 flex h-3 w-3 -translate-y-1/2 items-center justify-center">
                  <span className="absolute h-8 w-8 rounded-full bg-white/5 blur-lg" />
                  <span className="relative inline-flex h-3 w-3 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-white/35" />
                    <span className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-white/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </span>
                </span>
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/60 p-6 shadow-[0_20px_60px_rgba(6,12,26,0.45)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/25 group-hover:shadow-[0_26px_75px_rgba(8,14,32,0.55)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className="relative space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/45">{stream.label}</p>
                        <p className="mt-2 text-lg font-semibold text-white sm:text-[1.9rem]">{stream.value}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-white/55">
                        {stream.meta}
                      </span>
                    </div>
                    <p className="break-words text-sm leading-relaxed text-white/65">{stream.description}</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${stream.accent}`}
                        style={{ width: `${stream.fill}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full bg-gradient-to-r ${stream.accent}`} style={{ width: `${stream.fill}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {microTiles.map((tile, index) => (
            <div
              key={tile.title}
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/55 p-5 text-left shadow-[0_16px_50px_rgba(6,12,26,0.45)] opacity-0 transition duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(8,14,32,0.55)] animate-fade-in-up"
              style={{ animationDelay: `${360 + index * 110}ms` }}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br ${tile.accent}`} aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),transparent_70%)]" aria-hidden="true" />
              <div className="relative space-y-2">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/45">{tile.title}</p>
                <p className="text-2xl font-semibold text-white">{tile.metric}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {snapshotTiles.map((tile, index) => (
            <div
              key={tile.title}
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/55 p-5 text-left shadow-[0_16px_50px_rgba(6,12,26,0.45)] opacity-0 transition duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(8,14,32,0.55)] animate-fade-in-up"
              style={{ animationDelay: `${420 + index * 140}ms` }}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br ${tile.accent}`} aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),transparent_70%)]" aria-hidden="true" />
              <div className="relative space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/45">{tile.title}</p>
                <p className="text-3xl font-semibold text-white">{tile.metric}</p>
                <p className="break-words text-sm text-white/65">{tile.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
