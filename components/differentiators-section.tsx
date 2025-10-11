"use client"

import { useState, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { BarChart3, Zap, Shield, Globe } from "lucide-react"

const differentiators = [
  {
    icon: BarChart3,
    title: "100% Quantitative",
    description: "Pure data-driven decisions",
  },
  {
    icon: Zap,
    title: "Fully Automated Execution",
    description: "Zero human emotion",
  },
  {
    icon: Shield,
    title: "Risk-Managed",
    description: "Capital preservation first",
  },
  {
    icon: Globe,
    title: "Works Across Pairs",
    description: "Multi-currency capability",
  },
]

export default function DifferentiatorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
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

  const gridVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.12,
          delayChildren: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion],
  )

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeInOut",
        },
      },
    }),
    [shouldReduceMotion],
  )

  return (
    <section ref={sectionRef} className="relative z-10 py-32 px-4 md:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent opacity-40" aria-hidden />
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-20 text-center">
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      className="relative py-32 px-4 md:px-8 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#d4af37]/20 via-[#d4af37]/5 to-transparent"
        animate=
          {shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                filter: ["blur(20px)", "blur(30px)", "blur(20px)"],
                opacity: [0.35, 0.55, 0.35],
              }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-20 text-center"
          variants={sectionVariants}
        >
          Why We're <span className="text-[#d4af37]">Different</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={gridVariants}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass rounded-2xl p-8 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                style={{
                  transform: hoveredIndex === index ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 20px 60px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: hoveredIndex === index ? "scale(1.5) rotate(45deg)" : "scale(1) rotate(0deg)",
                    transition: "all 0.8s ease-out",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.3), transparent, rgba(212, 175, 55, 0.3))",
                    backgroundSize: "200% 200%",
                    animation: hoveredIndex === index ? "shimmer 2s linear infinite" : "none",
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all duration-500"
                      style={{
                        transform: hoveredIndex === index ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 text-[#d4af37] transition-all duration-500"
                        style={{
                          filter: hoveredIndex === index ? "drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))" : "none",
                        }}
                      />
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transition-all duration-300"
                    style={{
                      color: hoveredIndex === index ? "#d4af37" : "white",
                      textShadow: hoveredIndex === index ? "0 0 20px rgba(212, 175, 55, 0.5)" : "none",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {hoveredIndex === index && (
                  <>
                    <div className="absolute top-4 right-4 w-1 h-1 bg-[#d4af37] rounded-full animate-ping" />
                    <div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
