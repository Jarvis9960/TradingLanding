"use client"

import { Suspense, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const CandleChart3D = dynamic(() => import("@/components/candle-chart-3d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-[#f6d47d]">Loading visual...</div>
    </div>
  ),
})

const metrics = [
  {
    value: "99.7%",
    label: "Signal Accuracy",
    description: "Proven live + historical execution edge",
  },
  {
    value: "50ms",
    label: "Execution Speed",
    description: "Colocation + automation, human-proofed",
  },
  {
    value: "24/7",
    label: "Capital Watch",
    description: "Sentinel desk monitoring every session",
  },
]

const highlights = [
  { title: "Top tier liquidity venues", accent: "Seven figure routed volume" },
  { title: "Risk-first architecture", accent: "Multi layer drawdown controls" },
  { title: "Elite trader community", accent: "Invite-only mastermind" },
]

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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#020203] px-4 pb-16 pt-8 text-white opacity-0"
    >
      {/* background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.18),_transparent_65%)]" />
        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-[#f1c876]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#9674ff]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(5,5,5,0.9),_rgba(8,8,8,0.4))]" />
      </div>

      {/* nav */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/5 bg-white/5 px-4 py-2 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full border border-white/10 bg-black/60" aria-hidden />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Tradingwala</p>
            <p className="text-sm text-white/60">Quantitative Hedge Network</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          {highlights.map((item) => (
            <div key={item.title} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f6d47d]" />
              <div className="flex flex-col leading-tight">
                <span>{item.title}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white/35">{item.accent}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="https://app.tradingwala.co.in/" target="_blank" rel="noopener noreferrer">
          <Button className="rounded-full border border-[#f6d47d]/40 bg-[#f6d47d] px-6 py-2 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffde8f]">
            Log In
          </Button>
        </a>
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-6xl flex-1 gap-12 pb-6 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
              Built by traders <ArrowUpRight className="h-4 w-4 text-[#f6d47d]" aria-hidden /> for traders
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl leading-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-br from-white via-[#f9dca1] to-white bg-clip-text text-transparent">
                Quantitative. Relentless. Real.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-white/70 sm:text-xl">
              India&apos;s first quantitative forex hedge blending institutional-grade execution, precision risk, and a private circle of funded traders scaling together.
            </p>
          </div>

          <div className="grid gap-6 pt-10 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/60"
              >
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">{metric.value}</div>
                <div className="mb-2 text-sm uppercase tracking-[0.3em] text-[#d4af37]">{metric.label}</div>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-end gap-2 pt-6 opacity-70">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="flex-1 rounded-full bg-gradient-to-t from-[#d4af37]/10 via-[#d4af37]/40 to-[#d4af37]/80"
                style={{
                  height: `${40 + Math.sin(index) * 25 + (index % 2 === 0 ? 30 : 10)}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
                aria-hidden
              />
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-10 rounded-[48px] border border-white/10 bg-gradient-to-br from-white/10 via-[#f6d47d]/10 to-transparent blur-3xl" />
          <div className="relative w-full max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="absolute inset-x-10 top-6 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-white/35">
              <span>Quant stack</span>
              <span>Live desk</span>
            </div>
            <div className="relative mt-10 h-72 overflow-hidden rounded-3xl border border-white/10 bg-black/70">
              <Suspense fallback={<div className="flex h-full items-center justify-center text-white/50">Loading...</div>}>
                <CandleChart3D />
              </Suspense>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Execution feed synced
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                  +4.3% daily
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/50">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/30">Risk Envelope</p>
                  <p className="mt-2 text-xl text-white">0.9%</p>
                  <p className="text-white/40">VaR (rolling 30d)</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/30">Capital Deploy</p>
                  <p className="mt-2 text-xl text-white">₹3.8Cr</p>
                  <p className="text-white/40">Live across desks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-[#d4af37] animate-float" />
      <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-white animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-[#d4af37] animate-float" style={{ animationDelay: "2s" }} />
    </section>
  )
}
