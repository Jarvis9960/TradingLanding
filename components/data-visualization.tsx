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

export default function DataVisualization() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#05070f]/85 p-8 shadow-[0_30px_90px_rgba(5,10,28,0.55)] backdrop-blur-2xl sm:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-10">
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

        <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />
      </div>
    </div>
  )
}
