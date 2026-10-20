
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaArrowRight,
  FaDownload,
  FaBolt,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaCopy,
  FaCheck,
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
} from "react-icons/si";

const developerCode = `const kiran = {
  role: 'Flutter & App Developer',
  stack: ['Flutter', 'Dart', 'Firebase', 'Android'],
  passion: 'Building beautiful mobile experiences',
  focus: 'Clean code, performance, and great UX'
};

console.log(kiran);`;

const stats = [
  { value: "100%", label: "Code Quality" },
  { value: "10+", label: "Projects Built" },
  { value: "6+", label: "Core Technologies" },
];

const qualities = [
  {
    icon: FaBolt,
    label: "Clean Code",
    color: "text-blue-400",
  },
  {
    icon: FaBullseye,
    label: "Problem Solver",
    color: "text-sky-300",
  },
  {
    icon: FaLightbulb,
    label: "Innovative",
    color: "text-amber-400",
  },
  {
    icon: FaRocket,
    label: "Fast Learner",
    color: "text-blue-300",
  },
];

const techStack = [
  { icon: SiFlutter, label: "Flutter", color: "text-sky-400" },
  { icon: SiDart, label: "Dart", color: "text-blue-300" },
  { icon: SiFirebase, label: "Firebase", color: "text-amber-400" },
  { icon: SiAndroid, label: "Android", color: "text-emerald-400" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".code-card",
        { opacity: 0, x: 35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.to(".about-orbit-icon", {
        y: -8,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(developerCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate overflow-hidden bg-[#0B1220] py-20 text-slate-50 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-900/15 blur-[130px]" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sky-900/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.06),transparent_35%)]" />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-12">
        <div className="about-content">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              About Me
            </p>
          </div>

          <h2 className="max-w-[720px] font-serif text-4xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-3xl lg:text-4xl xl:text-[42px]">
            Building apps that
            <br className="hidden sm:block" /> make a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text text-transparent">
              real difference
            </span>
          </h2>

          <p className="mt-6 max-w-[680px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            I'm Kiran Fatima, an App Developer passionate about building
            reliable, intuitive, and scalable mobile applications. I work
            with Flutter, Dart, and Firebase to turn ideas into practical
            digital experiences with clean code and thoughtful UI/UX.
          </p>

          <div className="my-8 h-px w-full max-w-[690px] bg-slate-700/50" />

          <div className="grid max-w-[690px] grid-cols-3 gap-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="font-serif text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
                  {stat.value}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex max-w-[690px] flex-wrap gap-3">
            {qualities.map((quality) => {
              const Icon = quality.icon;

              return (
                <div
                  key={quality.label}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-slate-700/60 bg-[#111C2E]/70 px-3.5 py-3 transition duration-300 hover:border-blue-400/50 hover:bg-blue-500/[0.06] sm:px-4"
                >
                  <Icon className={`text-sm ${quality.color}`} />
                  <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                    {quality.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/skills"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.12)] transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.22)]"
            >
              More About Me
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/cv.pdf"
              download
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-slate-600/60 bg-[#111C2E]/50 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-blue-400/60 hover:text-blue-300"
            >
              Download Resume
              <FaDownload className="text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[700px] lg:mx-0 lg:pl-2">
          <div className="about-orbit-icon absolute -right-2 -top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E] text-2xl text-sky-400 shadow-[0_0_25px_rgba(37,99,235,0.12)] sm:-right-4 sm:-top-6">
            <FaMobileAlt />
          </div>

          <div className="about-orbit-icon absolute -bottom-5 -left-3 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-slate-600/60 bg-[#111C2E] text-xl text-blue-300 shadow-lg sm:-left-5">
            <SiFlutter />
          </div>

          <div className="code-card overflow-hidden rounded-2xl border border-slate-700/70 bg-[#080F1D] shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
            <div className="flex min-h-[70px] items-center justify-between gap-3 border-b border-slate-700/60 px-4 sm:px-6">
              <div className="flex shrink-0 items-center gap-2.5">
                <span className="h-3.5 w-3.5 rounded-full bg-rose-500" />
                <span className="h-3.5 w-3.5 rounded-full bg-amber-400" />
                <span className="h-3.5 w-3.5 rounded-full bg-emerald-500" />
              </div>

              <p className="truncate font-mono text-xs text-slate-400 sm:text-sm">
                kiran.dart
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-slate-700/70 bg-slate-800/40 px-3 py-2 text-xs text-slate-300 transition hover:border-blue-400/50 hover:text-white"
                aria-label="Copy developer code"
              >
                {copied ? (
                  <FaCheck className="text-emerald-400" />
                ) : (
                  <FaCopy />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="overflow-x-auto px-5 py-7 sm:px-7 sm:py-8">
              <pre className="min-w-max font-mono text-[12px] leading-7 sm:text-sm sm:leading-8">
                <code>
                  <span className="text-sky-300">const</span>{" "}
                  <span className="text-blue-300">kiran</span>{" "}
                  <span className="text-slate-300">= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300">role</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    'Flutter & App Developer'
                  </span>
                  <span className="text-slate-300">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300">stack</span>
                  <span className="text-slate-400">: [</span>
                  <span className="text-emerald-300">'Flutter'</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">'Dart'</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">'Firebase'</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">'Android'</span>
                  <span className="text-slate-400">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300">passion</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    'Building beautiful mobile experiences'
                  </span>
                  <span className="text-slate-300">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300">focus</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    'Clean code, performance, and great UX'
                  </span>
                  {"\n"}
                  <span className="text-slate-300">{"};"}</span>
                  {"\n\n"}
                  <span className="italic text-slate-500">
                    {"// Turning ideas into useful mobile products"}
                  </span>
                  {"\n\n"}
                  <span className="text-sky-300">console</span>
                  <span className="text-slate-300">.</span>
                  <span className="text-blue-300">log</span>
                  <span className="text-slate-300">(</span>
                  <span className="text-blue-300">kiran</span>
                  <span className="text-slate-300">);</span>
                </code>
              </pre>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-700/60 px-4 py-5 sm:px-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-3.5 py-2.5 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                App Development
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-3.5 py-2.5 text-xs text-slate-300">
                <FaGlobe className="text-blue-400" />
                Cross-Platform Apps
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8">
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-slate-100"
                >
                  <Icon className={`text-lg ${tech.color}`} />
                  {tech.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
