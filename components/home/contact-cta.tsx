"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071630] px-5 py-12 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#3182FF]/15 blur-[120px]" />

        <div className="absolute right-[12%] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(49,130,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="rounded-2xl border border-[#3182FF]/25 bg-[#0A1B3A]/85 px-6 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:px-10 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#3182FF]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#60A5FA] sm:text-xs">
                  Let&apos;s Work Together
                </p>
              </div>

              <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                Have a project in mind?
                <br />

                <span className="mt-1 inline-block text-xl">
                  Let&apos;s build something{" "}
                  <span className="bg-gradient-to-r from-[#3182FF] via-[#60A5FA] to-white bg-clip-text italic text-transparent">
                    amazing.
                  </span>
                </span>
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#3182FF] bg-[#3182FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(49,130,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#2563EB] hover:shadow-[0_0_30px_rgba(49,130,255,0.3)]"
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