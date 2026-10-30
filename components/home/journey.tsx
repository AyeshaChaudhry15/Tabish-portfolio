
"use client";

import { useRef } from "react";
import Link from "next/link";
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
    company: "Code's Thinker",
    position: "Flutter App Developer",
    location: "Bahawalpur, Pakistan",
    date: "2 Years",
    description:
      "Worked for two years as a Flutter App Developer, building cross-platform mobile applications, integrating REST APIs and Firebase, and developing production-ready features with a strong focus on performance and user experience.",
  },
  {
    company: "Evermont Global Technologies",
    position: "COO",
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
    title: "AI Integration",
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

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative isolate overflow-hidden bg-[#071630] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-10 h-[260px] w-[260px] rounded-full bg-[#3182FF]/15 blur-[100px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] lg:h-[420px] lg:w-[420px] lg:blur-[140px]" />

        <div className="absolute right-[5%] top-[30%] h-[250px] w-[250px] rounded-full bg-[#2563EB]/15 blur-[100px] sm:h-[300px] sm:w-[300px] sm:blur-[120px] lg:h-[350px] lg:w-[350px] lg:blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(49,130,255,0.08),transparent_42%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1600px]">

        {/* Header */}
        <div className="journey-header">
          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <span className="h-px w-6 bg-[#3182FF] sm:w-7" />

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#60A5FA] sm:text-[10px] sm:tracking-[0.24em] md:text-xs">
              Professional Journey
            </p>
          </div>

          <h2 className="max-w-full font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[42px]">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-[#3182FF] via-[#60A5FA] to-white bg-clip-text italic text-transparent">
              Leadership
            </span>
          </h2>

          <p className="mt-4 max-w-[680px] text-[13px] leading-6 text-blue-100/70 sm:mt-5 sm:text-sm sm:leading-7 md:text-[15px]">
            A journey shaped by continuous learning, real-world development,
            and the transition from building applications to leading digital
            products and technology.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-12 grid items-start gap-10 sm:mt-14 md:mt-16 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.75fr)] lg:gap-10 xl:gap-12">

          {/* Experience Section */}
          <div className="relative min-w-0">

            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-[9px] hidden h-px bg-gradient-to-r from-[#24416B]/40 via-[#3182FF]/70 to-[#60A5FA]/50 md:block" />

            <div className="absolute bottom-0 left-[8px] top-0 w-px bg-gradient-to-b from-[#3182FF]/50 via-[#3182FF]/25 to-transparent md:hidden" />

            {/* Two Experience Cards */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">

              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="journey-experience relative min-w-0 rounded-xl border border-[#24416B] bg-gradient-to-br from-[#102951] to-[#0A1B3A] p-5 pl-8 pt-5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3182FF]/60 hover:shadow-[0_18px_40px_rgba(49,130,255,0.16)] md:pl-5 md:pt-8 lg:p-7 lg:pt-8 xl:p-8"
                >

                  {/* Timeline Dot */}
                  <div
                    className={`journey-dot absolute left-0 top-5 h-[18px] w-[18px] rounded-full border-2 bg-[#071630] md:left-5 md:top-0 md:h-5 md:w-5 ${
                      index === 0
                        ? "border-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.08),0_0_18px_rgba(37,99,235,0.25)]"
                        : "border-[#3182FF] shadow-[0_0_0_4px_rgba(49,130,255,0.08),0_0_18px_rgba(49,130,255,0.25)]"
                    }`}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        index === 0
                          ? "bg-[#2563EB]"
                          : "bg-[#3182FF]"
                      }`}
                    />
                  </div>

                  <h3 className="max-w-full break-words text-[19px] font-bold leading-tight tracking-tight text-white sm:text-[21px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                    {experience.company}
                  </h3>

                  <p className="mt-2 text-[13px] font-bold leading-5 text-[#60A5FA] sm:mt-3 sm:text-sm md:text-[13px] lg:text-[15px]">
                    {experience.position}
                  </p>

                  <div className="mt-3 flex items-start gap-2 text-[11px] leading-5 text-blue-100/65 sm:text-xs lg:text-[13px]">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#60A5FA]" />

                    <span className="break-words">
                      {experience.location}
                    </span>
                  </div>

                  <div className="mt-3 inline-flex max-w-full rounded-md border border-[#3182FF]/30 bg-[#071630]/70 px-2.5 py-1.5 text-[10px] text-[#BFDBFE] sm:px-3 sm:py-2 sm:text-[11px]">
                    {experience.date}
                  </div>

                  <p className="mt-4 max-w-full text-[12px] leading-6 text-blue-100/75 sm:text-[13px] sm:leading-7 md:text-[12px] lg:text-[13px] xl:text-[14px]">
                    {experience.description}
                  </p>

                </article>
              ))}

            </div>

            {/* More Button */}
            <Link
              href="/journey"
              className="journey-button group mt-10 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md border border-[#3182FF]/50 bg-[#0A1B3A] px-4 py-3 text-[10px] font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#60A5FA] hover:bg-[#102951] hover:shadow-[0_10px_30px_rgba(49,130,255,0.12)] sm:mt-12 sm:min-h-12 sm:w-auto sm:px-5 sm:text-xs"
            >
              MORE ABOUT MY JOURNEY

              <FaArrowRight className="text-[#60A5FA] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Expertise Sidebar */}
          <div className="journey-expertise mx-auto w-full max-w-[400px] rounded-2xl border border-[#D8E5F7] bg-white p-4 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:p-5 md:max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end">

            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#3182FF]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#3182FF] sm:text-[9px] sm:tracking-[0.2em]">
                  Core Expertise
                </span>
              </div>

              <h3 className="mt-2.5 font-serif text-lg leading-6 text-[#102951] sm:mt-3 sm:text-xl">
                Technologies I Work With
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex min-h-[58px] w-full items-center gap-2.5 rounded-lg border border-[#D8E5F7] bg-[#F5F8FF] px-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3182FF]/50 hover:bg-[#EAF2FF] hover:shadow-[0_8px_30px_rgba(49,130,255,0.10)] sm:min-h-[64px] sm:gap-3 sm:px-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#D8E5F7] bg-white text-[#3182FF] transition-all duration-300 group-hover:border-[#3182FF]/50 group-hover:bg-[#3182FF] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(49,130,255,0.12)] sm:h-9 sm:w-9">
                      <Icon className="text-sm sm:text-base" />
                    </div>

                    <p className="min-w-0 flex-1 break-words text-[11px] font-semibold leading-5 text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#071630] sm:text-xs">
                      {item.title}
                    </p>

                    <FaArrowRight className="ml-auto hidden shrink-0 text-[10px] text-[#3182FF]/50 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3182FF] group-hover:opacity-100 sm:block" />
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
