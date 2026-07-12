import { AboutSection } from './sections/AboutSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
