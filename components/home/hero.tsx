
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
    color: "text-[#3182FF]",
  },
  {
    icon: FaMobileAlt,
    value: "Cross-Platform",
    label: "Mobile Apps",
    color: "text-[#60A5FA]",
  },
  {
    icon: FaCode,
    value: "Clean",
    label: "Code Architecture",
    color: "text-[#38BDF8]",
  },
  {
    icon: FaShieldAlt,
    value: "Secure",
    label: "AI Integration",
    color: "text-[#60A5FA]",
  },
  {
    icon: FaGlobe,
    value: "Modern",
    label: "User Experiences",
    color: "text-[#3182FF]",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const orbitOneRef = useRef<HTMLDivElement>(null);
  const orbitTwoRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".tech-card", {
        opacity: 0,
        scale: 0.6,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.6,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-stat", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.to(orbitOneRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to(orbitTwoRef.current, {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to(".tech-card", {
        y: -7,
        duration: 2.2,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.65,
        duration: 3,
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
      className="relative isolate min-h-screen overflow-hidden bg-[#071630] text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(49,130,255,0.10),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
        <div className="grid items-center gap-8 lg:min-h-[590px] lg:grid-cols-[1fr_0.95fr] lg:gap-4">
          <div className="hero-content relative z-10 order-2 max-w-2xl lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 sm:text-xs">
                Flutter & App Developer
              </span>
            </div>

            <h1 className="max-w-[650px] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[68px]">
              I Build
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Mobile Apps.
              </span>
              <span className="mt-1 block text-white">
                That Matter.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              I&apos;m Tabish, an App Developer crafting beautiful,
              scalable, and user-friendly mobile applications with Flutter,
              Dart, and Firebase.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#3182FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(49,130,255,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_12px_35px_rgba(49,130,255,0.3)]"
              >
                View My Work
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/[0.07]"
              >
                Contact Me
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs text-slate-400 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              </span>

              Open to exciting app development opportunities
            </div>
          </div>

          <div className="relative order-1 mx-auto flex h-[350px] w-full max-w-[360px] items-center justify-center sm:h-[470px] sm:max-w-[490px] md:h-[520px] lg:order-2 lg:h-[590px] lg:max-w-none">
            <div
              ref={glowRef}
              className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[75px] sm:h-[340px] sm:w-[340px] sm:blur-[100px] lg:h-[400px] lg:w-[400px]"
            />

            <div
              ref={orbitOneRef}
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 sm:h-[400px] sm:w-[400px] lg:h-[470px] lg:w-[470px]"
            >
              <span className="absolute left-[12%] top-[15%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_#3182FF]" />

              <span className="absolute bottom-[13%] right-[10%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_#22D3EE]" />
            </div>

            <div
              ref={orbitTwoRef}
              className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/15 sm:h-[350px] sm:w-[350px] lg:h-[415px] lg:w-[415px]"
            >
              <span className="absolute right-[8%] top-[22%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_15px_#60A5FA]" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-400/[0.03] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]" />

            <div
              ref={imageRef}
              className="relative z-10 h-[205px] w-[205px] overflow-hidden rounded-full border-2 border-blue-400/60 bg-[#0A1B3A] shadow-[0_0_0_8px_rgba(49,130,255,0.05),0_0_55px_rgba(49,130,255,0.2)] sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-t from-[#071630]/40 via-transparent to-blue-300/[0.05]" />

              <img
                src="/tabish.jpeg"
                alt="Tabish - Flutter and App Developer"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>

            <div className="tech-card absolute right-[4%] top-[9%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10213D] text-2xl text-[#60A5FA] shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:right-[7%] sm:top-[7%] sm:h-[66px] sm:w-[66px] sm:text-3xl">
              <SiFlutter />
            </div>

            <div className="tech-card absolute left-[1%] top-[34%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10213D] text-2xl text-cyan-300 shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:left-[0%] sm:top-[31%] sm:h-[66px] sm:w-[66px] sm:text-3xl">
              <FaCode />
            </div>

            <div className="tech-card absolute bottom-[10%] left-[8%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10213D] text-2xl text-blue-300 shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:bottom-[8%] sm:left-[10%] sm:h-[66px] sm:w-[66px] sm:text-3xl">
              <SiAndroid />
            </div>

            <div className="tech-card absolute right-[1%] top-[43%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10213D] text-2xl text-orange-300 shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:right-[0%] sm:top-[41%] sm:h-[66px] sm:w-[66px] sm:text-3xl">
              <SiDart />
            </div>

            <div className="tech-card absolute bottom-[20%] right-[7%] z-20 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#10213D] text-2xl text-cyan-300 shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:flex">
              <SiFirebase />
            </div>

            <div className="absolute bottom-[0%] right-[0%] z-30 flex items-center gap-3 rounded-xl border border-blue-400/20 bg-[#0A1B3A]/95 px-3 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-md sm:bottom-[3%] sm:right-[2%] sm:px-4 sm:py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-lg text-blue-300 sm:h-10 sm:w-10">
                <FaChartBar />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-white sm:text-lg">
                  10+
                </p>
                <p className="mt-1 whitespace-nowrap text-[9px] text-slate-400 sm:text-[10px]">
                  Apps & Projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-blue-400/20 bg-[#0A1B3A]/80 sm:grid-cols-3 lg:mt-4 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`hero-stat flex min-h-[100px] flex-col items-center justify-center gap-2 border-blue-400/15 px-3 py-5 text-center transition-colors duration-300 hover:bg-blue-500/[0.06] sm:min-h-[110px] ${
                  index !== 0 ? "border-l" : ""
                } ${index >= 2 ? "border-t sm:border-t-0" : ""} ${
                  index === 3 ? "sm:border-l-0 lg:border-l" : ""
                }`}
              >
                <Icon className={`text-xl ${stat.color}`} />

                <p className="text-sm font-bold text-white sm:text-base">
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
            border-left: 1px solid rgba(49, 130, 255, 0.2) !important;
          }

          .hero-stat:nth-child(3),
          .hero-stat:nth-child(4),
          .hero-stat:nth-child(5) {
            border-left: 0 !important;
          }
        }

        @media (max-width: 380px) {
          .hero-content h1 {
            font-size: 35px;
          }
        }
      `}</style>
    </section>
  );
}
