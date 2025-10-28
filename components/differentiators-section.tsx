"use client"

import { motion } from "framer-motion"
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

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: custom * 0.1,
    },
  }),
}

export default function DifferentiatorsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#030303] px-4 py-28 text-white md:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent opacity-40" aria-hidden />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(212,175,55,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(212,175,55,0.1)_0%,rgba(10,10,10,0.6)_40%,rgba(10,10,10,0.95)_100%)] opacity-60" />
        <div className="animate-orbit absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="animate-orbit-slow absolute -bottom-20 left-[-4rem] h-80 w-80 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:60px_60px] opacity-10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#d4af37]/90 backdrop-blur-sm"
        >
          Precision Engineered Edge
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          Why We&apos;re <span className="bg-gradient-to-r from-[#d4af37] via-[#f7d774] to-[#d4af37] bg-clip-text text-transparent">Different</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl text-base text-gray-400 sm:text-lg"
        >
          Proprietary infrastructure crafted to perform in any market climate—with responsive automation, vigilant risk oversight, and a global-first mindset.
        </motion.p>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                custom={index}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 text-left shadow-[0_25px_60px_rgba(212,175,55,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-[0_35px_80px_rgba(212,175,55,0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-300 group-hover:border-[#d4af37]/40" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_60%)]" />
                </div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/15 backdrop-blur">
                    <Icon className="h-8 w-8 text-[#f5d47a] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white lg:text-2xl">{item.title}</h3>
                  <p className="text-sm text-gray-400 sm:text-base">{item.description}</p>
                </div>
                <div className="pointer-events-none absolute -bottom-6 right-0 h-20 w-20 translate-x-6 rounded-full bg-[#d4af37]/20 blur-2xl transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-80" />
                <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
