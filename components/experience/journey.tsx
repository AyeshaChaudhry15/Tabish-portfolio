"use client";

import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaCode,
  FaLocationDot,
  FaCalendarDays,
} from "react-icons/fa6";
import { Sparkle } from "lucide-react";


const experiences = [
  {
    type: "Freelance",
    date: "2022 — Continue",
    company: "CAS",
    role: "App Developer",
    location: "Bahawalpur, Pakistan",
    description:
      "Started my professional journey by building responsive websites and full-stack applications for different clients and businesses.",
    icon: FaCode,
    accent: "blue",
  },
  {
    type: "Professional",
    date: "Jan 2024 — Dec 2025",
    company: "Codesthinker",
    role: "Full Stack Web & App Developer",
    location: "Bahawalpur, Pakistan",
    description:
      "Developed full-stack web applications using modern technologies while focusing on performance, usability and delivering high-quality digital solutions.",
    icon: FaBriefcase,
    accent: "cyan",
  },
  {
    type: "CEO",
    date: "Jan 2026 — Present",
    company: "Evermont",
    role: "Senior Full Stack Software Developer",
    location: "Bahawalpur, Pakistan",
    description:
      "Building SaaS platforms, AI-powered features, ERP integrations, automation pipelines and production-ready digital solutions.",
    icon: Sparkle,
    accent: "blue",
  },
];

export default function Journey() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#060B14] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[-180px] h-[350px] w-[350px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

        <div className="absolute right-[8%] top-[25%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        <div className="flex items-center justify-center gap-4">
          <span className="h-2.5 w-2.5 rotate-45 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-400 sm:text-xs">
            My Experience
          </span>

          <span className="h-2.5 w-2.5 rotate-45 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        </div>

        <h2 className="mx-auto mt-7 max-w-[900px] text-center font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-[35px] lg:text-[45px]">
          Experience That{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text italic text-transparent">
            Delivers
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-sm leading-7 text-slate-400 sm:text-base">
          A journey built around solving real problems, developing scalable
          digital products and creating meaningful results.
        </p>

        <div className="relative mx-auto mt-10 max-w-[1400px] overflow-hidden rounded-[18px] border border-blue-500/25 bg-[#07101D]/80 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-8 lg:px-10">

          <div className="pointer-events-none absolute left-[-80px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[80px]" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-5">

              <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[17px] border border-blue-500/40 bg-blue-500/[0.07] text-blue-400">

                <span className="absolute right-1.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#07101D] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                <FaCode className="text-[27px]" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Open for Freelance Projects
                  </h3>

                  <span className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-cyan-400">
                    Available
                  </span>
                </div>

                <p className="mt-1.5 max-w-[760px] text-xs leading-6 text-slate-400 sm:text-sm">
                  Have an idea or project? I can help you turn it into a
                  modern, scalable and high-performing digital solution.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-4 rounded-full border border-blue-400/40 bg-blue-500/[0.06] py-1.5 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/70 hover:bg-blue-500/10"
            >
              <span>Hire Me</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <FaArrowUpRightFromSquare className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

          {experiences.map((experience) => {
            const Icon = experience.icon;
            const isCyan = experience.accent === "cyan";

            return (
              <article
                key={experience.company}
                className={`group relative overflow-hidden rounded-[16px] border bg-[#07101D]/75 p-5 transition-all duration-300 hover:-translate-y-1 ${
                  isCyan
                    ? "border-cyan-500/30 hover:border-cyan-400/60"
                    : "border-blue-500/30 hover:border-blue-400/60"
                }`}
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-px ${
                    isCyan
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  }`}
                />

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                      isCyan
                        ? "border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-300"
                        : "border-blue-400/25 bg-blue-400/[0.05] text-blue-300"
                    }`}
                  >
                    {experience.type}
                  </span>

                
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isCyan
                        ? "bg-cyan-400/[0.07] text-cyan-400"
                        : "bg-blue-400/[0.07] text-blue-400"
                    }`}
                  >
                    <Icon className="text-sm" />
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-2 text-[12px] text-slate-500">
                  <FaCalendarDays />

                  <span>{experience.date}</span>
                </div>

                <h3 className="mt-4 font-serif text-[22px] font-semibold tracking-tight text-white">
                  {experience.company}
                </h3>

                <p
                  className={`mt-1 text-[12px] font-semibold ${
                    isCyan ? "text-cyan-400" : "text-blue-400"
                  }`}
                >
                  {experience.role}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-500">
                  <FaLocationDot />

                  <span>{experience.location}</span>
                </div>

                <div className="my-4 h-px bg-blue-900/40" />

                <p className="text-[13px] leading-5 text-slate-400 sm:text-[12px]">
                  {experience.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-[12px] text-slate-500">
                  <span
                    className={`h-2 w-2 rounded-full border ${
                      isCyan
                        ? "border-cyan-400 bg-cyan-400/20"
                        : "border-blue-400 bg-blue-400/20"
                    }`}
                  />

                  Professional Experience
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}