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
    title: "Project Management Dashboard",
    category: "Web Application",
    description:
      "A modern project management dashboard designed to manage projects, teams, tasks, analytics, and overall business performance from one place.",
    image: "/projects/multi-device-dashboard.png",
    link: "#",
  },
  {
    title: "Quotes & Motivation App",
    category: "Mobile App",
    description:
      "A clean and engaging mobile application for discovering motivational quotes, saving favorites, exploring categories, and building positive daily habits.",
    image: "/projects/qoutes-app.jpeg",
    link: "#",
  },
  {
    title: "Restaurant Management App",
    category: "Restaurant App",
    description:
      "A complete restaurant digital experience featuring menu browsing, food categories, offers, ordering, customer reviews, and restaurant information.",
    image: "/projects/resturent-app.jpeg",
    link: "#",
  },
  {
    title: "Shopping Mobile App",
    category: "E-Commerce App",
    description:
      "A modern shopping application with product discovery, categories, offers, wishlist, cart management, and a smooth mobile shopping experience.",
    image: "/projects/shopping-app.jpeg",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A scalable e-commerce platform featuring product management, shopping cart, order tracking, inventory, analytics, and a complete online store experience.",
    image: "/projects/ecommerce-platform.jpeg",
    link: "#",
  },
  {
    title: "Fitness & Nutrition App",
    category: "Fitness App",
    description:
      "A fitness and nutrition mobile application designed to track workouts, calories, nutrition, progress, daily goals, and personalized fitness activities.",
    image: "/projects/fitness-app.jpeg",
    link: "#",
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
      className="relative overflow-hidden bg-[#0B1220] px-5 py-20 text-slate-50 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-[320px] w-[320px] rounded-full bg-blue-900/15 blur-[130px]" />

        <div className="absolute right-[8%] top-[35%] h-[320px] w-[320px] rounded-full bg-sky-900/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-blue-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300 sm:text-xs">
              Featured Work
            </p>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[40px]">
            Some Projects That I&apos;ve{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text italic text-transparent">
              Built
            </span>
          </h2>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous projects"
            className="absolute left-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0B1220] text-blue-300 shadow-lg shadow-blue-950/30 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 md:flex"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next projects"
            className="absolute right-[-18px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0B1220] text-blue-300 shadow-lg shadow-blue-950/30 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-200 md:flex"
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
                className="group w-[calc(100vw-40px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0D1728] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] sm:w-[420px] lg:w-[384px]"
              >
                {/* Project Image */}
                <div className="relative h-[210px] overflow-hidden rounded-xl border border-slate-700/50 bg-[#0B1220]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 420px"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent opacity-70" />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold leading-snug text-slate-100 sm:text-[21px]">
                    {project.title}
                  </h3>

                  <div className="mt-4 inline-flex rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                    {project.category}
                  </div>

                  <p className="mt-5 min-h-[96px] text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-slate-700/60 pt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-md border border-blue-400/30 bg-blue-500/5 px-4 py-2.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-200"
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