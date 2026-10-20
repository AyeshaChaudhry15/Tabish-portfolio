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
    company: "Codesthinker",
    position: "Flutter App Developer",
    location: "Bahawalpur, Pakistan",
    date: "Jan 2024 - Dec 2025",
    description:
      "Developed cross-platform mobile applications using Flutter and Dart, integrating Firebase, REST APIs, and modern mobile development practices.",
  },
  {
    company: "Devvista",
    position: "Senior Flutter App Developer",
    location: "Bahawalpur, Pakistan",
    date: "Jan 2026 - Present",
    description:
      "Building scalable mobile applications using Flutter, integrating APIs and Firebase services, implementing advanced app features, and delivering production-ready applications.",
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
            y: 30,
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
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-10 h-[420px] w-[420px] rounded-full bg-blue-900/15 blur-[140px]" />

        <div className="absolute right-[8%] top-[30%] h-[380px] w-[380px] rounded-full bg-sky-900/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(37,99,235,0.07),transparent_42%)]" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="journey-header">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-7 bg-blue-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300 sm:text-xs">
              Professional Journey
            </p>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[40px]">
            Where I Create{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text italic text-transparent">
              Impact
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[9px] h-px bg-gradient-to-r from-blue-500 via-sky-400/60 to-transparent" />

            <div className="grid gap-12 md:grid-cols-2 md:gap-10">
              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="journey-experience relative pt-8"
                >
                  <div
                    className={`journey-dot absolute left-0 top-0 h-5 w-5 rounded-full border-2 bg-[#0B1220] ${
                      index === 0
                        ? "border-blue-400 shadow-[0_0_0_4px_rgba(59,130,246,0.08),0_0_18px_rgba(59,130,246,0.4)]"
                        : "border-sky-300 shadow-[0_0_0_4px_rgba(125,211,252,0.08),0_0_18px_rgba(125,211,252,0.35)]"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        index === 0 ? "bg-blue-400" : "bg-sky-300"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-xl font-bold sm:text-2xl ${
                      index === 0 ? "text-slate-50" : "text-sky-200"
                    }`}
                  >
                    {experience.company}
                  </h3>

                  <p className="mt-3 text-sm font-bold text-slate-100 sm:text-base">
                    {experience.position}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
                    <FaMapMarkerAlt className="text-blue-300" />
                    <span>{experience.location}</span>
                  </div>

                  <div className="mt-3 inline-flex rounded-md border border-slate-700/70 bg-slate-900/30 px-3 py-2 text-[11px] text-slate-400">
                    {experience.date}
                  </div>

                  <p className="mt-5 max-w-[500px] text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/journey"
              className="journey-button group mt-12 inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-blue-400/40 bg-blue-500/[0.03] px-5 py-3 text-xs font-bold tracking-wide text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/[0.06]"
            >
              MORE ABOUT MY JOURNEY

              <FaArrowRight className="text-blue-300 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="journey-expertise rounded-2xl border border-slate-700/60 bg-[#0D1728]/50 p-5 backdrop-blur-sm sm:p-6">
            <div className="space-y-3">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[74px] items-center gap-4 rounded-lg border border-slate-700/50 bg-[#0B1220]/70 px-4 transition hover:border-blue-400/40 hover:bg-blue-500/[0.035]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-700/70 bg-[#111C2E] text-blue-300 transition group-hover:border-blue-400/40 group-hover:text-sky-300">
                      <Icon className="text-lg" />
                    </div>

                    <p className="text-sm font-semibold text-slate-300 transition group-hover:text-slate-100">
                      {item.title}
                    </p>
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