import type { Project } from "@/lib/queries";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const targetHref =
    project.live_url ?? project.github_url ?? `/projects#project-${project.id}`;

  return (
    <a
      href={targetHref}
      target={targetHref.startsWith("http") ? "_blank" : undefined}
      rel={targetHref.startsWith("http") ? "noreferrer" : undefined}
      className={`bento-tile block ${featured ? "md:col-span-4" : "md:col-span-2"}`}
    >
      <article id={`project-${project.id}`}>
        <h3 className="section-title text-2xl md:text-3xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          {project.tech_stack}
        </p>
      </article>
    </a>
  );
}
