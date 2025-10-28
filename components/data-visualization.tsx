const pulseStreams = [
  {
    label: "Signal",
    value: "99.9",
    unit: "%",
    fill: 95,
    accent: "from-[#f8c660] via-[#fef1ba] to-[#f8c660]",
  },
  {
    label: "Latency",
    value: "47",
    unit: "ms",
    fill: 88,
    accent: "from-[#67e9ff] via-[#cbf3ff] to-[#67e9ff]",
  },
  {
    label: "Cover",
    value: "24",
    unit: "hrs",
    fill: 82,
    accent: "from-[#6fffd6] via-[#c9ffe9] to-[#6fffd6]",
  },
]

const microTiles = [
  {
    title: "Drift",
    metric: "-0.4bps",
    accent: "from-[#f8c660]/35 via-transparent to-transparent",
  },
  {
    title: "Spread",
    metric: "1.2x",
    accent: "from-[#67e9ff]/35 via-transparent to-transparent",
  },
  {
    title: "Flow",
    metric: "smooth",
    accent: "from-[#6fffd6]/35 via-transparent to-transparent",
  },
  {
    title: "Risk",
    metric: "calm",
    accent: "from-[#a58bff]/35 via-transparent to-transparent",
  },
]

export default function DataVisualization() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#05070f]/85 p-8 shadow-[0_30px_90px_rgba(5,10,28,0.55)] backdrop-blur-2xl sm:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(167,137,255,0.35)_0%,_rgba(5,7,15,0)_70%)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(109,255,227,0.28)_0%,_rgba(5,7,15,0)_70%)] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-10">
        <div className="relative flex items-center justify-between rounded-[26px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-4 shadow-[0_20px_60px_rgba(6,12,26,0.5)]">
          <div className="flex items-center gap-3 text-left">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white/70" aria-hidden="true">
              ⦿
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-white/45">Pulse board</p>
              <p className="text-sm text-white/60">Minimal telemetry, live.</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Live
          </span>
        </div>

        <div className="space-y-4">
          {pulseStreams.map((stream, index) => (
            <div
              key={stream.label}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-black/60 p-6 shadow-[0_20px_60px_rgba(6,12,26,0.45)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_26px_75px_rgba(8,14,32,0.55)] opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${160 + index * 140}ms` }}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-r ${stream.accent} opacity-[0.08]`} aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_70%)]" aria-hidden="true" />
              <div className="relative flex items-center justify-between gap-6">
                <div className="space-y-2 text-left">
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/45">{stream.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">{stream.value}</span>
                    <span className="text-xs uppercase tracking-[0.4em] text-white/35">{stream.unit}</span>
                  </div>
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-black/70 p-1">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent">
                    <div
                      className="h-full w-full origin-center rounded-full border-2 border-dashed border-white/20"
                      style={{ animation: `spin ${6 + index * 1.5}s linear infinite` }}
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

        <div className="grid gap-4 sm:grid-cols-2">
          {microTiles.map((tile, index) => (
            <div
              key={tile.title}
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/55 p-5 text-left shadow-[0_16px_50px_rgba(6,12,26,0.45)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_65px_rgba(8,14,32,0.55)] opacity-0 animate-fade-in-up"
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
      </div>
    </div>
  )
}
