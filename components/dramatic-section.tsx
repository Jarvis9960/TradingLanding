"use client"

import { useEffect, useRef } from "react"

export default function DramaticSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (headlineRef.current) observer.observe(headlineRef.current)
    if (subheadlineRef.current) observer.observe(subheadlineRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden py-40 px-4 md:px-8 bg-black">
      {/* Dramatic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          ref={headlineRef}
          className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold mb-8 leading-tight opacity-0"
        >
          Be the First.
          <br />
          <span className="text-[#d4af37]">Be the Few.</span>
        </h2>

        <div ref={subheadlineRef} className="relative inline-block opacity-0" style={{ animationDelay: "0.4s" }}>
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            The future of trading is quantitative. The future is now.
          </p>
          {/* Glowing underline */}
          <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-glow" />
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
    </section>
  )
}
