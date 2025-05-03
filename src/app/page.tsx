import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
