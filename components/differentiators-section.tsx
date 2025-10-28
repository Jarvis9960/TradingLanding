import { BarChart3, Zap, Shield, Globe } from "lucide-react"

const differentiators = [
  {
    icon: BarChart3,
    title: "100% Quantitative",
    description: "Pure data-driven decisions",
  },
  {
    icon: Zap,
    title: "Fully Automated Execution",
    description: "Zero human emotion",
  },
  {
    icon: Shield,
    title: "Risk-Managed",
    description: "Capital preservation first",
  },
  {
    icon: Globe,
    title: "Works Across Pairs",
    description: "Multi-currency capability",
  },
]

export default function DifferentiatorsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a] px-4 py-32 text-white md:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="mb-20 font-[family-name:var(--font-playfair)] text-5xl font-bold md:text-6xl">
          Why We&apos;re <span className="text-[#d4af37]">Different</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-8 text-left shadow-[0_20px_60px_rgba(212,175,55,0.12)] transition-colors duration-200 hover:border-[#d4af37]/40"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/10">
                    <Icon className="h-8 w-8 text-[#d4af37]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
