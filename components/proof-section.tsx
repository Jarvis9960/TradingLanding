"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const payouts = [
  {
    id: "payout-01",
    amount: "₹4.8L",
    cadence: "Weekly cycle",
    desk: "Adaptive London Breakout",
    delta: "+51.7% NAV",
    context: "Staggered volatility filters routing flow across the GBP basket.",
  },
  {
    id: "payout-02",
    amount: "₹6.1L",
    cadence: "Fortnight release",
    desk: "Mean Reversion Stack",
    delta: "+61.2% NAV",
    context: "CME micro futures hedges wrapping high conviction momentum legs.",
  },
  {
    id: "payout-03",
    amount: "₹3.6L",
    cadence: "Weekly cycle",
    desk: "Asia Session Arbitrage",
    delta: "+57.8% NAV",
    context: "Latency arbitrage on INR crosses with adaptive liquidity splits.",
  },
  {
    id: "payout-04",
    amount: "₹7.4L",
    cadence: "Monthly settlement",
    desk: "Event Driven Macro",
    delta: "+53.5% NAV",
    context: "Catalyst plays wrapped in delta neutral hedging overlays.",
  },
  {
    id: "payout-05",
    amount: "₹5.2L",
    cadence: "Weekly cycle",
    desk: "Quant Momentum Mesh",
    delta: "+58.9% NAV",
    context: "Signal mesh blending order flow momentum with volume profiling.",
  },
]

const testimonials = [
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    review:
      "I've been trading for over five years, but I've never experienced something this refined. The quant strategy completely removes emotions and guesswork -- it feels like having a personal algorithmic fund working for you. Finally, a professional-grade system available to Indian traders.",
  },
  {
    id: "sneha-iyer",
    name: "Sneha Iyer",
    review:
      "The elegance of this concept is unmatched. No charts, no stress -- just data-driven clarity. I've seen consistent performance month after month, and the team's transparency gives me full confidence. This is the future of trading in India.",
  },
  {
    id: "amit-deshmukh",
    name: "Amit Deshmukh",
    review:
      "I used to spend hours analyzing setups that rarely worked. After shifting to this quant-based model, my trading became structured and predictable. It's not hype -- it's pure logic beautifully executed.",
  },
  {
    id: "vikram-sethi",
    name: "Vikram Sethi",
    review:
      "This feels like stepping into institutional territory. The quant models are on another level -- smooth, consistent, and well thought out. The professionalism of the team behind this system is commendable. Absolutely revolutionary.",
  },
  {
    id: "karan-arora",
    name: "Karan Arora",
    review:
      "Finally, a strategy that combines intelligence with results. I've stopped looking at charts completely and still make consistent returns. It's simple, elegant, and powerful -- exactly what trading was meant to be.",
  },
]

const LEFT_ORB_ANIMATION = {
  y: [0, -28, 0],
  x: [0, 18, 0],
  scale: [1, 1.06, 1],
}

const LEFT_ORB_TRANSITION = { duration: 20, repeat: Infinity, ease: "easeInOut" }

const RIGHT_ORB_ANIMATION = {
  y: [0, 24, 0],
  scale: [1.05, 0.95, 1.05],
}

const RIGHT_ORB_TRANSITION = { duration: 24, repeat: Infinity, ease: "easeInOut" }

