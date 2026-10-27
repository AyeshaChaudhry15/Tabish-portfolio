"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#100D0E] px-5 py-12 text-[#F3EEE7] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#6B4F52]/15 blur-[120px]" />

        <div className="absolute right-[12%] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#5A3D42]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(183,155,91,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="rounded-2xl border border-[#B79B5B]/20 bg-[#171314]/80 px-6 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-10 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#B79B5B]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D6BE82] sm:text-xs">
                  Let&apos;s Work Together
                </p>
              </div>

              <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-[#F3EEE7] sm:text-2xl lg:text-3xl">
                Have a project in mind?
                <br />

                <span className="mt-1 inline-block text-xl">
                  Let&apos;s build something{" "}
                  <span className="bg-gradient-to-r from-[#B79B5B] via-[#D6BE82] to-[#F3EEE7] bg-clip-text italic text-transparent">
                    amazing.
                  </span>
                </span>
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#B79B5B]/60 bg-[#B79B5B]/10 px-6 py-3 text-sm font-semibold text-[#D6BE82] shadow-[0_0_25px_rgba(183,155,91,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D6BE82] hover:bg-[#B79B5B]/20 hover:text-[#F3EEE7] hover:shadow-[0_0_30px_rgba(183,155,91,0.15)]"
              >
                Start a Conversation

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}