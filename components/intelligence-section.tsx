"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import DataVisualization from "./data-visualization"

type IntelCard = {
  value: string
  label: string
  description: string
  accent: string
  gradient: string
}

export default function IntelligenceSection() {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.9,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  const contentVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  const vizVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 60, scale: 0.92, filter: "blur(12px)" },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 1,
          ease: "easeInOut",
          delay: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion],
  )

  const floatingAnimation = shouldReduceMotion
    ? undefined
    : {
        y: [0, 50, 0],
        scale: [0.9, 1.05, 0.9],
      }

  const floatingAnimationSecondary = shouldReduceMotion
    ? undefined
    : {
        y: [0, -40, 0],
        x: [0, 30, 0],
      }

  const intelCards: IntelCard[] = [
    {
      value: "99.7%",
      label: "Signal Accuracy",
      description: "Proven live + historical execution edge.",
      accent: "#f6d47d",
      gradient: "from-[#f6d47d]/35 via-transparent to-transparent",
    },
    {
      value: "50ms",
      label: "Execution Speed",
      description: "Colocation + automation, human-proofed.",
      accent: "#ffd166",
      gradient: "from-[#ffd166]/30 via-transparent to-transparent",
    },
    {
      value: "24/7",
      label: "Capital Watch",
      description: "Sentinel desk monitoring every session.",
      accent: "#60efff",
      gradient: "from-[#60efff]/30 via-transparent to-transparent",
    },
  ]

  return (
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      className="relative z-10 overflow-hidden py-20 px-4 md:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#050505]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent"
        aria-hidden
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-16 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-[140px]"
        animate={floatingAnimation}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[120px]"
        animate={floatingAnimationSecondary}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div variants={contentVariants} className="space-y-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.45em] text-white/60">
                Intelligence Stack
              </span>
              <span className="text-sm text-white/40">Signal · Liquidity · Risk</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {intelCards.map((card) => (
                <motion.div
                  key={card.label}
                  className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-br from-black/75 via-black/60 to-black/35 p-6 shadow-[0_18px_80px_rgba(3,3,12,0.55)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/16 hover:shadow-[0_28px_90px_rgba(6,6,18,0.65)]"
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`} aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70" />

                  <div className="relative space-y-4">
                    <span className="block text-4xl font-semibold text-white md:text-5xl">{card.value}</span>
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: card.accent }}>
                      {card.label.toUpperCase()}
                    </span>
                    <p className="text-sm text-white/60">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={vizVariants}>
            <DataVisualization />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
    </motion.section>
  )
}
