import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPreview() {
  const preview = projects.slice(0, 2);

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200"
        >
          More <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {preview.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}