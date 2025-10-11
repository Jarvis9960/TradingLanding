import Hero from "@/components/hero"
import DramaticSection from "@/components/dramatic-section"
import DifferentiatorsSection from "@/components/differentiators-section"
import ProofSection from "@/components/proof-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Hero />
      <DifferentiatorsSection />
      <ProofSection />
      <DramaticSection />
      <Footer />
    </main>
  )
}
