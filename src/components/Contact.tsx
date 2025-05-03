import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I'm always open to new opportunities and interesting projects.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="rounded-full bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition-colors"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
