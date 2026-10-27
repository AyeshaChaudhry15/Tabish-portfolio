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
    <footer className="relative overflow-hidden border-t border-[#3A3032]/70 bg-[#100D0E] text-[#C2B8B5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-[#6B4F52]/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-[#5A3D42]/15 blur-[120px]" />
        <div className="absolute left-[45%] top-[20%] h-[220px] w-[220px] rounded-full bg-[#B79B5B]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-[#F3EEE7]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B79B5B]/40 bg-[#B79B5B]/10 text-lg font-black text-[#D6BE82]">
                T
              </span>

              <span>
                Tabish
                <span className="text-[#B79B5B]">Rajpoot</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#AFA6A4]">
              Building digital experiences that are fast, reliable, scalable,
              and designed to make a real impact.
            </p>

            <div className="mt-5 h-px w-10 bg-[#B79B5B]" />

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#D6BE82]">
              Let's Connect
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              <Link
                href="https://www.linkedin.com/in/kiran-fatima-evermont"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79B5B]/40 bg-[#B79B5B]/5 text-[#AFA6A4] transition duration-300 hover:-translate-y-1 hover:border-[#D6BE82] hover:bg-[#B79B5B]/10 hover:text-[#D6BE82]"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>

              <Link
                href="https://github.com/kirankiran12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79B5B]/40 bg-[#B79B5B]/5 text-[#AFA6A4] transition duration-300 hover:-translate-y-1 hover:border-[#D6BE82] hover:bg-[#B79B5B]/10 hover:text-[#D6BE82]"
              >
                <FaGithub className="text-sm" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61594014940399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79B5B]/40 bg-[#B79B5B]/5 text-[#AFA6A4] transition duration-300 hover:-translate-y-1 hover:border-[#D6BE82] hover:bg-[#B79B5B]/10 hover:text-[#D6BE82]"
              >
                <FaFacebookF className="text-sm" />
              </Link>

              <Link
                href="https://www.instagram.com/kiranfatima.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79B5B]/40 bg-[#B79B5B]/5 text-[#AFA6A4] transition duration-300 hover:-translate-y-1 hover:border-[#D6BE82] hover:bg-[#B79B5B]/10 hover:text-[#D6BE82]"
              >
                <FaInstagram className="text-sm" />
              </Link>

              <Link
                href="https://www.tiktok.com/@ceo_kiranfatima"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B79B5B]/40 bg-[#B79B5B]/5 text-[#AFA6A4] transition duration-300 hover:-translate-y-1 hover:border-[#D6BE82] hover:bg-[#B79B5B]/10 hover:text-[#D6BE82]"
              >
                <FaTiktok className="text-sm" />
              </Link>
            </div>
          </div>

          <div className="border-l border-[#3A3032]/70 pl-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D6BE82]">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                About
              </Link>

              <Link
                href="/skills"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                Skills
              </Link>

              <Link
                href="/projects"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                Projects
              </Link>

              <Link
                href="/experience"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                Experience
              </Link>
            </nav>
          </div>

          <div className="border-l border-[#3A3032]/70 pl-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D6BE82]">
              Quick Links
            </p>

            <nav className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-fit text-sm text-[#AFA6A4] transition hover:translate-x-1 hover:text-[#D6BE82]"
              >
                Contact
              </Link>

              <p className="w-fit text-sm text-[#AFA6A4]">Bahawalpur, PK</p>

              <div className="mt-1 flex items-center gap-2 text-sm text-[#AFA6A4]">
                <span className="h-2 w-2 rounded-full bg-[#B79B5B] shadow-[0_0_10px_rgba(183,155,91,0.8)]" />
                Available Worldwide
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923458717993"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 text-sm text-[#AFA6A4] transition hover:text-[#D6BE82]"
              >
                <FaWhatsapp className="shrink-0 text-base text-[#25D366]" />
                +92 3458717993
              </a>

              {/* Email */}
              <a
                href="mailto:kiranfatima.tech@gmail.com"
                className="mt-1 flex items-center gap-2 text-sm text-[#AFA6A4] transition hover:text-[#D6BE82]"
              >
                <FaEnvelope className="shrink-0 text-sm text-[#B79B5B]" />
                kiranfatima.tech@gmail.com
              </a>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D6BE82]">
              Our Location
            </p>

            <div
              id="location"
              className="mt-4 overflow-hidden rounded-2xl border border-[#3A3032]/70 bg-[#171314] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-[150px] w-full overflow-hidden">
                <iframe
                  title="Evermont Global Technologies Location"
                  src="https://www.google.com/maps?q=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 bg-[#6B4F52]/5" />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#3A3032]/70 px-4 py-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B79B5B]/10 text-[#D6BE82]">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#E6DED9]">
                      Evermont Global Technologies
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#7F7472]">
                      Bahawalpur, Pakistan
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Evermont%20Global%20Technologies%2C%20Bahawalpur%2C%20Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#D6BE82] transition hover:text-[#F3EEE7]"
                >
                  View Map
                  <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3A3032]/70 pt-5">
          <div className="flex w-full items-center justify-center text-center text-xs text-[#7F7472]">
            <p>© 2026 Tabish Rajpoot . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}