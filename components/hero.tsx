import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const highlights = [
  { title: "Top tier liquidity venues", accent: "Seven figure routed volume" },
  { title: "Risk-first architecture", accent: "Multi layer drawdown controls" },
  { title: "Elite trader community", accent: "Invite-only mastermind" },
]

export default function Hero() {
  return (
    <section
      className="relative z-10 flex min-h-screen flex-col items-center overflow-hidden bg-[#020203] px-4 pb-16 pt-12 text-white"
      data-hero-section
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(246,212,125,0.12),_transparent_65%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(5,5,9,0.9),_rgba(8,8,14,0.55))]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#020203] via-[#020203]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020203] via-[#020203]/80 to-transparent" />
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
          <Button className="rounded-full border border-[#f6d47d]/40 bg-[#f6d47d] px-6 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-[#ffde8f]">
            Log In
          </Button>
        </a>
      </div>

      <div className="relative z-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 pt-16 text-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
          Tradingwala // Quant Desk
        </span>

        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          <span className="block font-[family-name:var(--font-playfair)]">Built by traders</span>
          <span className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hidden h-16 w-16 items-center justify-center rounded-[22px] border border-[#f6d47d]/60 bg-[#f6d47d] text-[#160d02] shadow-[0_22px_65px_rgba(246,212,125,0.38)] sm:inline-flex sm:h-24 sm:w-24">
              <ArrowRight className="h-9 w-9 sm:h-12 sm:w-12" strokeWidth={3.2} />
            </span>
            <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              for traders.
            </span>
          </span>
        </h1>

        <p className="max-w-2xl text-base text-white/70 sm:text-lg">India&apos;s First Quantitative Forex Hedge</p>

        <Button
          asChild
          className="h-auto rounded-full border border-[#f6d47d]/50 bg-[#f6d47d] px-12 py-4 text-base font-semibold text-[#1a1202] shadow-[0_24px_55px_rgba(246,212,125,0.35)] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#ffde8f]"
        >
          <Link href="https://app.tradingwala.co.in/" className="flex items-center gap-3">
            <span>Join the Revolutions</span>
            <ArrowRight className="h-5 w-5" strokeWidth={2.6} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
