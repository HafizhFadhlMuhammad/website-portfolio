import { projects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsAll() {
  return (
    <section id="all-projects" className="mt-24">
      <h2 className="text-3xl font-semibold">All Projects</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}