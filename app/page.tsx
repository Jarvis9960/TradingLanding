import Hero from "@/components/hero"
import IntelligenceSection from "@/components/intelligence-section"
import DifferentiatorsSection from "@/components/differentiators-section"
import ExclusivitySection from "@/components/exclusivity-section"
import ProofSection from "@/components/proof-section"
import LuxurySection from "@/components/luxury-section"
import DramaticSection from "@/components/dramatic-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Hero />
      <IntelligenceSection />
      <DifferentiatorsSection />
      <ExclusivitySection />
      <ProofSection />
      <LuxurySection />
      <DramaticSection />
      <Footer />
    </main>
  )
}
