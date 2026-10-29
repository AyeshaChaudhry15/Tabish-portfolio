import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group w-full overflow-hidden rounded-xl border border-[#E2EAF7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#3182FF]/50 hover:shadow-[0_20px_60px_rgba(49,130,255,0.12)]">
      <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#F0F6FF]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071630]/50 via-transparent to-transparent" />

        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#071630]/70 text-white backdrop-blur-md transition hover:border-[#60A5FA] hover:bg-[#3182FF]"
        >
          <FaArrowUpRightFromSquare className="text-[10px]" />
        </Link>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-semibold text-[#102951] transition group-hover:text-[#3182FF]">
          {project.title}
        </h3>

        <span className="mt-3 inline-flex rounded-md border border-[#3182FF]/25 bg-[#F0F6FF] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#3182FF]">
          {project.category}
        </span>

        <p className="mt-4 text-xs leading-5 text-slate-600">
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

        <div className="mt-5 border-t border-[#E2EAF7] pt-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#3182FF] transition hover:text-[#102951]"
          >
            View Live
            <FaArrowUpRightFromSquare className="text-[9px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}