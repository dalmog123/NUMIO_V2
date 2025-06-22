import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProblemFocusSection from "@/components/ProblemFocusSection"
import ProductsSection from "@/components/ProductsSection"
import PlatformSection from "@/components/PlatformSection"
import MissionSection from "@/components/MissionSection"
import TeamSection from "@/components/TeamSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemFocusSection />
      <ProductsSection />
      <PlatformSection />
      <MissionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
