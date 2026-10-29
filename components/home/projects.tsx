"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "EatMeat – Meat Delivery App",
    category: "MOBILE APP",
    description:
      "A modern meat delivery application designed to make ordering fresh meat simple, fast, and convenient with a smooth mobile shopping experience.",
    image: "/projects/ecommerce-platform.jpeg",
    tags: ["Food Delivery", "E-Commerce", "Mobile App"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.carivore.lifestyle.eatmeat",
  },

  {
    title: "Health & Fitness Mobile App UI/UX",
    category: "FITNESS APP",
    description:
      "A modern fitness application designed to help users manage workouts, track progress, and maintain a consistent fitness routine.",
    image: "/projects/fitness-app.jpeg",
    tags: ["Fitness", "Health", "Mobile App", "UI/UX"],
    liveUrl: "https://your-fitness-app.vercel.app",
  },

  {
    title: "Multi Device Dashboard",
    category: "DASHBOARD",
    description:
      "A responsive multi-device dashboard designed to present important data, analytics, and application controls through a clean and intuitive interface.",
    image: "/projects/multi-device-dashboard.png",
    tags: ["Dashboard", "Analytics", "Responsive UI"],
    liveUrl: "https://your-multi-device-dashboard.vercel.app",
  },

  {
    title: "Quotes App – Daily Motivation & Inspiration",
    category: "MOBILE APP",
    description:
      "A simple and engaging quotes application featuring inspirational and motivational content through a clean and user-friendly mobile experience.",
    image: "/projects/qoutes-app.jpeg",
    tags: ["Quotes", "Motivation", "Mobile App", "UI/UX"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mujeebdev.quotes",
  },

  {
    title: "Qatari Bites – Restaurant App",
    category: "RESTAURANT APP",
    description:
      "A modern restaurant application designed to showcase menus, restaurant information, and provide an engaging digital dining experience.",
    image: "/projects/resturent-app.jpeg",
    tags: ["Restaurant", "Food", "Mobile App", "UI/UX"],
    liveUrl: "https://your-restaurant-app.vercel.app",
  },

  {
    title: "Doctor Appointment App",
    category: "HEALTH APP",
    description:
      "A modern doctor appointment application designed to help users discover doctors, manage appointments, and access healthcare services through a simple digital experience.",
    image: "/projects/shopping-app.jpeg",
    tags: ["Healthcare", "Doctor Appointment", "Mobile App", "UI/UX"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.nexusappstech.doctorapp",
  },
];

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -410,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 410,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#071630] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-[320px] w-[320px] rounded-full bg-[#3182FF]/15 blur-[130px]" />

        <div className="absolute right-[8%] top-[35%] h-[320px] w-[320px] rounded-full bg-[#2563EB]/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-[#3182FF]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#3182FF]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#60A5FA] sm:text-xs">
              Featured Work
            </p>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[40px]">
            Some Projects That I&apos;ve{" "}
            <span className="bg-gradient-to-r from-[#3182FF] via-[#60A5FA] to-white bg-clip-text italic text-transparent">
              Built
            </span>
          </h2>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous projects"
            className="absolute left-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#3182FF]/40 bg-[#0A1B3A] text-[#60A5FA] shadow-lg shadow-black/30 transition-all duration-300 hover:border-[#3182FF] hover:bg-[#102951] hover:text-white md:flex"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next projects"
            className="absolute right-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#3182FF]/40 bg-[#0A1B3A] text-[#60A5FA] shadow-lg shadow-black/30 transition-all duration-300 hover:border-[#3182FF] hover:bg-[#102951] hover:text-white md:flex"
          >
            <FaArrowRight className="text-sm" />
          </button>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="group w-[calc(100vw-40px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E2EAF7] bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#3182FF]/60 hover:shadow-[0_20px_50px_rgba(49,130,255,0.14)] sm:w-[420px] lg:w-[384px]"
              >
                <div className="relative h-[210px] overflow-hidden rounded-xl border border-[#D8E5F7] bg-[#F0F6FF]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 420px"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071630]/40 via-transparent to-transparent opacity-70" />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold leading-snug text-[#102951] sm:text-[21px]">
                    {project.title}
                  </h3>

                  <div className="mt-4 inline-flex rounded-md border border-[#3182FF]/25 bg-[#3182FF]/10 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">
                    {project.category}
                  </div>

                  <p className="mt-5 min-h-[96px] text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#D8E5F7] bg-[#F0F6FF] px-2.5 py-1 text-[10px] font-medium text-[#315277]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#E2EAF7] pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-md border border-[#3182FF]/30 bg-[#3182FF]/[0.06] px-4 py-2.5 text-sm font-semibold text-[#2563EB] transition-all duration-300 hover:border-[#3182FF]/60 hover:bg-[#3182FF]/10 hover:text-[#102951]"
                    >
                      Live Demo

                      <FaExternalLinkAlt className="text-[10px] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}