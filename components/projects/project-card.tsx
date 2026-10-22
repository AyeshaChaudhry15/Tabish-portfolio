import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group w-full overflow-hidden rounded-xl border border-slate-800 bg-[#070D18] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
      <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#0B1424]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/70 via-transparent to-transparent" />

        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/20"
        >
          <FaArrowUpRightFromSquare className="text-[10px]" />
        </Link>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-semibold text-white transition group-hover:text-blue-300">
          {project.title}
        </h3>

        <span className="mt-3 inline-flex rounded-md border border-blue-500/30 bg-blue-500/5 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-blue-400">
          {project.category}
        </span>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-800 pt-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View Live
            <FaArrowUpRightFromSquare className="text-[9px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}