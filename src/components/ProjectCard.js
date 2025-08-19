import { Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="card p-5 flex flex-col gap-3">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-md border border-slate-700/40"
      />
      <h4 className="text-slate-100 font-semibold">{project.title}</h4>
      <p className="text-sm text-slate-300">{project.description}</p>

      {project.stack?.length ? (
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      ) : null}

      <div className="mt-1 flex items-center gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <Github className="h-4 w-4" /> <span>Code</span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <span>Demo →</span>
          </a>
        )}
      </div>
    </article>
  );
}