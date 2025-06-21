'use client';

import { personalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeHash, setActiveHash] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className="py-20 px-4" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.projects.map((project, index) => {
            const projectHash = `#${project.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <motion.div
                key={project.title}
                id={project.title.toLowerCase().replace(/\s+/g, '-')}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}                className={`bg-card rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden ${
                  activeHash === projectHash ? 'ring-2 ring-primary animate-pulse' : ''
                }`}
              >                {project.snapshot && (
                  <div 
                    className="relative h-48 w-full cursor-pointer group"
                    onClick={() => setSelectedImage(project.snapshot)}
                  >
                    <Image
                      src={project.snapshot}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-black/50 px-3 py-1 rounded">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <Link 
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block hover:text-primary transition-colors"
                    >
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </Link>
                    <Link
                      href={`#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      #
                    </Link>
                  </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>                <div className="space-y-2">
                  {project.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
            );          })}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Project screenshot enlarged"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                title="Close"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
