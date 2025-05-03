'use client';

import { motion } from "framer-motion";

const skillCategories = {
  mobile: ['Swift', 'Flutter', 'Kotlin'],
  backend: ['Nestjs', 'Laravel', 'MongoDB'],
  ai: ['AI & Machine Learning', 'Core ML', 'TensorFlow/PyTorch'],
  other: ['Git/GITHUB', 'Next.js', 'Tailwind CSS']
};

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category}
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="h-2 w-2 bg-primary rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
