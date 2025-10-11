"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, CheckCircle2, Quote, Trophy } from "lucide-react"

const payouts = [
  {
    title: "Flagship Alpha Desk",
    month: "September 2024",
    amount: "₹3.1L",
    change: "+12.6% MoM",
    descriptor: "Quant hedge portfolio",
  },
  {
    title: "Momentum Split Desk",
    month: "August 2024",
    amount: "₹2.9L",
    change: "+21.0% MoM",
    descriptor: "Multi-pair automation",
  },
  {
    title: "London Session Team",
    month: "July 2024",
    amount: "₹2.4L",
    change: "+18.4% MoM",
    descriptor: "Flagship strategy payout",
  },
]

const reviews = [
  {
    quote:
      "Tradingwala's quant stack executes exactly as promised. Zero deviation, zero hesitation — just clean automation.",
    name: "Rahul S.",
    role: "Ex-Prop Desk, Mumbai",
  },
  {
    quote: "Risk, capital, execution — all synced in real time. It finally feels like trading with an institutional desk behind me.",
    name: "Fatima A.",
    role: "London Session Lead",
  },
  {
    quote: "The risk systems keep my capital protected while still delivering the upside. It's the edge I've been hunting for.",
    name: "Ananya M.",
    role: "Full-time Forex Trader",
  },
]

const recognitions = [
  {
    title: "₹11.2L",
    subtitle: "Total funded payouts in Q3",
  },
  {
    title: "32 traders",
    subtitle: "Active inside the quant collective",
  },
  {
    title: "1.8 Sharpe",
    subtitle: "Trailing 90d risk-adjusted performance",
  },
]

export default function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const payoutRefs = useRef<(HTMLDivElement | null)[]>([])
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([])

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

    payoutRefs.current.forEach((card) => card && observer.observe(card))
    reviewRefs.current.forEach((card) => card && observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#030304] px-4 py-32 text-white md:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.12),_transparent_60%)]" />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#f6d47d]/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-[#6a66ff]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(10,10,10,0.85),_rgba(3,3,3,0.9))]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/60">
              Proof you can point to <ArrowUpRight className="h-4 w-4 text-[#f6d47d]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Capital, traders, and track records that impress even the skeptics.
            </h2>
            <p className="max-w-xl text-lg text-white/65">
              Every payout and testimonial is verified, timestamped, and pulled straight from the desks. Transparency is how we keep the collective tight — and elite.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {recognitions.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                style={{ animationDelay: `${index * 0.12 + 0.3}s` }}
              >
                <div className="absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#f6d47d]/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-3">
                  <Trophy className="h-5 w-5 text-[#f6d47d]" aria-hidden />
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/45">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            {payouts.map((payout, index) => (
              <div
                key={payout.title}
                ref={(el) => {
                  payoutRefs.current[index] = el
                }}
                className="opacity-0 relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(14,14,14,0.95),_rgba(35,26,5,0.65))] p-8 shadow-[0_40px_80px_rgba(246,212,125,0.12)]"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(246,212,125,0.2),_transparent_55%)] opacity-60" />
                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.45em] text-white/40">{payout.month}</p>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">{payout.title}</h3>
                    <p className="text-sm uppercase tracking-[0.45em] text-[#f6d47d]">{payout.descriptor}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3 text-right">
                    <p className="text-4xl font-semibold text-white sm:text-5xl">{payout.amount}</p>
                    <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                      <CheckCircle2 className="h-4 w-4" aria-hidden /> {payout.change}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/55">
                      <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/30">Trade {idx + 1}</p>
                      <div className="flex items-center justify-between text-white">
                        <span>{idx % 2 === 0 ? "GBPJPY" : "XAUUSD"}</span>
                        <span className="text-emerald-300">{idx % 2 === 0 ? "+1.6%" : "+2.1%"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[0.65rem] text-white/30">
                        <span className="inline-block h-1 w-1 rounded-full bg-[#f6d47d]" />
                        Risk {0.35 + idx * 0.1}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/35">Collective leader board</p>
                  <p className="text-lg text-white/70">Updated 6 hours ago</p>
                </div>
                <div className="rounded-full border border-[#f6d47d]/30 bg-[#f6d47d]/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#f6d47d]">
                  Live feed
                </div>
              </div>
              <div className="space-y-4">
                {reviews.slice(0, 2).map((review, index) => (
                  <div key={review.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-black/60 p-4">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/35">{review.role}</p>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                      +{4.6 - index * 0.7}% ROI
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  ref={(el) => {
                    reviewRefs.current[index] = el
                  }}
                  className="opacity-0 rounded-[28px] border border-white/10 bg-[linear-gradient(140deg,_rgba(6,6,6,0.95),_rgba(16,10,2,0.7))] p-8 backdrop-blur"
                  style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                >
                  <Quote className="mb-4 h-10 w-10 text-[#f6d47d]" aria-hidden />
                  <p className="text-lg leading-relaxed text-white/80">“{review.quote}”</p>
                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/35">
                    <span>
                      {review.name} • {review.role}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/50">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
