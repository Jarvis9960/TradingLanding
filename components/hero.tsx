"use client"

import { useEffect, useRef, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const CandleChart3D = dynamic(() => import("@/components/candle-chart-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-[#d4af37]">Loading...</div>
    </div>
  ),
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 opacity-0">
      <div className="absolute top-4 right-4 z-20">
        <a href="https://app.tradingwala.co.in/" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 group"
          >
            Log to App
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 opacity-20">
        <Suspense fallback={<div />}>
          <CandleChart3D />
        </Suspense>
      </div>

      {/* Animated wave background overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-[200%] h-full animate-wave" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="url(#waveGradient)" opacity="0.1" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="animate-blur-to-sharp" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="inline-block">✦</span>{" "}
            <span className="bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
              Legacy Through Precision
            </span>{" "}
            <span className="inline-block">✦</span>
          </h1>
        </div>

        <div className="animate-fade-in-up mb-12" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
            {"India's First Quantitative Forex Edge"}
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "1s", opacity: 0 }}>
          <Button
            size="lg"
            className="bg-[#d4af37] hover:bg-[#c4a137] text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-glow group"
          >
            Join the Revolution
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#d4af37] rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  )
}
