import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {personalInfo.profile}
        </p>
      </div>
    </section>
  );
}
