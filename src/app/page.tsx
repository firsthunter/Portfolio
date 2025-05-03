import { SectionsDrawer } from "@/components/SectionsDrawer"
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
      <SectionsDrawer />
      <ScrollArea className="h-screen w-full">
        <div className="min-h-screen bg-background transition-colors duration-300">
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>
        </div>
      </ScrollArea>
    </main>
  )
}
