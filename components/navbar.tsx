"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3A3032]/70 bg-[#100D0E]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B79B5B]/40 bg-gradient-to-br from-[#B79B5B]/20 to-[#6B4F52]/20 text-xl font-bold text-[#D6BE82] shadow-[0_0_25px_rgba(183,155,91,0.08)] transition duration-300 group-hover:border-[#D6BE82]/70 group-hover:shadow-[0_0_25px_rgba(183,155,91,0.18)]">
            T
          </div>

          <span className="font-bold text-[#F3EEE7]">
            Tabish
            <span className="text-[#C6A96B]">Rajpoot.</span>
          </span>
        </Link>

        <nav
          className="mx-auto hidden items-center gap-10 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-7 text-[14px] font-semibold transition duration-300 ${
                  active
                    ? "text-[#D6BE82]"
                    : "text-[#AFA6A4] hover:text-[#E0C98B]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-[10px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#B79B5B] to-[#D6BE82] transition-all duration-300 ${
                    active
                      ? "w-10 opacity-100"
                      : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={`group hidden shrink-0 items-center gap-3 rounded-lg border px-5 py-2.5 text-[13px] font-semibold transition duration-300 lg:inline-flex ${
            isActive("/contact")
              ? "border-[#B79B5B] bg-[#B79B5B] text-[#100D0E]"
              : "border-[#554A45] bg-[#171314] text-[#F3EEE7] hover:border-[#B79B5B] hover:bg-[#B79B5B]/10"
          }`}
        >
          Let's Connect
          <ArrowRight
            size={16}
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              isActive("/contact")
                ? "text-[#100D0E]"
                : "text-[#C6A96B]"
            }`}
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[#554A45] bg-[#171314] text-[#F3EEE7] transition hover:border-[#B79B5B]/60 hover:bg-[#B79B5B]/10 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#3A3032] bg-[#100D0E]/98 px-6 py-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-[#3A3032] px-2 py-4 text-sm font-semibold transition ${
                    active
                      ? "text-[#D6BE82]"
                      : "text-[#AFA6A4] hover:text-[#E0C98B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#B79B5B] px-5 py-3 text-sm font-semibold text-[#100D0E] transition hover:bg-[#D0B976]"
            >
              Let's Connect
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}