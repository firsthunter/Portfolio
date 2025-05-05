import { personalInfo } from "@/data/personalInfo";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = personalInfo.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        {project.details.map((detail, i) => (
          <p key={i} className="text-muted-foreground">• {detail}</p>
        ))}
      </div>
    </div>
  );
}
