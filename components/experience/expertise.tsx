"use client";

import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaShieldHalved,
  FaGaugeHigh,
  FaPlug,
} from "react-icons/fa6";

const expertise = [
  {
    title: (
      <>
        Full Stack
        <br />
        Development
      </>
    ),
    description: (
      <>
        End-to-end web
        <br />
        applications
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    title: (
      <>
        API Design &
        <br />
        Integration
      </>
    ),
    description: (
      <>
        Robust APIs and
        <br />
        seamless integrations
      </>
    ),
    icon: FaPlug,
    accent: "cyan",
  },
  {
    title: <>Cloud & DevOps</>,
    description: (
      <>
        Reliable deployments
        <br />
        and infrastructure
      </>
    ),
    icon: FaCloud,
    accent: "blue",
  },
  {
    title: (
      <>
        Database Design
        <br />
        & Optimization
      </>
    ),
    description: (
      <>
        Structured, scalable
        <br />
        and optimized data
      </>
    ),
    icon: FaDatabase,
    accent: "cyan",
  },
  {
    title: (
      <>
        Security & Best
        <br />
        Practices
      </>
    ),
    description: (
      <>
        Secure, reliable
        <br />
        and compliant apps
      </>
    ),
    icon: FaShieldHalved,
    accent: "blue",
  },
  {
    title: (
      <>
        Performance
        <br />
        Optimization
      </>
    ),
    description: (
      <>
        Fast, efficient and
        <br />
        high-performing apps
      </>
    ),
    icon: FaGaugeHigh,
    accent: "cyan",
  },
];

export default function AreasOfExpertise() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#060B14] px-5 py-7 text-white sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-150px] h-[300px] w-[300px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[5%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[110px]" />
      </div>

      {/* Outer container */}
      <div className="relative mx-auto max-w-[1500px] rounded-[20px] border border-blue-900/40 bg-[#07101D]/70 px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] sm:px-7 lg:px-8">

        {/* Heading */}
        <div className="mb-7 flex items-center justify-center gap-5">
          <div className="hidden h-px w-12 bg-gradient-to-r from-transparent to-blue-500/70 sm:block" />

          <h2 className="text-center text-[19px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-[22px]">
            Areas of Expertise
          </h2>

          <div className="hidden h-px w-12 bg-gradient-to-l from-transparent to-blue-500/70 sm:block" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const isCyan = item.accent === "cyan";

            return (
              <div
                key={index}
                className={`group relative h-[220px] overflow-hidden rounded-2xl border ${
                  isCyan
                    ? "border-cyan-500/35 hover:border-cyan-400/60"
                    : "border-blue-500/35 hover:border-blue-400/60"
                } bg-[#060D19]/80 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#081321]`}
              >
                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full blur-[55px] ${
                    isCyan ? "bg-cyan-500/10" : "bg-blue-500/10"
                  }`}
                />

                {/* Icon */}
                <div className="relative flex h-[55px] items-center justify-center">
                  <div
                    className={`absolute h-16 w-16 rounded-full blur-[30px] ${
                      isCyan ? "bg-cyan-500/[0.08]" : "bg-blue-500/[0.08]"
                    }`}
                  />

                  <Icon
                    className={`relative text-[38px] transition-transform duration-300 group-hover:scale-110 ${
                      isCyan ? "text-cyan-400" : "text-blue-400"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="relative mt-4 min-h-[46px] text-center text-[15px] font-bold leading-6 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-center text-[12px] leading-6 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-14 ${
                    isCyan ? "bg-cyan-400" : "bg-blue-400"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}