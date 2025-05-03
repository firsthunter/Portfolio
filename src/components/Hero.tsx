import { personalInfo } from '../data/personalInfo';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-4xl relative animate-fadeIn backdrop-blur-sm bg-white/10 dark:bg-black/10 p-12 rounded-2xl border border-white/20">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 relative">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient animate-glow">
            {personalInfo.name}
          </span>
          <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full border-4 border-blue-500 animate-spin-slow opacity-20"></div>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slideUp relative">
          {personalInfo.title}
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-shine"></span>
        </p>
        <div className="flex gap-4 animate-slideUp animation-delay-200">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#projects"
            className="rounded-full border-2 border-blue-500 text-blue-500 px-8 py-4 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
