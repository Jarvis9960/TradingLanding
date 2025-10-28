'use client'

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
]

const testimonials = [
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    review:
      "I've been trading for over five years, but I've never experienced something this refined. The quant strategy completely removes emotions and guesswork -- it feels like having a personal algorithmic fund working for you.",
  },
  {
    id: "sneha-iyer",
    name: "Sneha Iyer",
    review:
      "The elegance of this concept is unmatched. No charts, no stress -- just data-driven clarity. I've seen consistent performance month after month, and the team's transparency gives me full confidence.",
  },
  {
    id: "amit-deshmukh",
    name: "Amit Deshmukh",
    review:
      "I used to spend hours analyzing setups that rarely worked. After shifting to this quant-based model, my trading became structured and predictable. It's not hype -- it's pure logic beautifully executed.",
  },
]

function useCarouselIndex(api: CarouselApi | null) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setIndex(api.selectedScrollSnap())
    }

    handleSelect()
    api.on("select", handleSelect)
    api.on("reInit", handleSelect)

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  return index
}

function useCardStyle(total: number, activeIndex: number) {
  return useMemo(
    () =>
      (index: number) => {
        if (total <= 1) {
          return {
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
          }
        }

        const rawDistance = Math.abs(activeIndex - index)
        const loopDistance = total - rawDistance
        const distance = Math.min(rawDistance, loopDistance)

        const scale = distance === 0 ? 1 : distance === 1 ? 0.94 : 0.88
        const opacity = distance === 0 ? 1 : distance === 1 ? 0.65 : 0.45
        const y = distance === 0 ? 0 : distance === 1 ? 12 : 24
        const rotateX = distance === 0 ? 0 : distance === 1 ? -4 : -6
        const blur = distance > 1 ? 1.5 : distance === 1 ? 0.75 : 0

        return {
          scale,
          opacity,
          y,
          rotateX,
          filter: `blur(${blur}px)` as const,
        }
      },
    [activeIndex, total],
  )
}

export default function ProofSection() {
  const [payoutApi, setPayoutApi] = useState<CarouselApi | null>(null)
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi | null>(null)

  const payoutIndex = useCarouselIndex(payoutApi)
  const testimonialIndex = useCarouselIndex(testimonialApi)

  const payoutStyle = useCardStyle(payouts.length, payoutIndex)
  const testimonialStyle = useCardStyle(testimonials.length, testimonialIndex)

  return (
    <section className="relative z-10 overflow-hidden bg-[#040306] px-4 py-24 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.12),_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(112,72,255,0.14),_transparent_70%)]" />
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f6d47d]/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
            Proven // Desk Proof
          </span>
          <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Proof You Can Point To
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Live payout cadence stacked above verified trader voices.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative w-full"
          >
            <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-[#f6d47d]/10 blur-[90px] md:block" />
            <div className="relative flex h-full flex-col rounded-[36px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_45px_140px_rgba(5,3,18,0.45)] sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/60">Live payout stream</p>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    Capital releases across our quant desks
                  </h3>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6d47d]" />
                  Auto-sync
                </div>
              </div>

              <Carousel
                className="mt-10"
                opts={{ align: "center", loop: true, dragFree: true }}
                setApi={setPayoutApi}
              >
                <CarouselContent className="-ml-6 sm:-ml-8">
                  {payouts.map((payout, index) => (
                    <CarouselItem
                      key={payout.id}
                      className="basis-full pl-6 sm:basis-[70%] sm:pl-8 lg:basis-[55%]"
                    >
                      <motion.article
                        style={payoutStyle(index)}
                        whileHover={{ scale: 1.02, rotateX: 0, filter: "blur(0px)", opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="h-full rounded-[28px] border border-white/12 bg-gradient-to-br from-white/[0.13] via-white/[0.08] to-white/[0.03] p-6 shadow-[0_35px_110px_rgba(5,3,18,0.45)] backdrop-blur-xl"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                              {payout.cadence}
                            </p>
                            <p className="mt-3 text-3xl font-semibold text-[#f6d47d]">
                              {payout.amount}
                            </p>
                          </div>
                          <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                            {payout.delta}
                          </span>
                        </div>
                        <div className="mt-8 space-y-3 text-sm text-white/70">
                          <p className="text-lg font-semibold text-white">{payout.desk}</p>
                          <p>{payout.context}</p>
                        </div>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-auto bottom-4 size-10 border-white/20 bg-black/40 text-white/80 backdrop-blur md:left-6" />
                <CarouselNext className="right-4 top-auto bottom-4 size-10 border-white/20 bg-black/40 text-white/80 backdrop-blur md:right-6" />
              </Carousel>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative w-full"
          >
            <div className="pointer-events-none absolute -right-10 top-1/3 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-[#7048ff]/10 blur-[100px] md:block" />
            <div className="relative flex h-full flex-col rounded-[36px] border border-white/10 bg-[#06030f]/95 p-8 shadow-[0_50px_150px_rgba(4,3,14,0.5)] sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/60">Trader reviews</p>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Voices from the desk</h3>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#f6d47d]">
                  <Star className="h-4 w-4" fill="currentColor" stroke="none" />
                  <span>5.0 rating</span>
                </div>
              </div>

              <Carousel
                className="mt-10"
                opts={{ align: "center", loop: true, dragFree: true }}
                setApi={setTestimonialApi}
              >
                <CarouselContent className="-ml-6 sm:-ml-8">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="basis-full pl-6 sm:basis-[72%] sm:pl-8 lg:basis-[60%]"
                    >
                      <motion.article
                        style={testimonialStyle(index)}
                        whileHover={{ scale: 1.02, rotateX: 0, filter: "blur(0px)", opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="h-full rounded-[28px] border border-white/12 bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-transparent p-6 shadow-[0_38px_120px_rgba(4,3,14,0.4)] backdrop-blur-xl"
                      >
                        <div className="mb-5 flex items-center gap-2 text-[#f6d47d]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-4 w-4"
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                        </div>
                        <p className="text-base leading-relaxed text-white/80">"{testimonial.review}"</p>
                        <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                          <span>{testimonial.name}</span>
                          <span>Verified quant desk</span>
                        </div>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-auto bottom-4 size-10 border-white/20 bg-white/10 text-white/80 backdrop-blur md:left-6" />
                <CarouselNext className="right-4 top-auto bottom-4 size-10 border-white/20 bg-white/10 text-white/80 backdrop-blur md:right-6" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
