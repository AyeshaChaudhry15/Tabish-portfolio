"use client";

import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#3182FF]/20 bg-[#071630] text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-[#3182FF]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-[#60A5FA]/10 blur-[120px]" />
        <div className="absolute left-[45%] top-[20%] h-[220px] w-[220px] rounded-full bg-[#3182FF]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3182FF]/10 text-lg font-black text-[#60A5FA]">
                T
              </span>

              <span>
                Tabish
                <span className="text-[#60A5FA]">Rajpoot</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Building digital experiences that are fast, reliable, scalable,
              and designed to make a real impact.
            </p>

            <div className="mt-5 h-px w-10 bg-[#3182FF]" />

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#60A5FA]">
              Let's Connect
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              <Link
                href="https://www.linkedin.com/in/muhammad-tabish-nadeem-529007322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:bg-[#3182FF] hover:text-white"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>

              <Link
                href="https://www.facebook.com/share/1DjZiuCkU8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:bg-[#3182FF] hover:text-white"
              >
                <FaFacebookF className="text-sm" />
              </Link>

              <Link
                href="https://www.instagram.com/evermontdeveloper?exln=bjl0NmtiZjl3eDh4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:bg-[#3182FF] hover:text-white"
              >
                <FaInstagram className="text-sm" />
              </Link>

              <Link
                href="https://www.tiktok.com/@ranatabishnadeem?_r=1&_t=ZS-9Ayut4TGXfJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:bg-[#3182FF] hover:text-white"
              >
                <FaTiktok className="text-sm" />
              </Link>
            </div>
          </div>

          <div className="border-l border-white/10 pl-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#60A5FA]">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/skills"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Skills
              </Link>

              <Link
                href="/projects"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/experience"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Experience
              </Link>
            </nav>
          </div>

          <div className="border-l border-white/10 pl-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#60A5FA]">
              Quick Links
            </p>

            <nav className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-fit text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </Link>

              <p className="w-fit text-sm text-slate-300">Bahawalpur, PK</p>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#3182FF] shadow-[0_0_10px_rgba(49,130,255,0.8)]" />
                Available Worldwide
              </div>

              <a
                href="https://wa.me/923458717993"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              >
                <FaWhatsapp className="shrink-0 text-base text-[#25D366]" />
                +92 3436943543
              </a>

              <a
                href="mailto:kiranfatima.tech@gmail.com"
                className="mt-1 flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              >
                <FaEnvelope className="shrink-0 text-sm text-[#60A5FA]" />
                info.tabishtech@gmail.com
              </a>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#60A5FA]">
              Our Location
            </p>

            <div
              id="location"
              className="mt-4 overflow-hidden rounded-2xl bg-[#0A1B3A] shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-[150px] w-full overflow-hidden">
                <iframe
                  title="Evermont Global Technologies Location"
                  src="https://www.google.com/maps?q=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 bg-[#3182FF]/5" />
              </div>

              <div className="flex items-center justify-between gap-3 bg-[#0A1B3A] px-4 py-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3182FF]/15 text-[#60A5FA]">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white">
                      Evermont Global Technologies
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Bahawalpur, Pakistan
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#60A5FA] transition hover:text-white"
                >
                  View Map
                  <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex w-full items-center justify-center text-center text-xs text-slate-400">
            <p>© 2026 Tabish Rajpoot. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
