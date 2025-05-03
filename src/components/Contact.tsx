'use client';

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";

export default function Contact() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels:
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <span>📧</span>
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <span>📱</span>
                {personalInfo.phone}
              </a>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-md border bg-background"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md border bg-background"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 rounded-md border bg-background"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-primary text-primary-foreground rounded-md"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}