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
      className="relative isolate overflow-hidden bg-[#0B1220] px-4 py-16 text-slate-50 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-10 h-[260px] w-[260px] rounded-full bg-blue-900/15 blur-[100px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] lg:h-[420px] lg:w-[420px] lg:blur-[140px]" />

        <div className="absolute right-[5%] top-[30%] h-[250px] w-[250px] rounded-full bg-sky-900/10 blur-[100px] sm:h-[300px] sm:w-[300px] sm:blur-[120px] lg:h-[350px] lg:w-[350px] lg:blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(37,99,235,0.07),transparent_42%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <div className="journey-header">
          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <span className="h-px w-6 bg-blue-400 sm:w-7" />

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-[10px] sm:tracking-[0.24em] md:text-xs">
              Professional Journey
            </p>
          </div>

          <h2 className="max-w-full font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[42px]">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text italic text-transparent">
              Leadership
            </span>
          </h2>

          <p className="mt-4 max-w-[680px] text-[13px] leading-6 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7 md:text-[15px]">
            A journey shaped by continuous learning, real-world development,
            and the transition from building applications to leading digital
            products and technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid items-start gap-12 sm:mt-14 md:mt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:gap-14 xl:gap-20">
          
          {/* Journey */}
          <div className="relative min-w-0">
            
            {/* Desktop Timeline */}
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-gradient-to-r from-slate-500/40 via-blue-400/70 to-sky-300/50 md:block" />

            {/* Mobile Timeline */}
            <div className="absolute bottom-0 left-[8px] top-0 w-px bg-gradient-to-b from-blue-400/50 via-blue-400/25 to-transparent md:hidden" />

            {/* Experience Cards */}
            <div className="grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10">
              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="journey-experience relative min-w-0 pl-8 pt-0 md:pl-0 md:pt-8"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`journey-dot absolute left-0 top-0 h-[18px] w-[18px] rounded-full border-2 bg-[#0B1220] md:left-0 md:top-0 md:h-5 md:w-5 ${
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
                    className={`max-w-full break-words text-[19px] font-bold leading-tight tracking-tight sm:text-[21px] md:text-[20px] lg:text-[21px] xl:text-[23px] ${
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
                  <p className="mt-2 text-[13px] font-bold leading-5 text-slate-100 sm:mt-3 sm:text-sm md:text-[13px] lg:text-[15px]">
                    {experience.position}
                  </p>

                  {/* Location */}
                  <div className="mt-3 flex items-start gap-2 text-[11px] leading-5 text-slate-400 sm:text-xs lg:text-[13px]">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-blue-300" />

                    <span className="break-words">
                      {experience.location}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="mt-3 inline-flex max-w-full rounded-md border border-slate-700/70 bg-slate-900/30 px-2.5 py-1.5 text-[10px] text-slate-400 sm:px-3 sm:py-2 sm:text-[11px]">
                    {experience.date}
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-full text-[12px] leading-6 text-slate-400 sm:text-[13px] sm:leading-7 md:text-[12px] lg:max-w-[330px] lg:text-[14px]">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/journey"
              className="journey-button group mt-10 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md border border-blue-400/40 bg-blue-500/[0.03] px-4 py-3 text-[10px] font-bold tracking-wide text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/[0.06] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] sm:mt-12 sm:min-h-12 sm:w-auto sm:px-5 sm:text-xs"
            >
              MORE ABOUT MY JOURNEY

              <FaArrowRight className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Skills / Expertise */}
          <div className="journey-expertise mx-auto w-full max-w-[360px] rounded-2xl border border-slate-700/60 bg-[#0D1728]/50 p-3.5 backdrop-blur-sm sm:p-4 md:max-w-[380px] lg:mx-0 lg:max-w-[360px] lg:justify-self-end xl:max-w-[370px]">
            
            {/* Header */}
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-blue-400" />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-300 sm:text-[9px] sm:tracking-[0.2em]">
                  Core Expertise
                </span>
              </div>

              <h3 className="mt-2.5 font-serif text-lg leading-6 text-slate-100 sm:mt-3 sm:text-xl">
                Technologies I Work With
              </h3>
            </div>

            {/* Skills */}
            <div className="space-y-2 sm:space-y-2.5">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[58px] w-full items-center gap-2.5 rounded-lg border border-slate-700/50 bg-[#0B1220]/70 px-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.035] hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] sm:min-h-[64px] sm:gap-3 sm:px-3"
                  >
                    {/* Icon */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-700/70 bg-[#111C2E] text-blue-300 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/[0.06] group-hover:text-sky-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] sm:h-9 sm:w-9">
                      <Icon className="text-sm sm:text-base" />
                    </div>

                    {/* Skill */}
                    <p className="min-w-0 flex-1 break-words text-[11px] font-semibold leading-5 text-slate-300 transition-colors duration-300 group-hover:text-slate-100 sm:text-xs">
                      {item.title}
                    </p>

                    {/* Arrow */}
                    <FaArrowRight className="ml-auto hidden shrink-0 text-[10px] text-slate-700 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300 group-hover:opacity-100 sm:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Only responsive fixes */}
      <style jsx>{`
        @media (max-width: 767px) {
          #journey {
            overflow-x: hidden;
          }

          .journey-experience {
            width: 100%;
          }

          .journey-experience > p {
            max-width: 100%;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .journey-experience {
            min-width: 0;
          }
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .journey-experience h3 {
            font-size: 19px;
          }

          .journey-experience > p {
            font-size: 12px;
          }
        }

        @media (min-width: 1536px) {
          .journey-experience h3 {
            font-size: 23px;
          }

          .journey-experience > p {
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .journey-expertise {
            padding: 12px;
          }

          .journey-experience {
            padding-left: 28px;
          }
        }
      `}</style>
    </section>
  );
}