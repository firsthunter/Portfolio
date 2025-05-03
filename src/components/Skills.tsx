import { personalInfo } from '../data/personalInfo';

export default function Skills() {
  const skills = personalInfo.skills;
  
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
