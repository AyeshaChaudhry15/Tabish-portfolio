"use client";

import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-900/30 bg-[#060B14] text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-[45%] top-[20%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-lg font-black text-blue-400">
                K
              </span>

              <span>
                Kiran
                <span className="text-blue-400">Fatima</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Building digital experiences that are fast, reliable, scalable,
              and designed to make a real impact.
            </p>

            <div className="mt-8 h-px w-12 bg-blue-500" />

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-400">
              Let&apos;s Connect
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/kiran-fatima-evermont"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>

              <Link
                href="https://github.com/kirankiran12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaGithub className="text-sm" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61594014940399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaFacebookF className="text-sm" />
              </Link>

              <Link
                href="https://www.instagram.com/kiranfatima.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaInstagram className="text-sm" />
              </Link>

              <Link
                href="https://www.tiktok.com/@ceo_kiranfatima"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaTiktok className="text-sm" />
              </Link>
            </div>
          </div>

          <div className="border-l border-blue-900/40 pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-400">
              Navigation
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              <Link
                href="/"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                About Me
              </Link>

              <Link
                href="/#skills"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                Skills
              </Link>

              <Link
                href="/#projects"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                Projects
              </Link>

              <Link
                href="/#experience"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                Experience
              </Link>
            </nav>
          </div>

          <div className="border-l border-blue-900/40 pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-400">
              Quick Links
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              <Link
                href="/#contact"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-blue-400"
              >
                Contact
              </Link>

              <p className="w-fit text-sm text-slate-400">Bahawalpur, PK</p>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                Available Worldwide
              </div>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-400">
              Our Location
            </p>

            <div
              id="location"
              className="mt-6 overflow-hidden rounded-2xl border border-blue-900/50 bg-[#0A1220] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <iframe
                  title="Evermont Global Technologies Location"
                  src="https://www.google.com/maps?q=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 bg-blue-900/5" />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-blue-900/50 px-5 py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-200">
                      Evermont Global Technologies
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Bahawalpur, Pakistan
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 items-center gap-2 text-xs font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  View Map
                  <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-blue-900/40 pt-7">
          <div className="flex w-full items-center justify-center text-center text-xs text-slate-500">
            <p>© 2026 Kiran Fatima. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
