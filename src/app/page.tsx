import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollArea } from "@/components/ui/scroll-area"
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <ScrollArea className="h-screen w-full">
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ScrollArea>
    </main>
  )
}
