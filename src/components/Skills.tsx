import { personalInfo } from '../data/personalInfo';

export default function Skills() {
  const skills = personalInfo.skills;
  
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white/40 to-blue-50/80 
        dark:from-gray-900/80 dark:via-gray-900/40 dark:to-blue-900/80 animate-gradient"></div>
      <div className="max-w-4xl mx-auto px-8 relative">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r 
          from-pink-500 to-blue-500 animate-gradient">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill} 
              className="group backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-xl 
                border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl 
                transform hover:-translate-y-2 transition-all duration-300 animate-float"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationDuration: `${3 + index * 0.1}s`
              }}
            >
              <span className="font-medium text-gray-800 dark:text-white group-hover:text-transparent 
                group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                group-hover:from-pink-500 group-hover:to-blue-500 transition-all duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
