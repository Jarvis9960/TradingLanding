const rings = [
  { radius: 120, value: 0.997, color: "#f6d47d" },
  { radius: 92, value: 0.94, color: "#60efff" },
  { radius: 64, value: 0.88, color: "#a97dff" },
]

const insights = [
  {
    value: "99.7%",
    label: "Signal Accuracy",
    detail: "Adaptive intelligence refined across 40+ markets.",
  },
  {
    value: "<50ms",
    label: "Execution Speed",
    detail: "Hyper-optimised routing with predictive load balancing.",
  },
  {
    value: "24/7",
    label: "Capital Watch",
    detail: "Human + autonomous oversight for uninterrupted uptime.",
  },
]

export default function DataVisualization() {
  const circumference = (radius: number) => 2 * Math.PI * radius

  return (
    <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0b1120]/90 p-10 shadow-[0_32px_90px_rgba(7,11,25,0.55)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,233,255,0.18),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(167,137,255,0.45)_0%,_rgba(11,17,32,0)_70%)] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-[#101a2f]/90 shadow-[0_32px_70px_rgba(11,19,38,0.6)]">
            <div className="absolute inset-6 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.45em] text-white/60">Signal Core</span>
                <h3 className="text-4xl font-semibold text-white md:text-5xl">Orbit Sync</h3>
                <p className="text-sm text-white/65">
                  The monitoring nucleus aligning machine foresight with human oversight in under 50ms.
                </p>
              </div>
            </div>

            <svg className="absolute inset-0 h-full w-full text-white/15" viewBox="0 0 320 320" fill="none">
              <circle cx="160" cy="160" r="144" stroke="currentColor" strokeDasharray="2 10" strokeOpacity="0.2" />
              <circle cx="160" cy="160" r="112" stroke="currentColor" strokeOpacity="0.12" />
              <circle cx="160" cy="160" r="84" stroke="currentColor" strokeOpacity="0.12" />
              {rings.map(({ radius, value, color }, index) => {
                const c = circumference(radius)
                return (
                  <circle
                    key={radius}
                    cx="160"
                    cy="160"
                    r={radius}
                    stroke={color}
                    strokeWidth={index === 0 ? 6 : 4}
                    strokeLinecap="round"
                    strokeDasharray={`${c * value} ${c}`}
                    strokeDashoffset={-c * (0.22 * index)}
                    transform="rotate(-90 160 160)"
                    opacity={0.85 - index * 0.2}
                    className="animate-orbit-slow"
                    style={{ animationDuration: `${38 - index * 6}s` }}
                  />
                )
              })}
            </svg>

            <div className="absolute inset-0 animate-float-soft" aria-hidden="true">
              <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,233,255,0.55)_0%,_rgba(16,24,44,0)_70%)] blur-xl" />
              <div className="absolute -bottom-10 left-8 h-20 w-20 rounded-full bg-[radial-gradient(circle,_rgba(246,212,125,0.55)_0%,_rgba(16,24,44,0)_70%)] blur-xl" />
            </div>

            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/60 shadow-[0_8px_24px_rgba(5,9,19,0.65)]">
              Live feed
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-left shadow-[0_16px_40px_rgba(6,10,22,0.6)]">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/45">Variance</p>
              <p className="mt-1 text-lg font-semibold text-white">0.13% drawdown</p>
              <p className="text-xs text-white/50">last 30 sessions</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-full border border-white/5 opacity-40 mix-blend-screen" aria-hidden="true" />
        </div>

        <div className="flex w-full flex-col gap-6 lg:max-w-sm">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(8,12,28,0.45)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">Telemetry Snapshot</p>
            <p className="mt-3 text-sm text-white/65">
              Execution diagnostics surface variance, flow health, and counterparty posture continuously so intervention stays
              proactive instead of reactive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {insights.map((item, index) => (
              <div
                key={item.label}
                className="group/insight relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-5 shadow-[0_16px_50px_rgba(8,12,28,0.45)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_22px_60px_rgba(12,18,36,0.55)]"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,233,255,0.22),transparent_70%)] opacity-0 transition duration-500 group-hover/insight:opacity-100" />
                <div className="relative space-y-3">
                  <span className="text-3xl font-semibold text-white md:text-4xl">{item.value}</span>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/70">{item.label}</span>
                  <p className="text-sm text-white/60">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
