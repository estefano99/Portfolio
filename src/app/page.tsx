import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skill-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer-section"
import FloatingNavDemo from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FloatingNavDemo />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

