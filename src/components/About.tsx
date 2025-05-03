'use client';

import { personalInfo } from '@/data/personalInfo';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {personalInfo.profile}
        </motion.p>
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <div className="flex items-center gap-2">
            <span className="font-medium">Email:</span>
            <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Phone:</span>
            <a href={`tel:${personalInfo.phone}`} className="text-primary hover:underline">
              {personalInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
