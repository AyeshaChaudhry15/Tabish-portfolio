"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
} from "react-icons/si";

const experiences = [
  {
    company: "CAS",
    position: "App Developer",
    location: "Bahawalpur, Pakistan",
    date: "Early Career",
    description:
      "Started my professional journey at CAS, where I learned the fundamentals of software development, strengthened my problem-solving skills, and gained hands-on experience working on real-world projects.",
  },
  {
    company: "Code's Thinker",
    position: "Flutter App Developer",
    location: "Bahawalpur, Pakistan",
    date: "2 Years",
    description:
      "Worked for two years as a Flutter App Developer, building cross-platform mobile applications, integrating REST APIs and Firebase, and developing production-ready features with a strong focus on performance and user experience.",
  },
  {
    company: "Evermont Global Technologies",
    position: "CEO",
    location: "Pakistan",
    date: "Present",
    description:
      "Currently leading Evermont Global Technologies as CEO, combining technical expertise with product thinking, business strategy, and a vision for building scalable digital products and innovative technology solutions.",
  },
];

const expertise = [
  {
    icon: SiFlutter,
    title: "Flutter App Development",
  },
  {
    icon: SiDart,
    title: "Dart Development",
  },
  {
    icon: SiFirebase,
    title: "Firebase Integration",
  },
  {
    icon: FaCode,
    title: "REST API Integration",
  },
  {
    icon: FaMobileAlt,
    title: "Cross-Platform Apps",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".journey-header > *",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
        }
      )
        .fromTo(
          ".journey-experience",
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.3"
        )
        .fromTo(
          ".journey-expertise",
          {
            x: 30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.55"
        )
        .fromTo(
          ".journey-button",
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.35"
        );

      gsap.to(".journey-dot", {
        boxShadow:
          "0 0 0 5px rgba(59,130,246,0.08), 0 0 22px rgba(59,130,246,0.55)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative isolate overflow-hidden bg-[#0B1220] px-5 py-20 text-slate-50 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-[420px] w-[420px] rounded-full bg-blue-900/15 blur-[140px]" />

        <div className="absolute right-[10%] top-[30%] h-[350px] w-[350px] rounded-full bg-sky-900/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(37,99,235,0.07),transparent_42%)]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="journey-header">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-7 bg-blue-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300 sm:text-xs">
              Professional Journey
            </p>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[42px]">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text italic text-transparent">
              Leadership
            </span>
          </h2>

          <p className="mt-5 max-w-[680px] text-sm leading-7 text-slate-400 sm:text-[15px]">
            A journey shaped by continuous learning, real-world development,
            and the transition from building applications to leading digital
            products and technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          {/* Journey */}
          <div className="relative min-w-0">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-gradient-to-r from-slate-500/40 via-blue-400/70 to-sky-300/50 md:block" />

            {/* Experience Cards */}
            <div className="grid gap-14 md:grid-cols-3 md:gap-10">
              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="journey-experience relative min-w-0 pt-8"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`journey-dot absolute left-0 top-0 h-5 w-5 rounded-full border-2 bg-[#0B1220] ${
                      index === 0
                        ? "border-slate-400 shadow-[0_0_0_4px_rgba(148,163,184,0.08),0_0_18px_rgba(148,163,184,0.35)]"
                        : index === 1
                        ? "border-blue-400 shadow-[0_0_0_4px_rgba(59,130,246,0.08),0_0_18px_rgba(59,130,246,0.45)]"
                        : "border-sky-300 shadow-[0_0_0_4px_rgba(125,211,252,0.08),0_0_18px_rgba(125,211,252,0.45)]"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        index === 0
                          ? "bg-slate-300"
                          : index === 1
                          ? "bg-blue-400"
                          : "bg-sky-300"
                      }`}
                    />
                  </div>

                  {/* Company */}
                  <h3
                    className={`max-w-full break-words text-[21px] font-bold leading-tight tracking-tight sm:text-[23px] ${
                      index === 0
                        ? "text-slate-100"
                        : index === 1
                        ? "text-blue-300"
                        : "text-sky-200"
                    }`}
                  >
                    {experience.company}
                  </h3>

                  {/* Position */}
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-100 sm:text-[15px]">
                    {experience.position}
                  </p>

                  {/* Location */}
                  <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-400 sm:text-[13px]">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-blue-300" />

                    <span>{experience.location}</span>
                  </div>

                  {/* Date */}
                  <div className="mt-3 inline-flex rounded-md border border-slate-700/70 bg-slate-900/30 px-3 py-2 text-[11px] text-slate-400">
                    {experience.date}
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-[330px] text-[13px] leading-7 text-slate-400 sm:text-[14px]">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/journey"
              className="journey-button group mt-14 inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-blue-400/40 bg-blue-500/[0.03] px-5 py-3 text-xs font-bold tracking-wide text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/[0.06] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]"
            >
              MORE ABOUT MY JOURNEY

              <FaArrowRight className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Skills / Expertise */}
          <div className="journey-expertise w-full max-w-[360px] justify-self-end rounded-2xl border border-slate-700/60 bg-[#0D1728]/50 p-4 backdrop-blur-sm sm:p-5">
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-blue-400" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Core Expertise
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl text-slate-100">
                Technologies I Work With
              </h3>
            </div>

            {/* Skills */}
            <div className="space-y-2.5">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[64px] items-center gap-3 rounded-lg border border-slate-700/50 bg-[#0B1220]/70 px-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.035] hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)]"
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-700/70 bg-[#111C2E] text-blue-300 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/[0.06] group-hover:text-sky-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                      <Icon className="text-base" />
                    </div>

                    {/* Skill */}
                    <p className="text-xs font-semibold leading-5 text-slate-300 transition-colors duration-300 group-hover:text-slate-100">
                      {item.title}
                    </p>

                    {/* Arrow */}
                    <FaArrowRight className="ml-auto shrink-0 text-[10px] text-slate-700 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300 group-hover:opacity-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}