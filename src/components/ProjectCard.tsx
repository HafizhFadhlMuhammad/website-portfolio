import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/src/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-4">
      <div className="relative h-44 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-zinc-400">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-2 text-sm hover:bg-zinc-900"
        >
          <Github size={16} /> GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-2 text-sm hover:bg-zinc-900"
          >
            Live Demo <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}