export default function ProofSection() {
  const shouldReduceMotion = useReducedMotion()
  const [payoutEmblaRef, payoutEmblaApi] = useEmblaCarousel({ align: "center", loop: false })
  const [reviewEmblaRef, reviewEmblaApi] = useEmblaCarousel({ align: "center", loop: false })
  const [payoutIndex, setPayoutIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    if (!payoutEmblaApi) {
      return
    }

    const onSelect = () => setPayoutIndex(payoutEmblaApi.selectedScrollSnap())
    onSelect()
    payoutEmblaApi.on("select", onSelect)

    if (shouldReduceMotion) {
      return () => {
        const removable = payoutEmblaApi as unknown as { off?: (event: string, handler: () => void) => void }
        removable.off?.("select", onSelect)
      }
    }

    const rootNode = payoutEmblaApi.rootNode()
    let hoverLock = false

    const handleMouseEnter = () => {
      hoverLock = true
    }
    const handleMouseLeave = () => {
      hoverLock = false
    }

    rootNode.addEventListener("mouseenter", handleMouseEnter)
    rootNode.addEventListener("mouseleave", handleMouseLeave)

    const intervalId = window.setInterval(() => {
      if (!hoverLock && payoutEmblaApi.canScrollNext()) {
        payoutEmblaApi.scrollNext()
      }
    }, 3400)

    return () => {
      window.clearInterval(intervalId)
      rootNode.removeEventListener("mouseenter", handleMouseEnter)
      rootNode.removeEventListener("mouseleave", handleMouseLeave)
      const removable = payoutEmblaApi as unknown as { off?: (event: string, handler: () => void) => void }
      removable.off?.("select", onSelect)
    }
  }, [payoutEmblaApi, shouldReduceMotion])

  useEffect(() => {
    if (!reviewEmblaApi) {
      return
    }

    const onSelect = () => setReviewIndex(reviewEmblaApi.selectedScrollSnap())
    onSelect()
    reviewEmblaApi.on("select", onSelect)

    if (shouldReduceMotion) {
      return () => {
        const removable = reviewEmblaApi as unknown as { off?: (event: string, handler: () => void) => void }
        removable.off?.("select", onSelect)
      }
    }

    const rootNode = reviewEmblaApi.rootNode()
    let hoverLock = false

    const handleMouseEnter = () => {
      hoverLock = true
    }
    const handleMouseLeave = () => {
      hoverLock = false
    }

    rootNode.addEventListener("mouseenter", handleMouseEnter)
    rootNode.addEventListener("mouseleave", handleMouseLeave)

    const intervalId = window.setInterval(() => {
      if (!hoverLock && reviewEmblaApi.canScrollNext()) {
        reviewEmblaApi.scrollNext()
      }
    }, 4200)

    return () => {
      window.clearInterval(intervalId)
      rootNode.removeEventListener("mouseenter", handleMouseEnter)
      rootNode.removeEventListener("mouseleave", handleMouseLeave)
      const removable = reviewEmblaApi as unknown as { off?: (event: string, handler: () => void) => void }
      removable.off?.("select", onSelect)
    }
  }, [reviewEmblaApi, shouldReduceMotion])

  const payoutCarousel = useMemo(
    () => (
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_38px_120px_rgba(5,3,18,0.68)] backdrop-blur-2xl sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.18),_transparent_70%)] opacity-80" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#040306] via-[#040306]/75 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#040306] via-[#040306]/75 to-transparent" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">Live payout stream</p>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Capital releases across our quant desks</h3>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 shadow-[0_16px_42px_rgba(5,3,18,0.55)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f6d47d] shadow-[0_0_16px_rgba(246,212,125,0.8)]" />
            Auto-sync
          </div>
        </div>
        <div className="relative z-10 mt-10">
          <div ref={payoutEmblaRef} className="overflow-hidden">
            <div className="flex gap-8">
              {payouts.map((payout, index) => {
                const isActive = payoutIndex === index
                return (
                  <motion.article
                    key={payout.id}
                    className="group relative flex min-h-[260px] flex-[0_0_88%] flex-col justify-between overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.12] p-8 text-left text-white shadow-[0_30px_95px_rgba(5,3,18,0.55)] backdrop-blur-xl transition-all duration-500 will-change-transform sm:flex-[0_0_70%] lg:flex-[0_0_45%]"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: isActive ? 1 : 0.55,
                            scale: isActive ? 1 : 0.92,
                            translateY: isActive ? 0 : 18,
                          }
                    }
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotateX: -4, rotateY: 4 }}
                    transition={{ type: "spring", stiffness: 220, damping: 28 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.28),_transparent_72%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(10,5,24,0.85))]" />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-white/60">{payout.cadence}</p>
                        <p className="mt-4 text-3xl font-semibold text-[#f6d47d]">{payout.amount}</p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                        {payout.delta}
                      </span>
                    </div>
                    <div className="relative z-10 mt-7 space-y-4">
                      <p className="text-lg font-semibold text-white">{payout.desk}</p>
                      <p className="text-sm text-white/70">{payout.context}</p>
                    </div>
                    <div className="relative z-10 mt-8 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                      <span>Desk ready</span>
                      <span className="flex items-center gap-2 text-white/70">
                        <span className="h-2 w-2 rounded-full bg-[#f6d47d] shadow-[0_0_12px_rgba(246,212,125,0.9)]" />
                        Streaming
                      </span>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {payouts.map((payout, index) => (
              <span
                key={payout.id}
                className={`h-[3px] flex-1 rounded-full bg-white/20 transition-all duration-500 ${payoutIndex === index ? "bg-[#f6d47d]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    [payoutEmblaRef, payoutIndex, shouldReduceMotion],
  )

  const reviewCarousel = useMemo(
    () => (
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#06030f]/90 p-8 shadow-[0_40px_130px_rgba(4,3,14,0.72)] backdrop-blur-2xl sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(112,72,255,0.2),_transparent_72%)] opacity-80" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#040306] via-[#040306]/75 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#040306] via-[#040306]/75 to-transparent" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">Trader reviews</p>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Voices from the desk every cycle</h3>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#f6d47d] shadow-[0_14px_48px_rgba(5,3,18,0.45)]">
            <Star className="h-4 w-4" fill="currentColor" stroke="none" />
            <span>5.0 rating</span>
          </div>
        </div>
        <div className="relative z-10 mt-10">
          <div ref={reviewEmblaRef} className="overflow-hidden">
            <div className="flex gap-8 pb-2">
              {testimonials.map((testimonial, index) => {
                const isActive = reviewIndex === index
                return (
                  <motion.article
                    key={testimonial.id}
                    className="group relative flex min-h-[280px] flex-[0_0_92%] flex-col justify-between overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.05] p-8 text-left text-white shadow-[0_32px_100px_rgba(4,3,14,0.62)] backdrop-blur-xl transition-all duration-500 will-change-transform sm:flex-[0_0_72%] lg:flex-[0_0_46%]"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: isActive ? 1 : 0.56,
                            scale: isActive ? 1 : 0.94,
                            translateY: isActive ? 0 : 18,
                          }
                    }
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.04, translateY: -12 }}
                    transition={{ type: "spring", stiffness: 210, damping: 30 }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(112,72,255,0.26),_transparent_78%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.09),rgba(6,3,18,0.82))]" />
                    </div>
                    <div className="relative z-10 space-y-5">
                      <div className="flex items-center gap-2 text-[#f6d47d]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4" fill="currentColor" stroke="none" />
                        ))}
                      </div>
                      <p className="text-base leading-relaxed text-white/80">"{testimonial.review}"</p>
                    </div>
                    <div className="relative z-10 mt-8 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                      <span>{testimonial.name}</span>
                      <span>Verified quant desk</span>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <span
                key={testimonial.id}
                className={`h-[3px] flex-1 rounded-full bg-white/15 transition-all duration-500 ${reviewIndex === index ? "bg-[#7048ff]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    [reviewEmblaRef, reviewIndex, shouldReduceMotion],
  )

  const containerVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }

  return (
    <motion.section
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      className="relative z-10 overflow-hidden bg-[#040306] px-4 py-28 text-white md:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.12),_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(112,72,255,0.14),_transparent_70%)]" />
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#f6d47d]/18 blur-[140px]"
          animate={shouldReduceMotion ? undefined : LEFT_ORB_ANIMATION}
          transition={LEFT_ORB_TRANSITION}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-18%] top-1/4 h-80 w-80 rounded-full bg-[#7048ff]/20 blur-[150px]"
          animate={shouldReduceMotion ? undefined : RIGHT_ORB_ANIMATION}
          transition={RIGHT_ORB_TRANSITION}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
            Proven // Desk Proof
          </span>
          <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Proof You Can Point To
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Live payout cadence stacked above verified trader voices. Scroll or let the desk showcase itself.
          </p>
        </div>

        <div className="relative flex flex-col gap-16">
          {payoutCarousel}
          {reviewCarousel}
        </div>
      </div>
    </motion.section>
  )
}
