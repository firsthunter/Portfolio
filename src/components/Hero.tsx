import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {personalInfo.title}
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-full border border-blue-500 text-blue-500 px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
