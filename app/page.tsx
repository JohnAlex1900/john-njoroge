import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { GitHubSection } from "@/components/sections/github"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  )
}
