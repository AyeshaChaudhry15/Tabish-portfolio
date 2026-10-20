
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaArrowRight,
  FaDownload,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaStar,
  FaChartBar,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
} from "react-icons/si";

const stats = [
  {
    icon: FaRocket,
    value: "10+",
    label: "Projects Built",
    color: "text-blue-400",
  },
  {
    icon: FaMobileAlt,
    value: "Cross-Platform",
    label: "Mobile Apps",
    color: "text-sky-300",
  },
  {
    icon: FaCode,
    value: "Clean",
    label: "Code Architecture",
    color: "text-blue-400",
  },
  {
    icon: FaShieldAlt,
    value: "Secure",
    label: "Firebase Integration",
    color: "text-sky-300",
  },
  {
    icon: FaGlobe,
    value: "Modern",
    label: "User Experiences",
    color: "text-blue-400",
  },
];

const technologies = [
  { icon: SiFlutter, label: "Flutter", color: "text-sky-400" },
  { icon: SiDart, label: "Dart", color: "text-blue-300" },
  { icon: SiFirebase, label: "Firebase", color: "text-amber-400" },
  { icon: SiAndroid, label: "Android", color: "text-emerald-400" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-content > *",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
        }
      )
        .fromTo(
          imageRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9 },
          "-=0.45"
        )
        .fromTo(
          ".hero-stat",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );

      gsap.to(".orbit-icon", {
        y: -9,
        duration: 2.2,
        stagger: 0.25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orbit-ring", {
        rotation: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to(".profile-glow", {
        opacity: 0.55,
        scale: 1.08,
        duration: 2.5,
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
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#0B1220] text-slate-50 "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[28%] top-10 h-[450px] w-[450px] rounded-full bg-blue-900/15 blur-[140px]" />
        <div className="absolute right-[5%] top-20 h-[400px] w-[400px] rounded-full bg-sky-900/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.08),transparent_45%)]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-24 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid items-center gap-8 lg:min-h-[440px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          <div className="hero-content relative z-20 order-2 max-w-2xl lg:order-1">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-7 bg-blue-400" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300 sm:text-xs">
                Flutter & App Developer
              </p>
            </div>

            <h1 className="max-w-[650px] font-serif text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-[50px] xl:text-[60px]">
              I Build
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text text-transparent">
                Mobile Apps
              </span>
              <br />
              That Matter.
            </h1>

            <p className="mt-6 max-w-[460px] text-sm leading-7 text-slate-400 sm:text-base">
              I'm Kiran Fatima, an App Developer crafting beautiful,
              scalable, and user-friendly mobile applications with Flutter,
              Dart, and Firebase.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.15)] transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
              >
                View My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="/cv.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-slate-600/60 bg-slate-900/30 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300"
              >
                Download CV
                <FaDownload className="text-blue-400" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-xs text-slate-400">
                Open to exciting app development opportunities
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative order-1 mx-auto flex h-[340px] w-full max-w-[460px] items-center justify-center sm:h-[430px] lg:order-2 lg:h-[470px] lg:max-w-none"
          >
            <div className="profile-glow absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[75px] sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]" />

            <div className="orbit-ring absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 shadow-[0_0_35px_rgba(37,99,235,0.08)] sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]" />

            <div className="absolute left-1/2 top-1/2 h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-500/20 bg-gradient-to-br from-blue-950/40 to-[#111C2E] sm:h-[325px] sm:w-[325px] lg:h-[365px] lg:w-[365px]" />

            <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111C2E] sm:h-[305px] sm:w-[305px] lg:h-[345px] lg:w-[345px]" />

            <div className="orbit-icon absolute left-[5%] top-[12%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-xl text-sky-400 shadow-lg backdrop-blur sm:left-[7%] sm:top-[10%] sm:h-[52px] sm:w-[52px]">
              <SiFlutter />
            </div>

            <div className="orbit-icon absolute right-[5%] top-[10%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-lg text-blue-300 shadow-lg backdrop-blur sm:right-[7%] sm:top-[9%] sm:h-[52px] sm:w-[52px]">
              <SiDart />
            </div>

            <div className="orbit-icon absolute left-0 top-[43%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-lg text-blue-300 shadow-lg backdrop-blur sm:left-[1%] sm:h-[52px] sm:w-[52px]">
              <FaCode />
            </div>

            <div className="orbit-icon absolute right-0 top-[44%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-lg text-emerald-400 shadow-lg backdrop-blur sm:right-[1%] sm:h-[52px] sm:w-[52px]">
              <SiFirebase />
            </div>

            <div className="orbit-icon absolute bottom-[10%] left-[10%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-lg text-sky-400 shadow-lg backdrop-blur sm:bottom-[8%] sm:left-[13%] sm:h-[52px] sm:w-[52px]">
              <SiAndroid />
            </div>

            <div className="orbit-icon absolute bottom-[10%] right-[10%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-lg text-blue-300 shadow-lg backdrop-blur sm:bottom-[8%] sm:right-[13%] sm:h-[52px] sm:w-[52px]">
              <FaMobileAlt />
            </div>

            <div className="relative z-10 h-[245px] w-[245px] shrink-0 overflow-hidden rounded-full border border-blue-400/50 bg-[#111C2E] shadow-[0_0_45px_rgba(37,99,235,0.16)] sm:h-[315px] sm:w-[315px] lg:h-[355px] lg:w-[355px]">
              <img
                src="/portfolio.jpeg"
                alt="Kiran Fatima - App Developer"
                className="absolute inset-0 h-full w-full rounded-full object-cover object-center"
              />
            </div>

            <div className="absolute bottom-[5%] right-[1%] z-30 flex items-center gap-3 rounded-lg border border-slate-600/50 bg-[#111C2E]/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:bottom-[7%] sm:right-[4%] sm:px-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-500/15 text-lg text-blue-400">
                <FaChartBar />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-slate-50">
                  10+
                </p>
                <p className="text-[10px] text-slate-400">
                  Apps & Projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-700/60 bg-[#0D1728]/90 sm:grid-cols-3 lg:mt-5 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`hero-stat flex min-h-[100px] flex-col items-center justify-center gap-2 px-3 py-5 text-center transition hover:bg-blue-500/[0.04] sm:min-h-[110px] ${
                  index !== 0 ? "border-l border-slate-700/50" : ""
                } ${
                  index >= 2 ? "border-t border-slate-700/50 lg:border-t-0" : ""
                } ${
                  index === 3 ? "sm:border-l-0 lg:border-l" : ""
                }`}
              >
                <Icon className={`text-xl ${stat.color}`} />
                <p className="text-sm font-bold text-slate-100 sm:text-base">
                  {stat.value}
                </p>
                <p className="text-[10px] text-slate-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
