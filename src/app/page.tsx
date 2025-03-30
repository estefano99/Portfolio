import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
// import EducationSection from "@/components/education-section"
// import SkillsSection from "@/components/skills-section"
// import ContactSection from "@/components/contact-section"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <EducationSection /> */}
      {/* <SkillsSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </main>
  )
}

