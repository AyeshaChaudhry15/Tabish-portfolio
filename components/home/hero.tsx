"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiAndroid } from "react-icons/si";

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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".hero-content > *",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
        },
      )
        .fromTo(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.45",
        )
        .fromTo(
          ".hero-stat",
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3",
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
      className="relative isolate min-h-screen overflow-hidden bg-[#0B1220] text-slate-50"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[300px] w-[300px] rounded-full bg-blue-900/15 blur-[120px] sm:left-[28%] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div className="absolute right-[-80px] top-20 h-[280px] w-[280px] rounded-full bg-sky-900/10 blur-[120px] sm:right-[5%] sm:h-[400px] sm:w-[400px] sm:blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.08),transparent_45%)]" />
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-2 sm:px-8 sm:pt-4 lg:px-12 lg:pt-6">
        {" "}
        {/* Hero Grid */}
        <div className="grid items-center gap-10 lg:min-h-[500px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          {/* Content */}
          <div className="hero-content relative z-20 order-2 max-w-2xl lg:order-1">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-6 shrink-0 bg-blue-400 sm:w-7" />

              <p className="text-[9px] font-bold uppercase tracking-[0.20em] text-blue-300 sm:text-[10px] sm:tracking-[0.24em]">
                Flutter & App Developer
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] font-serif text-[40px] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[50px] xl:text-[60px]">
              I Build{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text text-transparent">
                Mobile Apps
              </span>
              <br />
              That Matter.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-[13px] leading-7 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7 md:text-base">
              I&apos;m Kiran Fatima, an App Developer crafting beautiful,
              scalable, and user-friendly mobile applications with Flutter,
              Dart, and Firebase.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#2F80FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.15)] transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] sm:w-auto"
              >
                View My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-slate-600/60 bg-slate-900/30 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300 sm:w-auto"
              >
                Contact Me
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-start gap-2.5">
              <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <p className="max-w-[350px] text-xs leading-5 text-slate-400">
                Open to exciting app development opportunities
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative order-1 mx-auto flex h-[310px] w-full max-w-[350px] items-center justify-center sm:h-[400px] sm:max-w-[460px] md:h-[450px] lg:order-2 lg:h-[470px] lg:max-w-none"
          >
            <div className="profile-glow absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[70px] md:h-[340px] md:w-[340px] lg:h-[370px] lg:w-[370px]" />

            <div className="orbit-ring absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 shadow-[0_0_35px_rgba(37,99,235,0.08)] sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[390px] lg:w-[390px]" />

            <div className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-500/20 bg-gradient-to-br from-blue-950/40 to-[#111C2E] sm:h-[295px] sm:w-[295px] md:h-[325px] md:w-[325px] lg:h-[365px] lg:w-[365px]" />

            <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111C2E] sm:h-[275px] sm:w-[275px] md:h-[305px] md:w-[305px] lg:h-[345px] lg:w-[345px]" />

            <div className="orbit-icon absolute left-[5%] top-[8%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-base text-sky-400 shadow-lg backdrop-blur sm:left-[7%] sm:top-[9%] sm:h-11 sm:w-11 sm:text-xl md:h-[52px] md:w-[52px]">
              <SiFlutter />
            </div>

            <div className="orbit-icon absolute right-[5%] top-[7%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-sm text-blue-300 shadow-lg backdrop-blur sm:right-[7%] sm:top-[9%] sm:h-11 sm:w-11 sm:text-lg md:h-[52px] md:w-[52px]">
              <SiDart />
            </div>

            <div className="orbit-icon absolute left-[1%] top-[43%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-sm text-blue-300 shadow-lg backdrop-blur sm:left-[1%] sm:h-11 sm:w-11 sm:text-lg md:h-[52px] md:w-[52px]">
              <FaCode />
            </div>

            <div className="orbit-icon absolute right-[1%] top-[43%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-sm text-emerald-400 shadow-lg backdrop-blur sm:right-[1%] sm:h-11 sm:w-11 sm:text-lg md:h-[52px] md:w-[52px]">
              <SiFirebase />
            </div>

            <div className="orbit-icon absolute bottom-[8%] left-[9%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-sm text-sky-400 shadow-lg backdrop-blur sm:bottom-[8%] sm:left-[13%] sm:h-11 sm:w-11 sm:text-lg md:h-[52px] md:w-[52px]">
              <SiAndroid />
            </div>

            <div className="orbit-icon absolute bottom-[8%] right-[9%] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E]/95 text-sm text-blue-300 shadow-lg backdrop-blur sm:bottom-[8%] sm:right-[13%] sm:h-11 sm:w-11 sm:text-lg md:h-[52px] md:w-[52px]">
              <FaMobileAlt />
            </div>

            <div className="relative z-10 h-[175px] w-[175px] shrink-0 overflow-hidden rounded-full border border-blue-400/50 bg-[#111C2E] shadow-[0_0_45px_rgba(37,99,235,0.16)] sm:h-[255px] sm:w-[255px] md:h-[295px] md:w-[295px] lg:h-[355px] lg:w-[355px]">
              <img
                src="/portfolio.jpeg"
                alt="Kiran Fatima - App Developer"
                className="absolute inset-0 h-full w-full rounded-full object-cover object-center"
              />
            </div>

            <div className="absolute bottom-[2%] right-[-1%] z-30 flex items-center gap-2 rounded-lg border border-slate-600/50 bg-[#111C2E]/95 px-2.5 py-2 shadow-xl backdrop-blur-md sm:bottom-[5%] sm:right-[3%] sm:gap-3 sm:px-3 sm:py-2.5 md:right-[4%] md:px-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/15 text-base text-blue-400 sm:h-9 sm:w-9 sm:text-lg">
                <FaChartBar />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-slate-50 sm:text-lg">
                  10+
                </p>

                <p className="text-[9px] text-slate-400 sm:text-[10px]">
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
                  index >= 2 ? "border-t border-slate-700/50 sm:border-t-0" : ""
                } ${index === 3 ? "sm:border-l-0 lg:border-l" : ""}`}
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

      <style jsx>{`
        @media (max-width: 640px) {
          #home {
            min-height: auto;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .hero-content {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .hero-content > div:first-child {
            justify-content: center;
          }

          .hero-content > p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content > div:nth-of-type(2) {
            justify-content: center;
          }

          .hero-content > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 500px) {
          .hero-stat:nth-child(2) {
            border-left: 1px solid rgba(51, 65, 85, 0.5) !important;
          }

          .hero-stat:nth-child(3),
          .hero-stat:nth-child(4),
          .hero-stat:nth-child(5) {
            border-left: 0 !important;
          }
        }

        @media (max-width: 380px) {
          .hero-content h1 {
            font-size: 36px;
          }

          .hero-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
