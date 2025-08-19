import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h3 className="section-title">Projects</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}