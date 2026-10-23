"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

import {
  FaArrowRight,
  FaBolt,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaCopy,
  FaCheck,
  FaMobileAlt,
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
  {
    value: "100%",
    label: "Code Quality",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "6+",
    label: "Core Technologies",
  },
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
  {
    icon: SiFlutter,
    label: "Flutter",
    color: "text-sky-400",
  },
  {
    icon: SiDart,
    label: "Dart",
    color: "text-blue-300",
  },
  {
    icon: SiFirebase,
    label: "Firebase",
    color: "text-amber-400",
  },
  {
    icon: SiAndroid,
    label: "Android",
    color: "text-emerald-400",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(
      ".about-content > *"
    );

    const codeCard = sectionRef.current.querySelector(".code-card");

    const orbitIcons = sectionRef.current.querySelectorAll(
      ".about-orbit-icon"
    );

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 24,
        },
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

      if (codeCard) {
        gsap.fromTo(
          codeCard,
          {
            opacity: 0,
            x: 35,
          },
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
      }

      if (orbitIcons.length) {
        gsap.to(orbitIcons, {
          y: -8,
          duration: 2.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(developerCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative isolate overflow-hidden
        bg-[#0B1220]
        py-16
        text-slate-50
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -left-32
            top-20
            h-64
            w-64
            rounded-full
            bg-blue-900/15
            blur-[90px]
            sm:-left-40
            sm:h-80
            sm:w-80
            sm:blur-[110px]
            md:h-96
            md:w-96
            md:blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-28
            top-20
            h-64
            w-64
            rounded-full
            bg-sky-900/10
            blur-[90px]
            sm:-right-32
            sm:h-80
            sm:w-80
            sm:blur-[110px]
            md:h-96
            md:w-96
            md:blur-[140px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.06),transparent_35%)]" />
      </div>

      {/* Main Container */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-center
          gap-10
          px-4
          sm:gap-12
          sm:px-6
          md:gap-14
          md:px-8
          lg:grid-cols-[1.02fr_0.98fr]
          lg:gap-12
          lg:px-10
          xl:gap-16
          xl:px-12
          2xl:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="about-content mx-auto w-full max-w-[760px] lg:mx-0">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-blue-400 sm:w-8" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-[10px] sm:tracking-[0.24em] md:text-xs">
              About Me
            </p>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[720px]
              font-serif
              text-[30px]
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-50
              sm:text-4xl
              md:text-5xl
              lg:text-4xl
              xl:text-[42px]
            "
          >
            Building apps that
            <br className="hidden sm:block" /> make a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-200 bg-clip-text text-transparent">
              real difference
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[680px]
              text-[12px]
              leading-6
              text-slate-400
              sm:mt-6
              sm:text-sm
              sm:leading-7
              md:text-base
              md:leading-8
            "
          >
            I&apos;m Kiran Fatima, an App Developer passionate about building
            reliable, intuitive, and scalable mobile applications. I work with
            Flutter, Dart, and Firebase to turn ideas into practical digital
            experiences with clean code and thoughtful UI/UX.
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-full max-w-[690px] bg-slate-700/50 sm:my-8" />

          {/* Stats */}
          <div className="grid w-full max-w-[690px] grid-cols-3 gap-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <h3 className="font-serif text-xl font-bold text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:mt-2 sm:text-sm sm:leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Qualities */}
          <div className="mt-6 flex w-full max-w-[690px] flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {qualities.map((quality) => {
              const Icon = quality.icon;

              return (
                <div
                  key={quality.label}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-slate-700/60
                    bg-[#111C2E]/70
                    px-2.5
                    py-2
                    transition
                    duration-300
                    hover:border-blue-400/50
                    hover:bg-blue-500/[0.06]
                    sm:gap-2.5
                    sm:px-4
                    sm:py-3
                  "
                >
                  <Icon
                    className={`text-[10px] sm:text-sm ${quality.color}`}
                  />

                  <span className="whitespace-nowrap text-[9px] font-semibold text-slate-200 sm:text-xs md:text-sm">
                    {quality.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Link
              href="/skills"
              className="
                group
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-blue-600
                px-5
                py-3
                text-xs
                font-semibold
                text-white
                transition
                hover:-translate-y-0.5
                hover:bg-blue-500
                sm:min-h-14
                sm:w-auto
                sm:px-6
                sm:py-4
                sm:text-sm
              "
            >
              More About Me

              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 sm:text-sm" />
            </Link>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                border-slate-600/60
                bg-[#111C2E]/50
                px-5
                py-3
                text-xs
                font-semibold
                text-slate-100
                transition
                hover:border-blue-400/60
                hover:text-blue-300
                sm:min-h-14
                sm:w-auto
                sm:px-6
                sm:py-4
                sm:text-sm
              "
            >
              Contact Me

              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 sm:text-sm" />
            </Link>
          </div>
        </div>

        {/* RIGHT CODE SECTION */}
        <div
          className="
            relative
            mx-auto
            mt-4
            w-full
            min-w-0
            max-w-[700px]
            lg:mx-0
            lg:mt-0
          "
        >
          {/* Mobile Icon */}
          <div
            className="
              about-orbit-icon
              absolute
              -right-1
              -top-4
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-slate-600/60
              bg-[#111C2E]
              text-sm
              text-sky-400
              shadow-[0_0_25px_rgba(37,99,235,0.12)]
              sm:-right-3
              sm:-top-5
              sm:h-14
              sm:w-14
              sm:text-2xl
            "
          >
            <FaMobileAlt />
          </div>

          {/* Flutter Icon */}
          <div
            className="
              about-orbit-icon
              absolute
              -bottom-3
              -left-1
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-slate-600/60
              bg-[#111C2E]
              text-sm
              text-blue-300
              shadow-lg
              sm:-bottom-5
              sm:-left-4
              sm:h-14
              sm:w-14
              sm:text-xl
            "
          >
            <SiFlutter />
          </div>

          {/* Code Card */}
          <div
            className="
              code-card
              w-full
              min-w-0
              overflow-hidden
              rounded-xl
              border
              border-slate-700/70
              bg-[#080F1D]
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              sm:rounded-2xl
            "
          >
            {/* Header */}
            <div className="flex min-h-[54px] items-center justify-between gap-2 border-b border-slate-700/60 px-3 sm:min-h-[70px] sm:gap-3 sm:px-6">
              <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
                <span className="h-2 w-2 rounded-full bg-rose-500 sm:h-3.5 sm:w-3.5" />
                <span className="h-2 w-2 rounded-full bg-amber-400 sm:h-3.5 sm:w-3.5" />
                <span className="h-2 w-2 rounded-full bg-emerald-500 sm:h-3.5 sm:w-3.5" />
              </div>

              <p className="min-w-0 flex-1 truncate text-center font-mono text-[9px] text-slate-400 sm:text-xs">
                kiran.dart
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-md
                  border
                  border-slate-700/70
                  bg-slate-800/40
                  px-2
                  py-1.5
                  text-[8px]
                  text-slate-300
                  transition
                  hover:border-blue-400/50
                  hover:text-white
                  sm:gap-2
                  sm:px-3
                  sm:py-2
                  sm:text-xs
                "
                aria-label="Copy developer code"
              >
                {copied ? (
                  <FaCheck className="text-emerald-400" />
                ) : (
                  <FaCopy />
                )}

                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code */}
            <div className="w-full max-w-full overflow-x-auto px-3 py-5 sm:px-7 sm:py-8">
              <pre
                className="
                  w-max
                  min-w-full
                  font-mono
                  text-[9px]
                  leading-5
                  sm:text-xs
                  sm:leading-7
                  md:text-sm
                  md:leading-8
                "
              >
                <code>
                  <span className="text-sky-300">const</span>{" "}
                  <span className="text-blue-300">kiran</span>{" "}
                  <span className="text-slate-300">= {"{"}</span>
                  {"\n\n"}

                  {"  "}
                  <span className="text-blue-300">role</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    &apos;Flutter &amp; App Developer&apos;
                  </span>
                  <span className="text-slate-300">,</span>
                  {"\n"}

                  {"  "}
                  <span className="text-blue-300">stack</span>
                  <span className="text-slate-400">: [</span>
                  <span className="text-emerald-300">&apos;Flutter&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">&apos;Dart&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">
                    &apos;Firebase&apos;
                  </span>
                  <span className="text-slate-400">, </span>
                  <span className="text-emerald-300">
                    &apos;Android&apos;
                  </span>
                  <span className="text-slate-400">],</span>
                  {"\n"}

                  {"  "}
                  <span className="text-blue-300">passion</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    &apos;Building beautiful mobile experiences&apos;
                  </span>
                  <span className="text-slate-300">,</span>
                  {"\n"}

                  {"  "}
                  <span className="text-blue-300">focus</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-emerald-300">
                    &apos;Clean code, performance, and great UX&apos;
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

            {/* Footer */}
            <div className="flex flex-col gap-2 border-t border-slate-700/60 px-3 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:px-6 sm:py-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-3 py-2 text-[9px] text-slate-300 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                App Development
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-3 py-2 text-[9px] text-slate-300 sm:text-xs">
                <FaGlobe className="text-blue-400" />
                Cross-Platform Apps
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-5 grid grid-cols-2 gap-4 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4">
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.label}
                  className="flex items-center justify-center gap-2 text-[11px] text-slate-400 transition hover:text-slate-100 sm:text-xs"
                >
                  <Icon className={`text-base sm:text-lg ${tech.color}`} />
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