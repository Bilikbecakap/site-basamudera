import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen paper-texture">
      <Header />
      <HeroSection />
<AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
