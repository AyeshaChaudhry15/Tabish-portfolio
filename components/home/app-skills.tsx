"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaMobileAlt,
  FaReact,
  FaAndroid,
  FaApple,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiAndroidstudio,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "text-sky-400",
  },
  {
    name: "Dart",
    icon: SiDart,
    color: "text-blue-400",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-amber-400",
  },
  {
    name: "Android",
    icon: FaAndroid,
    color: "text-emerald-400",
  },
  {
    name: "iOS",
    icon: FaApple,
    color: "text-slate-200",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    color: "text-purple-400",
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "text-orange-400",
  },
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    color: "text-green-400",
  },
  {
    name: "Mobile UI/UX",
    icon: FaMobileAlt,
    color: "text-pink-400",
  },
  {
    name: "REST APIs",
    icon: FaCode,
    color: "text-blue-300",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-400",
  },
  {
    name: "Cloud Services",
    icon: FaCloud,
    color: "text-sky-300",
  },
  {
    name: "Database",
    icon: FaDatabase,
    color: "text-blue-400",
  },
  {
    name: "VS Code",
    icon: VscCode,
    color: "text-blue-400",
  },
];

export default function AppSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      if (!track) return;

      const items = Array.from(track.querySelectorAll(".skill-item"));

      const totalWidth = items.slice(0, skills.length).reduce((total, item) => {
        return total + (item as HTMLElement).offsetWidth + 12;
      }, 0);

      gsap.fromTo(
        track,
        {
          x: 0,
        },
        {
          x: -totalWidth,
          duration: 35,
          ease: "none",
          repeat: -1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1220] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B1220] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B1220] to-transparent" />

      <div ref={trackRef} className="flex w-max items-center gap-3">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="skill-item flex shrink-0 items-center gap-3 rounded-full border border-slate-700/60 bg-[#0D1728]/90 px-5 py-3 text-sm font-semibold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition hover:border-blue-400/40 hover:bg-[#111C2E]"
            >
              <Icon className={`text-base ${skill.color}`} />

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
