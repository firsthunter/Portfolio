'use client';

import { personalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeHash, setActiveHash] = useState("");

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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                  activeHash === projectHash ? 'ring-2 ring-primary animate-pulse' : ''
                }`}
              >
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
                </div>
                <div className="space-y-2">
                  {project.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      • {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
