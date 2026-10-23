"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaCode,
  FaLocationDot,
  FaCalendarDays,
} from "react-icons/fa6";
import { Sparkle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Evermont Global Technologies",
    companyType: "Full-time",
    role: "CEO & Founder",
    date: "Jan 2026 — Present",
    duration: "10 mos",
    location: "Bahawalpur, Punjab, Pakistan · On-site",
    description:
      "Founded and currently lead Evermont Global Technologies, helping startups and businesses build scalable digital solutions.",
    skills: "Leadership, Project Management and +8 skills",
    icon: Sparkle,
    accent: "blue",
  },

  {
    company: "Codesthinker",
    companyType: "Full-time",
    role: "Senior Software Engineer",
    date: "Oct 2025 — Jan 2026",
    duration: "4 mos",
    location: "Bahawalpur, Punjab, Pakistan · On-site",
    description:
      "Delivered seamless real-time tracking, WebSocket communication, and route optimization for fleet management apps. Developed and maintained scalable software solutions.",
    skills: "Software Development, WebSocket and +6 skills",
    icon: FaBriefcase,
    accent: "cyan",
  },


  {
    company: "CAS Center for Advance Solutions",
    companyType: "Full-time",
    role: "Flutter Developer",
    date: "Mar 2024 — Aug 2025",
    duration: "1 yr 6 mos",
    location: "Bahawalpur, Punjab, Pakistan",
    description:
      "Developed cross-platform mobile applications using Flutter & Dart. Integrated Firebase, REST APIs, and third-party services to build reliable mobile solutions.",
    skills: "Project Management, Android Development and +3 skills",
    icon: FaCode,
    accent: "blue",
  },



  {
    company: "ITSH Tech Solution House",
    companyType: "Freelance",
    role: "International IT Recruiter",
    date: "May 2022 — Aug 2025",
    duration: "3 yrs 4 mos",
    location: "Pakistan · Remote",
    description:
      "Identified and recruited qualified candidates for IT and software development roles. Sourced candidates through LinkedIn, job portals, and professional networks.",
    skills: "Communication, Technical Recruiting and +5 skills",
    icon: FaBriefcase,
    accent: "cyan",
  },

];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-heading",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".journey-cta",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-cta",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".journey-card",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#060B14] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[-180px] h-[300px] w-[300px] rounded-full bg-blue-600/[0.07] blur-[120px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute right-[5%] top-[25%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.05] blur-[120px] sm:h-[350px] sm:w-[350px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="journey-heading">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-2 w-2 rotate-45 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)] sm:h-2.5 sm:w-2.5" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-blue-400 sm:text-xs sm:tracking-[0.28em]">
              My Experience
            </span>

            <span className="h-2 w-2 rotate-45 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)] sm:h-2.5 sm:w-2.5" />
          </div>

          <h2 className="mx-auto mt-6 max-w-[900px] text-center font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-white sm:mt-7 sm:text-[40px] lg:text-[45px]">
            Experience That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text italic text-transparent">
              Delivers
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-center text-xs leading-6 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            A journey built around solving real problems, developing scalable
            digital products and creating meaningful results.
          </p>
        </div>

        {/* CTA */}
        <div className="journey-cta relative mx-auto mt-8 max-w-[1400px] overflow-hidden rounded-2xl border border-blue-500/25 bg-[#07101D]/80 px-4 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:mt-10 sm:px-6 sm:py-6 lg:px-10">
          <div className="pointer-events-none absolute left-[-80px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[80px]" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-blue-500/40 bg-blue-500/[0.07] text-blue-400 sm:h-[68px] sm:w-[68px]">
                <span className="absolute right-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-[#07101D] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                <FaCode className="text-[22px] sm:text-[27px]" />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-sm font-bold text-white sm:text-lg">
                    Open for Freelance Projects
                  </h3>

                  <span className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-cyan-400 sm:px-2.5 sm:text-[9px]">
                    Available
                  </span>
                </div>

                <p className="mt-1.5 max-w-[760px] text-[11px] leading-5 text-slate-400 sm:text-sm sm:leading-6">
                  Have an idea or project? I can help you turn it into a
                  modern, scalable and high-performing digital solution.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex w-full shrink-0 items-center justify-center gap-4 rounded-full border border-blue-400/40 bg-blue-500/[0.06] py-2 pl-5 pr-2 text-xs font-semibold text-white transition-all duration-300 hover:border-blue-400/70 hover:bg-blue-500/10 sm:w-fit sm:text-sm"
            >
              <span>Hire Me</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <FaArrowUpRightFromSquare className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="journey-grid mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isCyan = experience.accent === "cyan";

            return (
              <article
                key={`${experience.company}-${experience.role}-${index}`}
                className={`journey-card group relative min-w-0 overflow-hidden rounded-2xl border bg-[#07101D]/75 p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                  isCyan
                    ? "border-cyan-500/30 hover:border-cyan-400/60"
                    : "border-blue-500/30 hover:border-blue-400/60"
                }`}
              >
                {/* Top Line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-px ${
                    isCyan
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  }`}
                />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold sm:text-[10px] ${
                      isCyan
                        ? "border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-300"
                        : "border-blue-400/25 bg-blue-400/[0.05] text-blue-300"
                    }`}
                  >
                    {experience.companyType}
                  </span>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isCyan
                        ? "bg-cyan-400/[0.07] text-cyan-400"
                        : "bg-blue-400/[0.07] text-blue-400"
                    }`}
                  >
                    <Icon className="text-sm" />
                  </div>
                </div>

                {/* Date */}
                <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
                  <FaCalendarDays className="shrink-0" />
                  <span>{experience.date}</span>
                  <span className="text-slate-700">•</span>
                  <span>{experience.duration}</span>
                </div>

                {/* Company */}
                <h3 className="mt-4 break-words font-serif text-[20px] font-semibold leading-tight tracking-tight text-white sm:text-[22px]">
                  {experience.company}
                </h3>

                {/* Role */}
                <p
                  className={`mt-1.5 text-xs font-semibold sm:text-sm ${
                    isCyan ? "text-cyan-400" : "text-blue-400"
                  }`}
                >
                  {experience.role}
                </p>

                {/* Location */}
                <div className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-slate-500 sm:text-xs">
                  <FaLocationDot className="mt-1 shrink-0" />
                  <span>{experience.location}</span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-blue-900/40" />

                {/* Description */}
                <p className="text-[11px] leading-6 text-slate-400 sm:text-xs sm:leading-6">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex items-start gap-2 text-[10px] leading-5 text-slate-500 sm:text-xs">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full border ${
                      isCyan
                        ? "border-cyan-400 bg-cyan-400/20"
                        : "border-blue-400 bg-blue-400/20"
                    }`}
                  />

                  <span>{experience.skills}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}