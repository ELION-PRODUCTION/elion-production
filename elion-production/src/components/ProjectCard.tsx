import type { ProjectEntry } from "@/projects/slate";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <article className="card">
      <p className="card__label">
        {project.year} · {project.type}
      </p>
      <h3>{project.title}</h3>
      <p>{project.logline}</p>
      <p>
        <strong>Status:</strong> {project.status}
      </p>
      <p>
        <strong>Technology Role:</strong> {project.technologyRole}
      </p>
    </article>
  );
}
