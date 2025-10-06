"use client"

import { useEffect, useRef, useState } from "react"
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
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.2 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-4 md:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-20 text-center">
          Why We're <span className="text-[#d4af37]">Different</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="opacity-0 glass rounded-2xl p-8 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  transform: hoveredIndex === index ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 20px 60px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: hoveredIndex === index ? "scale(1.5) rotate(45deg)" : "scale(1) rotate(0deg)",
                    transition: "all 0.8s ease-out",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.3), transparent, rgba(212, 175, 55, 0.3))",
                    backgroundSize: "200% 200%",
                    animation: hoveredIndex === index ? "shimmer 2s linear infinite" : "none",
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all duration-500"
                      style={{
                        transform: hoveredIndex === index ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 text-[#d4af37] transition-all duration-500"
                        style={{
                          filter: hoveredIndex === index ? "drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))" : "none",
                        }}
                      />
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transition-all duration-300"
                    style={{
                      color: hoveredIndex === index ? "#d4af37" : "white",
                      textShadow: hoveredIndex === index ? "0 0 20px rgba(212, 175, 55, 0.5)" : "none",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {hoveredIndex === index && (
                  <>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-[#d4af37] rounded-full animate-ping" />
                    <div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
