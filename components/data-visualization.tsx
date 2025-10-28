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
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1120]/85 p-6 shadow-[0_28px_90px_rgba(7,11,25,0.5)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,233,255,0.18),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-12 top-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(167,137,255,0.45)_0%,_rgba(11,17,32,0)_70%)] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-[30px] border border-white/10 bg-[#101a2f]/92 p-8 shadow-[0_30px_80px_rgba(11,19,38,0.55)]">
            <div className="absolute inset-4 rounded-[26px] border border-white/10" aria-hidden="true" />
            <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.14),transparent_70%)]" />
            <div className="relative flex h-full flex-col justify-center gap-4 text-center">
              <div className="space-y-2 px-6">
                <span className="text-xs uppercase tracking-[0.45em] text-white/60">Signal Core</span>
                <h3 className="text-4xl font-semibold text-white sm:text-[2.7rem]">Orbit Sync</h3>
                <p className="text-sm text-white/65">
                  The monitoring nucleus aligning machine foresight with human oversight in under 50ms.
                </p>
              </div>

              <svg className="mx-auto h-44 w-44 text-white/15 sm:h-52 sm:w-52" viewBox="0 0 320 320" fill="none">
                <circle cx="160" cy="160" r="144" stroke="currentColor" strokeDasharray="2 10" strokeOpacity="0.18" />
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
            </div>

            <div className="pointer-events-none absolute inset-0 animate-float-soft" aria-hidden="true">
              <div className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,233,255,0.4)_0%,_rgba(16,24,44,0)_70%)] blur-xl" />
              <div className="absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-[radial-gradient(circle,_rgba(246,212,125,0.45)_0%,_rgba(16,24,44,0)_70%)] blur-xl" />
            </div>

            <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.35em] text-white/60 shadow-[0_8px_24px_rgba(5,9,19,0.55)]">
              Live feed
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
            </div>
            <div className="absolute bottom-5 right-5 max-w-[190px] space-y-1.5 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-left shadow-[0_16px_36px_rgba(6,10,22,0.5)]">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/45">Variance</p>
              <p className="text-lg font-semibold leading-snug text-white">0.13% drawdown</p>
              <p className="text-xs leading-relaxed text-white/60">last 30 sessions</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(8,12,28,0.4)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">Telemetry Snapshot</p>
            <p className="mt-3 text-sm text-white/70">
              Execution diagnostics surface variance, flow health, and counterparty posture continuously so intervention stays
              proactive instead of reactive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {insights.map((item, index) => (
              <div
                key={item.label}
                className="group/insight relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-3xl border border-white/10 bg-black/65 p-5 shadow-[0_16px_48px_rgba(8,12,28,0.45)] transition duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_22px_60px_rgba(12,18,36,0.55)] sm:p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,233,255,0.18),transparent_70%)] opacity-0 transition duration-500 group-hover/insight:opacity-100" />
                <div className="relative space-y-3">
                  <span className="text-3xl font-semibold text-white sm:text-[2.4rem]">{item.value}</span>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white/70">{item.label}</span>
                  <p className="text-sm leading-relaxed text-white/65">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
