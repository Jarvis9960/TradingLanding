import { Star } from "lucide-react"

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

export default function ProofSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#040306] px-4 py-28 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,212,125,0.12),_transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(112,72,255,0.14),_transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/70">
            Proven // Desk Proof
          </span>
          <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">Proof You Can Point To</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Live payout cadence stacked above verified trader voices.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_38px_120px_rgba(5,3,18,0.4)] sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-white/60">Live payout stream</p>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Capital releases across our quant desks</h3>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6d47d]" />
                Auto-sync
              </div>
            </div>
            <ul className="space-y-6">
              {payouts.map((payout) => (
                <li
                  key={payout.id}
                  className="rounded-[24px] border border-white/12 bg-white/[0.12] p-6 shadow-[0_30px_95px_rgba(5,3,18,0.35)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{payout.cadence}</p>
                      <p className="mt-3 text-3xl font-semibold text-[#f6d47d]">{payout.amount}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                      {payout.delta}
                    </span>
                  </div>
                  <div className="mt-6 space-y-2 text-sm text-white/70">
                    <p className="text-lg font-semibold text-white">{payout.desk}</p>
                    <p>{payout.context}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#06030f]/90 p-8 shadow-[0_40px_130px_rgba(4,3,14,0.4)] sm:p-12">
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
            <ul className="space-y-6">
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="rounded-[24px] border border-white/12 bg-white/[0.05] p-6 shadow-[0_32px_100px_rgba(4,3,14,0.3)]"
                >
                  <div className="mb-4 flex items-center gap-2 text-[#f6d47d]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4" fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-white/80">"{testimonial.review}"</p>
                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                    <span>{testimonial.name}</span>
                    <span>Verified quant desk</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
