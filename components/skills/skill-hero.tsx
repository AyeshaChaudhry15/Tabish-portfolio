"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import {
  FaArrowDown,
  FaBrain,
  FaCode,
  FaCogs,
  FaDatabase,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

export default function SkillsHero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const middleRingRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(outerRingRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(middleRingRef.current, {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(centerRef.current, {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      nodesRef.current.forEach((node, index) => {
        gsap.to(node, {
          y: index % 2 === 0 ? -8 : 8,
          duration: 2 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      gsap.to(orbitRef.current, {
        scale: 1.025,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const addNode = (element: HTMLDivElement | null) => {
    if (element && !nodesRef.current.includes(element)) {
      nodesRef.current.push(element);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-blue-900/30 bg-[#071426]">
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/12 blur-[140px]" />

      <div className="pointer-events-none absolute left-[35%] top-[30%] h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[140px]" />

      <div className="relative w-full px-6 pb-24 pt-28 sm:px-10 lg:px-14">
        {" "}
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-blue-400 to-cyan-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-blue-300">
                Mobile Application Development
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[60px]">
              Flutter App
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I build modern, scalable, and high-performance mobile applications
              using Flutter, Dart, Firebase, REST APIs, and clean development
              practices.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-400/15 bg-blue-500/[0.06] p-4 backdrop-blur-sm">
                <FaMobileAlt className="text-lg text-blue-300" />

                <p className="mt-3 text-sm font-semibold text-white">Flutter</p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Cross Platform
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/15 bg-blue-500/[0.06] p-4 backdrop-blur-sm">
                <FaDatabase className="text-lg text-cyan-300" />

                <p className="mt-3 text-sm font-semibold text-white">
                  Firebase
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Cloud Services
                </p>
              </div>

              <div className="rounded-xl border border-blue-400/15 bg-blue-500/[0.06] p-4 backdrop-blur-sm">
                <FaServer className="text-lg text-blue-300" />

                <p className="mt-3 text-sm font-semibold text-white">
                  REST APIs
                </p>

                <p className="mt-1 text-[11px] text-slate-500">Integrations</p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#technical-skills"
                className="inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore My Skills
                <FaArrowDown className="text-xs" />
              </Link>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-3 rounded-xl border border-blue-400/30 bg-blue-400/10 px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:bg-blue-400/15 hover:text-blue-200"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Android & iOS
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Firebase Integration
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                API Integration
              </span>
            </div>
          </div>

          <div
            ref={orbitRef}
            className="relative mx-auto flex h-[500px] w-full max-w-[600px] items-center justify-center"
          >
            <div
              className="absolute inset-8 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(96,165,250,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage:
                  "radial-gradient(circle, black 20%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 20%, transparent 72%)",
              }}
            />

            <div
              ref={outerRingRef}
              className="absolute h-[430px] w-[430px] rounded-full border border-blue-400/30"
            >
              <div className="absolute left-[48%] top-[-5px] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

              <div className="absolute bottom-[18%] right-[1%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

              <div className="absolute bottom-[10%] left-[20%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
            </div>

            <div
              ref={middleRingRef}
              className="absolute h-[315px] w-[315px] rounded-full border border-cyan-400/25"
            >
              <div className="absolute left-[-6px] top-[42%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />

              <div className="absolute right-[12%] top-[-5px] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.9)]" />
            </div>

            <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-600/10 blur-[80px]" />

            <div
              ref={centerRef}
              className="relative z-20 flex h-[220px] w-[220px] rotate-45 items-center justify-center border border-blue-400/50 bg-[#071120]/95 shadow-[0_0_80px_rgba(59,130,246,0.22)]"
            >
              <div className="-rotate-45 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-500/10 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                  <FaMobileAlt className="text-2xl" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">Flutter</h3>

                <p className="mt-1 text-sm font-medium text-blue-300">
                  App Developer
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Mobile Applications
                </p>
              </div>
            </div>

            <div
              ref={addNode}
              className="absolute left-[1%] top-[35%] z-30 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/50 bg-[#091529] text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <FaCode className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-slate-300">Dart</p>

              <p className="text-xs text-slate-500">Programming</p>
            </div>

            <div
              ref={addNode}
              className="absolute right-[0%] top-[35%] z-30 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/50 bg-[#091529] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <FaDatabase className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-slate-300">
                Firebase
              </p>

              <p className="text-xs text-slate-500">Backend Services</p>
            </div>

            <div
              ref={addNode}
              className="absolute bottom-[0%] left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/50 bg-[#091529] text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <FaServer className="text-xl" />
              </div>

              <p className="mt-3 text-sm font-medium text-slate-300">
                REST APIs
              </p>

              <p className="text-xs text-slate-500">Integrations</p>
            </div>

            <div
              ref={addNode}
              className="absolute left-[22%] top-[8%] h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]"
            />

            <div
              ref={addNode}
              className="absolute right-[20%] bottom-[17%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
            />

            <div
              ref={addNode}
              className="absolute left-[30%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
