
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaBriefcase,
  FaMobileAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "Jan 2026 — Present",
    company: "Evermont Global Technologies",
    role: "CEO & Founder",
    type: "Leadership",
    location: "Bahawalpur, Punjab, Pakistan · On-site",
    description:
      "Founded and currently lead Evermont Global Technologies, helping startups and businesses build scalable digital solutions, software products and modern technology solutions.",
    icon: FaUserTie,
    side: "left",
  },

  {
    period: "Oct 2025 — Jan 2026",
    company: "Code's Thinker",
    role: "Senior Software Engineer",
    type: "Professional",
    location: "Bahawalpur, Punjab, Pakistan",
    description:
      "Delivered real-time tracking solutions, WebSocket communication and route optimization for fleet management applications while improving operational efficiency and integrating REST API solutions.",
    icon: FaCode,
    side: "right",
  },

  {
    period: "Mar 2023 — Mar 2024",
    company: "CAS — Center for Advance Solutions",
    role: "Android Developer",
    type: "Professional",
    location: "Punjab, Pakistan",
    description:
      "Developed native Android applications using Java and integrated REST APIs and Firebase for real-time data management and application functionality.",
    icon: FaCode,
    side: "left",
  },

  {
    period: "May 2022 — Aug 2025",
    company: "ITSH Tech Solution House",
    role: "International IT Recruiter",
    type: "Freelance",
    location: "Pakistan · Remote",
    description:
      "Identified and recruited qualified candidates for IT and software development roles through LinkedIn, job portals and professional networks while supporting technical recruitment processes.",
    icon: FaUsers,
    side: "right",
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
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".journey-item",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 78%",
          },
        }
      );

      gsap.to(".journey-core", {
        boxShadow:
          "0 0 25px rgba(49,130,255,.6), 0 0 55px rgba(49,130,255,.18)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#071630] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-8 lg:px-10 lg:py-28 xl:px-12 xl:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[8%] h-72 w-72 rounded-full bg-blue-500/[0.10] blur-[100px] sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

        <div className="absolute -right-40 bottom-[5%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px] sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Heading */}
        <div className="journey-heading mb-12 text-center sm:mb-16 md:mb-20">
          <span className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#3182FF] sm:text-[10px]">
            <span className="h-px w-6 bg-[#3182FF]" />
            MY JOURNEY
            <span className="h-px w-6 bg-[#3182FF]" />
          </span>

          <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.08] tracking-[-0.05em] text-white sm:text-[40px] md:text-[44px] lg:text-[48px]">
            A Journey of{" "}
            <em className="text-[#3182FF]">Growth.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[12px] leading-7 text-[#B4C5DE] sm:text-[13px] md:text-[14px]">
            Every experience has shaped the way I approach technology,
            problem-solving and building digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="journey-list relative">
          {/* Center Line */}
          <div className="journey-line absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3182FF]/60 to-transparent" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isLeft = experience.side === "left";

            return (
              <div
                key={`${experience.company}-${experience.role}-${experience.period}-${index}`}
                className="journey-item relative mb-10 w-full last:mb-0 sm:mb-14 md:mb-16"
              >
                {/* Timeline Dot */}
                <div className="journey-core absolute left-1/2 top-9 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#071630] bg-[#3182FF] shadow-[0_0_16px_rgba(49,130,255,.65)]" />

                {/* Card Wrapper */}
                <div
                  className={`flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <article className="journey-card w-[43%] rounded-[16px] border border-[#D1E2FF] bg-gradient-to-br from-[#F8FBFF] to-[#EAF2FF] p-5 text-[#0B1D3A] shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3182FF] hover:shadow-[0_20px_55px_rgba(0,0,0,.18),0_0_30px_rgba(49,130,255,.12)] sm:p-6">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-block rounded-md border border-[#C7DCFF] bg-[#E2EDFF] px-2 py-1 font-mono text-[9px] text-[#175FC4] sm:text-[10px]">
                        {experience.period}
                      </span>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#C7DCFF] bg-[#E2EDFF] text-[#1769D2]">
                        <Icon className="text-xs sm:text-sm" />
                      </div>
                    </div>

                    {/* Company */}
                    <h3 className="mt-5 font-serif text-[18px] font-normal leading-tight text-[#0B1D3A] sm:text-[20px]">
                      {experience.company}
                    </h3>

                    {/* Role */}
                    <h4 className="mt-1.5 text-[13px] font-semibold leading-5 text-[#1769D2] sm:text-[14px]">
                      {experience.role}
                    </h4>

                    {/* Location */}
                    <div className="mt-3 flex items-start gap-2 text-[10px] leading-5 text-[#60738F] sm:text-[11px]">
                      <FaLocationDot className="mt-1 shrink-0 text-[#3182FF]" />

                      <span>{experience.location}</span>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-[#D5E3F7]" />

                    {/* Description */}
                    <p className="text-[11px] leading-6 text-[#506580] sm:text-[12px] sm:leading-7">
                      {experience.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center gap-2 text-[10px] text-[#526B8A] sm:text-[11px]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3182FF] shadow-[0_0_8px_rgba(49,130,255,.5)]" />

                      {experience.type}
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 900px) {
          .journey-list {
            padding-left: 30px;
          }

          .journey-line {
            left: 7px;
            transform: none;
          }

          .journey-item {
            display: block;
          }

          .journey-core {
            left: 7px;
            top: 38px;
          }

          .journey-item > div {
            display: block;
          }

          .journey-card {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          #journey {
            padding-top: 75px;
            padding-bottom: 75px;
          }

          .journey-heading {
            margin-bottom: 45px;
          }

          .journey-heading h2 {
            font-size: 34px;
          }

          .journey-heading p {
            font-size: 12px;
            line-height: 1.8;
          }

          .journey-list {
            padding-left: 25px;
          }

          .journey-line {
            left: 6px;
          }

          .journey-core {
            left: 6px;
            top: 34px;
            width: 10px;
            height: 10px;
          }

          .journey-card {
            padding: 17px;
            border-radius: 10px;
          }

          .journey-card h3 {
            font-size: 17px;
          }

          .journey-card h4 {
            font-size: 12px;
          }

          .journey-item {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 380px) {
          #journey {
            padding-left: 14px;
            padding-right: 14px;
          }

          .journey-list {
            padding-left: 22px;
          }

          .journey-line {
            left: 5px;
          }

          .journey-core {
            left: 5px;
          }

          .journey-card {
            padding: 15px;
          }

          .journey-card h3 {
            font-size: 16px;
          }

          .journey-heading h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
