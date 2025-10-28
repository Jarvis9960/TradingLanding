export default function DramaticSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-black px-4 py-40 text-white md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-6xl font-bold leading-tight md:text-8xl">
          Be the First.
          <br />
          <span className="text-[#d4af37]">Be the Few.</span>
        </h2>
        <p className="mt-10 text-2xl text-gray-300 md:text-3xl">
          The future of trading is quantitative. The future is now.
        </p>
        <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      </div>
    </section>
  )
}
