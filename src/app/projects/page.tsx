import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-3 text-zinc-400">All projects I’ve built and shipped.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
