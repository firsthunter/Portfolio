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
        <div className="min-h-screen bg-background transition-all duration-500 ease-in-out">
          <div id="hero" className="min-h-screen"><Hero /></div>
          <div id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"><About /></div>
          <div id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"><Skills /></div>
          <div id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"><Projects /></div>
          <div id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"><Contact /></div>
        </div>
      </ScrollArea>
    </main>
  )
}
