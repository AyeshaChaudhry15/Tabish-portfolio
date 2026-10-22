"use client";

import {
  FaMagnifyingGlass,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaCloudArrowUp,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: (
      <>
        Analyze requirements
        <br />
        and understand the
        <br />
        problem deeply.
      </>
    ),
    icon: FaMagnifyingGlass,
    accent: "blue",
  },
  {
    number: "02",
    title: "Plan & Architect",
    description: (
      <>
        Design efficient
        <br />
        architecture and plan
        <br />
        the right approach.
      </>
    ),
    icon: FaLightbulb,
    accent: "cyan",
  },
  {
    number: "03",
    title: "Develop",
    description: (
      <>
        Build clean, tested and
        <br />
        scalable solutions with
        <br />
        best practices.
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    number: "04",
    title: "Optimize",
    description: (
      <>
        Improve performance,
        <br />
        security and overall
        <br />
        user experience.
      </>
    ),
    icon: FaRocket,
    accent: "cyan",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description: (
      <>
        Deploy, monitor and
        <br />
        continuously enhance
        <br />
        the product.
      </>
    ),
    icon: FaCloudArrowUp,
    accent: "blue",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#060B14] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[-180px] h-[350px] w-[350px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

        <div className="absolute right-[8%] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        <div className="mb-14 flex items-center justify-center gap-6">
          <div className="hidden h-px w-14 bg-gradient-to-r from-transparent to-blue-500/70 sm:block" />

          <h2 className="text-center text-[20px] font-bold uppercase tracking-[0.24em] text-blue-400 sm:text-[24px]">
            My Development Approach
          </h2>

          <div className="hidden h-px w-14 bg-gradient-to-l from-transparent to-blue-500/70 sm:block" />
        </div>

        <div className="relative hidden lg:block">

          <div className="absolute left-[10%] right-[10%] top-[118px] h-px bg-gradient-to-r from-blue-500/80 via-cyan-400/70 to-blue-500/80" />

          <div className="absolute left-[18%] top-[114px] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

          <div className="absolute left-[38%] top-[114px] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

          <div className="absolute left-[58%] top-[114px] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

          <div className="absolute left-[78%] top-[114px] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isCyan = step.accent === "cyan";

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col items-center text-center"
                >

                  <div
                    className={`relative z-20 flex h-12 w-12 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-cyan-400/70 text-cyan-300"
                        : "border-blue-400/70 text-blue-300"
                    } bg-[#060B14] text-sm font-semibold transition-all duration-300 group-hover:scale-105 ${
                      isCyan
                        ? "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        : "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`relative z-10 mt-1 flex h-[105px] w-[105px] items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-cyan-400/60 group-hover:border-cyan-300"
                        : "border-blue-400/60 group-hover:border-blue-300"
                    } bg-[#060B14] transition-all duration-300 ${
                      isCyan
                        ? "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                        : "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                    }`}
                  >

                    <div
                      className={`absolute h-14 w-14 rounded-full blur-[26px] ${
                        isCyan
                          ? "bg-cyan-500/10"
                          : "bg-blue-500/10"
                      }`}
                    />

                    <Icon
                      className={`relative text-[34px] transition-transform duration-300 group-hover:scale-110 ${
                        isCyan
                          ? "text-cyan-400"
                          : "text-blue-400"
                      }`}
                    />
                  </div>

                  <h3 className="mt-7 text-[18px] font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCyan = step.accent === "cyan";

            return (
              <div
                key={step.number}
                className={`group rounded-2xl border ${
                  isCyan
                    ? "border-cyan-500/30 hover:border-cyan-400/60"
                    : "border-blue-500/30 hover:border-blue-400/60"
                } bg-[#07101D]/70 p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-cyan-400/60 text-cyan-300"
                        : "border-blue-400/60 text-blue-300"
                    } text-xs font-semibold`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${
                      isCyan
                        ? "border-cyan-400/50 text-cyan-400"
                        : "border-blue-400/50 text-blue-400"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-5 pl-[70px] text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}