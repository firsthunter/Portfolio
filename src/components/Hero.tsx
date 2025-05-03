'use client';

import { personalInfo } from '@/data/personalInfo';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Hi, I&apos;m {personalInfo.name}
        </h1>
        <div className="h-[40px] sm:h-[48px]">
          <TypeAnimation
            sequence={[
              personalInfo.title,
              2000,
              'Problem Solver',
              2000,
              'Tech Innovator',
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            className="text-2xl sm:text-3xl text-muted-foreground"
            repeat={Infinity}
          />
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {'iOS Developer | Mobile Innovator '}
        </p>
        <motion.div className="flex gap-4 justify-center mt-8">
          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-xl transition-all"
          >
            GitHub
          </motion.a>
          <motion.a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:shadow-xl transition-all"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="absolute inset-0 bg-grid-white/20" />
      </motion.div>
    </div>
  )
}
