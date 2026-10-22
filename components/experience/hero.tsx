"use client";

import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaBullseye,
  FaCode,
  FaUsers,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-blue-900/30 bg-[#071426] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-[-100px] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-180px] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          <div className="max-w-[760px]">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-3 w-3 rotate-45 bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.7)]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-400">
                My Experience
              </span>
            </div>

            <h2 className="font-serif text-[52px] font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-[45px] lg:text-[50px] xl:text-[55px]">
              Crafting Digital Experiences That
              Make an{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Impact.
              </span>
            </h2>

            <p className="mt-8 max-w-[680px] text-base leading-7 text-slate-400 sm:text-lg">
              I work across the entire development spectrum to build
              high-performing, scalable and user-focused solutions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-full border border-blue-500/25 bg-blue-500/[0.04] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              <span>Let's Work Together</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <FaArrowUpRightFromSquare className="text-xs" />
              </span>
            </Link>

            <div className="mt-12 grid max-w-[780px] grid-cols-1 sm:grid-cols-3">

              <div className="flex gap-4 border-b border-blue-900/30 pb-5 sm:border-b-0 sm:border-r sm:pr-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/5 text-blue-400">
                  <FaBullseye className="text-base" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Focused
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    On solving real
                    <br />
                    business problems
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-b border-blue-900/30 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:py-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-500/50 bg-cyan-500/5 text-cyan-400">
                  <FaCode className="text-base" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Quality
                  </h3>

                  <p className="mt-1 text-[14px] leading-5 text-slate-500">
                    Clean, maintainable and tested code
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-5 sm:pl-7 sm:pt-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/50 bg-blue-400/5 text-blue-300">
                  <FaUsers className="text-base" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Results
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Delivering value &
                    <br />
                    measurable impact
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[540px]">

            <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[90px]" />

            <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-500/20" />

            <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-400/20" />

            <div className="absolute h-[190px] w-[190px] rounded-full border border-blue-400/20" />

            <div className="absolute h-[340px] w-[340px] animate-[spin_18s_linear_infinite] rounded-full border border-transparent border-t-blue-400/70 border-r-cyan-400/30" />

            <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,1)]" />

            <div className="absolute right-[20%] top-[17%] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />

            <div className="absolute left-[12%] top-[48%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(96,165,250,1)]" />

            <div className="absolute right-[12%] top-[55%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]" />

            <div className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px]">

              <div className="absolute right-[15px] top-[10px] h-[185px] w-[145px] rotate-[12deg] rounded-2xl border border-blue-300/30 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent shadow-[0_0_45px_rgba(59,130,246,0.15)] backdrop-blur-md">
                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-blue-300/20 bg-blue-400/10" />

                <div className="absolute right-5 top-6 h-3 w-3 rounded-full bg-blue-200/80" />

                <div className="absolute bottom-8 left-5 right-5 space-y-2">
                  <div className="h-1.5 rounded-full bg-blue-300/30" />
                  <div className="h-1.5 w-3/4 rounded-full bg-blue-300/20" />
                </div>
              </div>

              <div className="absolute left-1/2 top-[42px] z-20 h-[205px] w-[155px] -translate-x-1/2 -rotate-[3deg] rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-blue-600/70 via-blue-700/60 to-[#071528] shadow-[0_0_50px_rgba(37,99,235,0.3)] backdrop-blur-xl">
                <div className="absolute left-7 top-8 h-3 w-20 rounded-full bg-cyan-300/60" />

                <div className="absolute left-7 top-[58px] h-2.5 w-24 rounded-full bg-blue-200/30" />

                <div className="absolute left-7 top-[78px] h-2.5 w-20 rounded-full bg-blue-200/20" />

                <div className="absolute bottom-8 left-7 right-7">
                  <div className="h-9 rounded-lg border border-cyan-300/20 bg-cyan-400/5" />
                </div>
              </div>

              <div className="absolute bottom-[35px] left-[28px] z-30 h-[190px] w-[150px] rotate-[-9deg] rounded-2xl border border-blue-300/50 bg-gradient-to-br from-[#172B4A] via-[#10243F] to-[#07101F] shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_35px_rgba(59,130,246,0.25)]">
                <div className="flex h-full items-center justify-center">
                  <span className="text-5xl font-black text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
                    &lt;/&gt;
                  </span>
                </div>
              </div>

              <div className="absolute bottom-[5px] left-1/2 z-10 h-[70px] w-[285px] -translate-x-1/2 rounded-[50%] border border-blue-400/50 bg-blue-500/[0.03] shadow-[0_0_35px_rgba(59,130,246,0.15)]" />

              <div className="absolute bottom-[22px] left-1/2 z-10 h-[42px] w-[230px] -translate-x-1/2 rounded-[50%] border border-cyan-400/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}