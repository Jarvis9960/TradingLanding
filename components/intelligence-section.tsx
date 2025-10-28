'use client'

import { useEffect, useRef, type CSSProperties } from "react"
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion"

import DataVisualization from "./data-visualization"

type MetricHighlight = {
  value: string
  title: string
  detail: string
  accent: string
}

const metricHighlights: MetricHighlight[] = [
  {
    value: "99.7%",
    title: "Signal Integrity",
    detail: "Cross-exchange reconciliation and synthetic fills keep models honest and sharp.",
    accent: "from-[#f8c660] via-[#fef3c7] to-[#f8c660]",
  },
  {
    value: "<50ms",
    title: "Execution Delay",
    detail: "Adaptive routing lives inside every venue to trim latency before it appears on tape.",
    accent: "from-[#67e9ff] via-[#c7f0ff] to-[#67e9ff]",
  },
  {
    value: "24/7",
    title: "Capital Watch",
    detail: "Sentinel desks handoff between regions to keep coverage continuous and calm.",
    accent: "from-[#a58bff] via-[#e5d9ff] to-[#a58bff]",
  },
  {
    value: "40+",
    title: "Venues Ingested",
    detail: "Liquidity and risk signals stitch together from cash, derivatives, and dark pools.",
    accent: "from-[#6fffd6] via-[#c9ffe9] to-[#6fffd6]",
  },
]

const accentFlares = [
  {
    top: "6%",
    left: "8%",
    size: "28rem",
    gradient: "from-[#60a5fa]/45 via-[#a5b4fc]/40 to-transparent",
  },
  {
    top: "68%",
    left: "72%",
    size: "30rem",
    gradient: "from-[#34d399]/40 via-transparent to-transparent",
  },
  {
    top: "36%",
    left: "42%",
    size: "24rem",
    gradient: "from-[#fbbf24]/35 via-transparent to-transparent",
  },
]

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function IntelligenceSection() {
  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimationControls()
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 })

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set("visible")
      return
    }

    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return

    const fallback = setTimeout(() => {
      controls.start("visible")
    }, 800)

    return () => clearTimeout(fallback)
  }, [controls, prefersReducedMotion])

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate={controls}
      className="relative z-10 overflow-hidden px-6 py-28 text-white md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#02040a]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#030510]/80 to-[#010208]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_60%)]" aria-hidden="true" />

      <div
        className="pointer-events-none absolute -left-44 top-16 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,_rgba(115,153,255,0.28)_0%,_rgba(2,4,10,0)_68%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-36 bottom-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,_rgba(109,255,227,0.24)_0%,_rgba(2,4,10,0)_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_30%,rgba(96,165,250,0.12),rgba(14,116,144,0.05),rgba(56,189,248,0.12),rgba(96,165,250,0.12))] opacity-80 blur-[140px] mix-blend-screen animate-aurora" />
        {accentFlares.map((flare, index) => (
          <motion.span
            key={`${flare.top}-${index}`}
            className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${flare.gradient} opacity-50 blur-3xl mix-blend-screen`}
            style={{ top: flare.top, left: flare.left, width: flare.size, height: flare.size } as CSSProperties}
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 0.98] }}
            transition={{ duration: 11 + index * 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute inset-x-0 top-[24%] flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-px w-4/5 max-w-5xl bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        </motion.div>
        <motion.div
          className="absolute inset-x-10 bottom-[12%] flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-16">
        <motion.div variants={headingVariants} className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-2 text-[0.7rem] uppercase tracking-[0.55em] text-white/60 shadow-[0_15px_45px_rgba(4,9,18,0.5)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse-glow" />
            Precision Stack
            <span className="hidden text-[0.65rem] tracking-[0.45em] text-white/35 sm:inline">Signal · Liquidity · Risk</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-[2.75rem] font-semibold leading-tight tracking-tight text-white md:text-[3rem]">
              Precision intelligence for fast markets
            </h2>
            <p className="text-base text-white/70 md:text-lg">
              A living intelligence fabric that listens to market structure, rewrites strategy paths, and harmonizes humans with
              automation before the tape shifts. Simple to scan, confident to act on.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-14">
          <motion.div variants={cardsContainer} className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {metricHighlights.map((metric, index) => (
                <motion.article
                  key={metric.title}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(4,9,18,0.5)] backdrop-blur-2xl transition-colors duration-500 ease-out hover:border-white/35 hover:shadow-[0_30px_70px_rgba(6,12,26,0.55)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition duration-500 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)` }} />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${metric.accent} opacity-[0.11] mix-blend-screen`} aria-hidden="true" />
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[28px] border border-white/5 opacity-0"
                    animate={{ opacity: [0, 0.35, 0] }}
                    transition={{ duration: 6 + index, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" }}
                  />
                  <div className="relative space-y-3 text-left">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-3xl font-semibold text-white sm:text-[2.6rem]">{metric.value}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/55">{metric.title}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70">{metric.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={headingVariants}
            className="relative w-full overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(4,9,18,0.55)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 animate-shimmer" aria-hidden="true" />
            <div className="pointer-events-none absolute -inset-px bg-gradient-to-r from-[#22d3ee]/25 via-transparent to-[#818cf8]/25 opacity-40 mix-blend-screen animate-gradient-flow" aria-hidden="true" />
            <div className="relative">
              <DataVisualization />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.section>
  )
}
