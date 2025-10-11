"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import DataVisualization from "./data-visualization"

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

  return (
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      className="relative z-10 overflow-hidden py-32 px-4 md:px-8"
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
          <motion.div variants={contentVariants} className="space-y-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight md:text-6xl">
              Where Intelligence
              <br />
              <span className="text-[#d4af37]">Meets Opportunity</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
              Harness the power of quantitative analysis and algorithmic precision to navigate the forex markets with
              unparalleled confidence.
            </p>
            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
              Our proprietary systems analyze millions of data points in real-time, identifying opportunities invisible
              to the human eye.
            </p>
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
