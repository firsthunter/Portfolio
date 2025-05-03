"use client"

import { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import { ProjectModal } from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/40 to-pink-50/80 
        dark:from-gray-900/80 dark:via-gray-900/40 dark:to-purple-900/80 animate-gradient"></div>
      <div className="max-w-4xl mx-auto px-8 relative">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r 
          from-purple-500 to-pink-500 animate-gradient">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalInfo.projects.map((project, index) => (
            <div 
              key={project.title} 
              className="group backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-xl 
                border border-white/20 dark:border-white/10 overflow-hidden shadow-lg 
                hover:shadow-2xl cursor-pointer transition-all duration-500 
                hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                  from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
