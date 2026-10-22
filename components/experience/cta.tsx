"use client";

import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060B14] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-120px] h-[260px] w-[260px] rounded-full bg-blue-600/[0.06] blur-[110px]" />

        <div className="absolute right-[12%] bottom-[-120px] h-[260px] w-[260px] rounded-full bg-cyan-500/[0.045] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[18px] border border-blue-500/20 bg-[#07101D]/80 px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10">

          <div className="pointer-events-none absolute left-[-100px] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[90px]" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-[650px]">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400 sm:text-[10px]">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-3 font-serif text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[36px]">
                Have a project in mind?
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let&apos;s build something amazing.
                </span>
              </h2>

              <p className="mt-4 max-w-[620px] text-xs leading-6 text-slate-400 sm:text-sm">
                From websites and SaaS platforms to custom applications and
                integrations, I&apos;m ready to help bring your idea to life.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">

              <Link
                href="Kiran.Fatima@email.com"
                className="group flex h-11 items-center gap-5 rounded-xl bg-blue-500 px-5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.18)] sm:h-12 sm:px-6 sm:text-sm"
              >
                <span>Start a Conversation</span>

                <FaArrowUpRightFromSquare className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}