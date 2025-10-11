"use client"

import { useEffect, useRef } from "react"

export default function ExclusivitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-blur-to-sharp")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 overflow-hidden py-40 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
      {/* Cinematic spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden />

      <div ref={contentRef} className="max-w-4xl mx-auto text-center opacity-0">
        <h2 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-bold mb-8 leading-tight">
          Exclusivity
          <br />
          <span className="text-[#d4af37]">Redefined</span>
        </h2>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12" />

        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Limited access. Unlimited potential. Join an elite circle of traders who demand excellence and receive nothing
          less.
        </p>
      </div>

      {/* Decorative divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
    </section>
  )
}
