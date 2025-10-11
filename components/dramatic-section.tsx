"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

export default function DramaticSection() {
  const shouldReduceMotion = useReducedMotion()

  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 80, letterSpacing: "0.08em", filter: "blur(6px)" },
      visible: {
        opacity: 1,
        y: 0,
        letterSpacing: "0em",
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  const subheadingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 1,
          ease: "easeInOut",
          delay: shouldReduceMotion ? 0 : 0.2,
        },
      },
    }),
    [shouldReduceMotion],
  )

  return (
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative z-10 overflow-hidden py-40 px-4 md:px-8 bg-black"
    >
      {/* Dramatic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent"
        aria-hidden
      />
      {/* Dramatic background gradient */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/10 to-transparent"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                opacity: [0.45, 0.7, 0.45],
              }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-[120px]"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                y: [0, 60, 0],
                scale: [0.9, 1.05, 0.9],
              }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-16 left-1/5 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-[140px]"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                y: [0, -40, 0],
                x: [0, 25, 0],
              }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          variants={headingVariants}
          className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          Be the First.
          <br />
          <span className="text-[#d4af37]">Be the Few.</span>
        </motion.h2>

        <motion.div variants={subheadingVariants} className="relative inline-block">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            The future of trading is quantitative. The future is now.
          </p>
          {/* Glowing underline */}
          <motion.div
            aria-hidden
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
            animate=
              {shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.4, 1, 0.4],
                    scaleX: [0.8, 1, 0.8],
                  }}
            style={{ transformOrigin: "center" }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
    </motion.section>
  )
}
