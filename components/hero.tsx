"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"

const highlights = [
  { title: "Top tier liquidity venues", accent: "Seven figure routed volume" },
  { title: "Risk-first architecture", accent: "Multi layer drawdown controls" },
  { title: "Elite trader community", accent: "Invite-only mastermind" },
]

const MarketPulseBackground = dynamic(() => import("@/components/market-line-background"), {
  ssr: false,
  loading: () => <div className="flex h-full w-full items-center justify-center text-sm text-white/60">Plotting market pulse…</div>,
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1)
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(0, ${progress * -140}px, 0) scale(${1 + progress * 0.25})`
        sceneRef.current.style.opacity = String(1 - progress * 0.5)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-screen flex-col items-center overflow-hidden bg-[#020203] px-4 pb-20 pt-12 text-white opacity-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(246,212,125,0.12),_transparent_65%)]" />
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-[#f1c876]/15 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-10 h-72 w-72 rounded-full bg-[#9674ff]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(5,5,9,0.9),_rgba(8,8,14,0.55))]" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(246,212,125,0.18)_0deg,rgba(150,116,255,0.24)_140deg,rgba(23,15,3,0.4)_260deg,rgba(246,212,125,0.18)_360deg)] opacity-90 blur-[120px] mix-blend-screen" />
        <div className="absolute left-[10%] top-[22%] h-60 w-60 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(246,212,125,0.35)_0%,_rgba(26,18,2,0)_70%)] opacity-70 blur-[40px]" />
        <div className="absolute right-[12%] top-[32%] h-72 w-72 translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(150,116,255,0.28)_0%,_rgba(15,12,40,0)_75%)] opacity-70 blur-[50px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(150,116,255,0.35)_0%,_rgba(30,23,3,0.3)_55%,_transparent_80%)] blur-3xl" />

        <div className="absolute inset-[-18%]">
          <div
            ref={sceneRef}
            className="pointer-events-none absolute inset-0 min-h-[130vh] will-change-transform"
          >
            <div className="absolute inset-0 opacity-85">
              <MarketPulseBackground />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,4,20,0.2),_rgba(2,2,4,0.85))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020203] via-[#020203]/90 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#020203]/80 via-transparent to-transparent" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full border border-white/20 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(246,212,125,0.25)_35%,_rgba(19,14,4,0)_72%)] opacity-60 blur-[70px] mix-blend-screen" />
          <div className="absolute inset-10 animate-[spin_32s_linear_infinite_reverse] rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(246,212,125,0)_0deg,rgba(246,212,125,0.36)_120deg,rgba(38,24,8,0)_260deg)] opacity-70 blur-[90px] mix-blend-screen" />
        </div>

        <div className="absolute left-[18%] bottom-[18%] h-4 w-4 rounded-full bg-[#f6d47d]/80 shadow-[0_0_40px_12px_rgba(246,212,125,0.4)] animate-[ping_5s_linear_infinite]" />
        <div className="absolute right-[20%] top-[48%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_35px_14px_rgba(162,140,255,0.35)] animate-[ping_7s_linear_infinite]" />
        <div
          className="absolute left-[36%] top-[62%] h-2.5 w-2.5 rounded-full bg-[#b6a0ff]/70 shadow-[0_0_28px_8px_rgba(150,116,255,0.35)] animate-[ping_6s_linear_infinite]"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

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

      <div className="relative z-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 pt-16 text-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
          Tradingwala // Quant Desk
        </span>

        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          <span className="block font-[family-name:var(--font-playfair)]">
            Built by traders
          </span>
          <span className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#f6d47d]/60 bg-[#f6d47d] text-[#160d02] shadow-[0_22px_65px_rgba(246,212,125,0.38)] sm:h-24 sm:w-24">
              <ArrowRight className="h-9 w-9 sm:h-12 sm:w-12" strokeWidth={3.2} />
            </span>
            <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              for traders.
            </span>
          </span>
        </h1>

        <p className="max-w-2xl text-base text-white/70 sm:text-lg">
          India&apos;s First Quantitative Forex Hedge
        </p>

        <Button
          asChild
          className="group h-auto rounded-full border border-[#f6d47d]/50 bg-[#f6d47d] px-12 py-4 text-base font-semibold text-[#1a1202] shadow-[0_24px_55px_rgba(246,212,125,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ffde8f]"
        >
          <Link href="https://app.tradingwala.co.in/" className="flex items-center gap-3">
            <span>Join the Revolutions</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-safe:animate-pulse" strokeWidth={2.6} />
          </Link>
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#020203]/75 to-[#020203]" />
      <div className="absolute left-1/4 top-1/3 h-3 w-3 rounded-full bg-[#d4af37] opacity-80 blur-[1px] animate-float" />
      <div className="absolute right-1/4 top-1/2 h-4 w-4 rounded-full bg-white/80 opacity-80 blur-[1px] animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute left-1/2 bottom-1/4 h-2.5 w-2.5 rounded-full bg-[#d4af37] opacity-70 blur-[1px] animate-float" style={{ animationDelay: "1.6s" }} />
    </section>
  )
}
