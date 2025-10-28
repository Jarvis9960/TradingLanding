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
    detail: "Hyper-optimized routing with predictive load balancing.",
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
    <div className="glass-strong group relative overflow-hidden rounded-[28px] p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#f6d47d1f,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(246,212,125,0.25), transparent 60%)," +
          "radial-gradient(circle at 80% 15%, rgba(169,125,255,0.2), transparent 55%)," +
          "radial-gradient(circle at 50% 80%, rgba(96,239,255,0.18), transparent 65%)",
      }} />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="mx-auto w-full max-w-sm">
          <div className="relative aspect-square">
            <div className="absolute inset-10 rounded-full border border-white/10 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(6,10,25,0.6))]" />
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <span className="text-sm uppercase tracking-[0.4em] text-white/50">Orbit Sync</span>
                <span className="mt-2 text-4xl font-semibold text-white md:text-5xl">Signal Core</span>
                <p className="mt-3 max-w-[14rem] text-xs text-white/60">
                  Multi-layer observability that adapts to volatility in milliseconds.
                </p>
              </div>
            </div>

            <svg
              className="absolute inset-0 h-full w-full text-white/20"
              viewBox="0 0 320 320"
              fill="none"
            >
              <circle cx="160" cy="160" r="144" stroke="currentColor" strokeDasharray="6 12" strokeOpacity="0.2" />
              <circle cx="160" cy="160" r="112" stroke="currentColor" strokeOpacity="0.1" />
              <circle cx="160" cy="160" r="84" stroke="currentColor" strokeOpacity="0.1" />
              {rings.map(({ radius, value, color }, index) => {
                const c = circumference(radius)
                return (
                  <circle
                    key={radius}
                    cx="160"
                    cy="160"
                    r={radius}
                    stroke={color}
                    strokeWidth={index === 0 ? 8 : 6}
                    strokeLinecap="round"
                    strokeDasharray={`${c * value} ${c}`}
                    strokeDashoffset={-c * (0.15 * index)}
                    transform="rotate(-90 160 160)"
                    opacity={0.9 - index * 0.2}
                  />
                )
              })}
            </svg>

            <div className="absolute inset-0 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute inset-0 rounded-full border border-white/10" />
          </div>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {insights.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-5 shadow-[0_12px_48px_rgba(5,6,18,0.45)] backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="text-3xl font-semibold text-white md:text-4xl">{item.value}</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{item.label}</span>
                <p className="text-sm text-white/60">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
