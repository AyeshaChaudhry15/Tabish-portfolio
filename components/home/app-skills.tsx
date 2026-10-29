
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
  { name: "Flutter", icon: SiFlutter, color: "text-[#3182FF]" },
  { name: "Dart", icon: SiDart, color: "text-[#3182FF]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#3182FF]" },
  { name: "Android", icon: FaAndroid, color: "text-[#3182FF]" },
  { name: "iOS", icon: FaApple, color: "text-[#3182FF]" },
  { name: "React Native", icon: FaReact, color: "text-[#3182FF]" },
  { name: "Kotlin", icon: SiKotlin, color: "text-[#3182FF]" },
  { name: "Swift", icon: SiSwift, color: "text-[#3182FF]" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-[#3182FF]" },
  { name: "Mobile UI/UX", icon: FaMobileAlt, color: "text-[#3182FF]" },
  { name: "REST APIs", icon: FaCode, color: "text-[#3182FF]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#3182FF]" },
  { name: "Cloud Services", icon: FaCloud, color: "text-[#3182FF]" },
  { name: "Database", icon: FaDatabase, color: "text-[#3182FF]" },
  { name: "VS Code", icon: VscCode, color: "text-[#3182FF]" },
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
      className="relative overflow-hidden bg-[#071630] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#071630] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#071630] to-transparent" />

      <div ref={trackRef} className="flex w-max items-center gap-3">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="skill-item flex shrink-0 items-center gap-3 rounded-full border border-[#3182FF]/40 bg-white px-5 py-3 text-sm font-semibold text-[#071630] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:border-[#3182FF] hover:bg-[#F0F6FF] hover:shadow-[0_0_20px_rgba(49,130,255,0.15)]"
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
