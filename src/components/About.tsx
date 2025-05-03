import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/40 to-purple-50/80 
        dark:from-gray-900/80 dark:via-gray-900/40 dark:to-blue-900/80 animate-gradient"></div>
      <div className="max-w-4xl mx-auto px-8 relative">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r 
          from-blue-500 to-purple-500 animate-gradient">About Me</h2>
        <div className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-2xl 
          border border-white/20 dark:border-white/10 shadow-xl transition-all duration-300
          hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed animate-fadeIn">
            {personalInfo.profile}
          </p>
        </div>
      </div>
    </section>
  );
}
