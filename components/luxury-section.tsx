"use client"

import { useEffect, useRef } from "react"
import { Shield, Zap, TrendingUp, Database } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Proprietary Algorithms",
    description: "Refined over years of market analysis with cutting-edge quantitative models",
  },
  {
    icon: Shield,
    title: "Real-Time Risk Management",
    description: "Dynamic position sizing with intelligent stop-loss mechanisms",
  },
  {
    icon: Zap,
    title: "Multi-Timeframe Analysis",
    description: "Comprehensive market view across multiple temporal dimensions",
  },
  {
    icon: Database,
    title: "Decades of Backtesting",
    description: "Validated across extensive historical data for proven reliability",
  },
]

export default function LuxurySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden py-32 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 hidden w-96 h-96 bg-[#d4af37] rounded-full blur-[120px] motion-safe:animate-pulse lg:block" />
          <div
            className="absolute bottom-1/4 right-1/4 hidden w-96 h-96 bg-[#fbbf24] rounded-full blur-[120px] motion-safe:animate-pulse lg:block"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent motion-safe:animate-fade-in">
            The Luxury of Certainty
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                className="opacity-0 group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] to-[#fbbf24] rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                <div className="relative glass-strong rounded-2xl p-8 h-full hover:scale-[1.02] transition-all duration-500 cursor-pointer group-hover:bg-gradient-to-br group-hover:from-[#fbbf24] group-hover:to-[#d4af37]">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#d4af37] blur-xl opacity-50 group-hover:opacity-0 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#fbbf24] flex items-center justify-center group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold mb-4 text-white group-hover:text-black transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed group-hover:text-black/90 transition-colors font-[family-name:var(--font-inter)]">
                    {feature.description}
                  </p>

                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 group-hover:border-black transition-all" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 motion-safe:animate-pulse" />
      </div>
    </section>
  )
}
