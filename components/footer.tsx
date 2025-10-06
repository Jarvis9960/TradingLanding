"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Linkedin, Mail, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0d0d0d]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-shimmer" />

      <div className="relative z-10">
        <div className="text-center py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-sm text-[#d4af37]">
                <TrendingUp className="w-4 h-4" />
                <span>Limited Access Available</span>
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
                Ready to Transform Your Trading?
              </h3>

              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the elite circle of quantitative traders. Experience precision, automation, and consistent returns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-white placeholder:text-gray-500"
                />
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#c4a137] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-glow group whitespace-nowrap"
                >
                  Join the Revolution
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-xs text-gray-500">No credit card required. Start your journey today.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
          {/* Main footer grid */}
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#c4a137] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold">tradingwala</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                India's first quantitative forex trading platform. Precision-driven, fully automated, and built for the
                future of trading.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {[Twitter, Linkedin, Mail].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full glass hover:glass-strong hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#d4af37] transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Performance", "API"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 hover:text-[#d4af37] transition-colors cursor-pointer text-sm group flex items-center gap-2">
                      <span className="w-0 group-hover:w-4 h-px bg-[#d4af37] transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {["About", "Team", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 hover:text-[#d4af37] transition-colors cursor-pointer text-sm group flex items-center gap-2">
                      <span className="w-0 group-hover:w-4 h-px bg-[#d4af37] transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                {["Documentation", "Blog", "Support", "Legal"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 hover:text-[#d4af37] transition-colors cursor-pointer text-sm group flex items-center gap-2">
                      <span className="w-0 group-hover:w-4 h-px bg-[#d4af37] transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © 2025 <span className="text-[#d4af37]">tradingwala</span>. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6 text-xs text-gray-500">
                <a className="hover:text-[#d4af37] transition-colors cursor-pointer">Privacy Policy</a>
                <a className="hover:text-[#d4af37] transition-colors cursor-pointer">Terms of Service</a>
                <a className="hover:text-[#d4af37] transition-colors cursor-pointer">Risk Disclaimer</a>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4 text-center md:text-left">
              Trading involves risk. Past performance does not guarantee future results. Please trade responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
