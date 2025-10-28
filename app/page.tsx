import Hero from "@/components/hero"
import IntelligenceSection from "@/components/intelligence-section"
import DifferentiatorsSection from "@/components/differentiators-section"
import ProofSection from "@/components/proof-section"
import DramaticSection from "@/components/dramatic-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <IntelligenceSection />
      <DifferentiatorsSection />
      <ProofSection />
      <DramaticSection />
      <Footer />
    </main>
  )
}
