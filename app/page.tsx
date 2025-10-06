import Hero from "@/components/hero"
import IntelligenceSection from "@/components/intelligence-section"
import LuxurySection from "@/components/luxury-section"
import ExclusivitySection from "@/components/exclusivity-section"
import DramaticSection from "@/components/dramatic-section"
import DifferentiatorsSection from "@/components/differentiators-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Hero />
      <IntelligenceSection />
      <LuxurySection />
      <ExclusivitySection />
      <DramaticSection />
      <DifferentiatorsSection />
      <Footer />
    </main>
  )
}
