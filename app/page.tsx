import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SOCPipeline } from '@/components/soc-pipeline'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsMatrix } from '@/components/skills-matrix'
import { SocSection } from '@/components/soc-section'
import { CtiSection } from '@/components/cti-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Hero />
      <SOCPipeline />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsMatrix />
      <SocSection />
      <CtiSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
