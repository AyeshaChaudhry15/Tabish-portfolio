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
    color: "text-[#C6A96B]",
  },
  {
    name: "Dart",
    icon: SiDart,
    color: "text-[#D6BE82]",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-[#D6BE82]",
  },
  {
    name: "Android",
    icon: FaAndroid,
    color: "text-[#B79B5B]",
  },
  {
    name: "iOS",
    icon: FaApple,
    color: "text-[#F3EEE7]",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "text-[#C6A96B]",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    color: "text-[#D6BE82]",
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "text-[#C6A96B]",
  },
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    color: "text-[#B79B5B]",
  },
  {
    name: "Mobile UI/UX",
    icon: FaMobileAlt,
    color: "text-[#D6BE82]",
  },
  {
    name: "REST APIs",
    icon: FaCode,
    color: "text-[#C6A96B]",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-[#B79B5B]",
  },
  {
    name: "Cloud Services",
    icon: FaCloud,
    color: "text-[#D6BE82]",
  },
  {
    name: "Database",
    icon: FaDatabase,
    color: "text-[#C6A96B]",
  },
  {
    name: "VS Code",
    icon: VscCode,
    color: "text-[#C6A96B]",
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
      className="relative overflow-hidden bg-[#100D0E] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#100D0E] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#100D0E] to-transparent" />

      <div ref={trackRef} className="flex w-max items-center gap-3">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="skill-item flex shrink-0 items-center gap-3 rounded-full border border-[#3A3032]/70 bg-[#171314]/90 px-5 py-3 text-sm font-semibold text-[#C2B8B5] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition hover:border-[#B79B5B]/60 hover:bg-[#211A1B]"
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