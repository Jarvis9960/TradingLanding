"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, Quote } from "lucide-react"

const payouts = [
  {
    title: "July 2024",
    amount: "₹2.4L",
    description: "Flagship strategy payout",
    change: "+18.4% MoM",
  },
  {
    title: "August 2024",
    amount: "₹2.9L",
    description: "Multi-pair momentum desk",
    change: "+21.0% MoM",
  },
  {
    title: "September 2024",
    amount: "₹3.1L",
    description: "Quant hedge portfolio",
    change: "+12.6% MoM",
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
    quote:
      "The risk systems keep my capital protected while still delivering the upside. It's the edge I've been hunting for.",
    name: "Ananya M.",
    role: "Full-time Forex Trader",
  },
]

export default function ProofSection() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 1,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(12px)" },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 0.85,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  const listVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.16,
        },
      },
    }),
    [shouldReduceMotion],
  )

  return (
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={containerVariants}
      className="relative z-10 overflow-hidden py-32 px-4 md:px-8 bg-[#050505]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_60%)]"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_65%)]"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                opacity: [0.4, 0.55, 0.4],
                scale: [1, 1.04, 1],
              }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/4 -left-24 h-64 w-64 rounded-full bg-[#d4af37]/15 blur-3xl"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1.1, 0.95, 1.1],
              }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-72 w-72 translate-x-16 translate-y-16 rounded-full bg-[#d4af37]/10 blur-[120px]"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                y: [0, 25, 0],
                scale: [1, 1.08, 1],
              }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            variants={containerVariants}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Proof You Can Point To
          </motion.h2>
          <motion.p variants={containerVariants} className="text-lg md:text-xl text-gray-400">
            Real capital, real distributions, real traders. Here's a snapshot of the performance and the people behind it.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <motion.div
            className="space-y-6"
            variants={listVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {payouts.map((payout, payoutIndex) => (
              <motion.div
                key={payout.title}
                variants={cardVariants}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0b0b0b] via-[#111] to-[#050505] p-8 shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" aria-hidden />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">{payout.title}</p>
                      <h3 className="text-4xl font-bold text-white mt-2">{payout.amount}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                      <CheckCircle2 className="w-5 h-5" aria-hidden />
                      {payout.change}
                    </div>
                  </div>
                  <p className="text-gray-400">{payout.description}</p>
                  <div className="mt-4 flex items-end gap-1 h-20">
                    {Array.from({ length: 10 }).map((_, barIndex) => (
                      <span
                        key={barIndex}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#d4af37]/10 via-[#d4af37]/40 to-[#d4af37]/80"
                        style={{ height: `${45 + (barIndex % 5) * 8 + payoutIndex * 5}%` }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={listVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={cardVariants}
                className="glass rounded-3xl p-8 border border-white/5"
              >
                <Quote className="w-10 h-10 text-[#d4af37] mb-4" aria-hidden />
                <p className="text-lg text-gray-200 leading-relaxed">“{review.quote}”</p>
                <div className="mt-6 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                  {review.name} • {review.role}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent"
        aria-hidden
      />
    </motion.section>
  )
}
