"use client"

import { useEffect, useRef } from "react"
import DataVisualization from "./data-visualization"

export default function IntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const vizRef = useRef<HTMLDivElement>(null)

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

    if (textRef.current) observer.observe(textRef.current)
    if (vizRef.current) observer.observe(vizRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div ref={textRef} className="opacity-0">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Where Intelligence
              <br />
              <span className="text-[#d4af37]">Meets Opportunity</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              Harness the power of quantitative analysis and algorithmic precision to navigate the forex markets with
              unparalleled confidence.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Our proprietary systems analyze millions of data points in real-time, identifying opportunities invisible
              to the human eye.
            </p>
          </div>

          {/* Animated visualization */}
          <div ref={vizRef} className="opacity-0" style={{ animationDelay: "0.3s" }}>
            <DataVisualization />
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
    </section>
  )
}
