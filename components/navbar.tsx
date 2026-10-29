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
    <header className="sticky top-0 z-50 w-full border-b border-[#3182FF]/20 bg-[#071630]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3182FF]/10 text-xl font-bold text-[#60A5FA] transition duration-300 group-hover:bg-[#3182FF]/20 group-hover:text-white">
            T
          </div>

          <span className="font-bold text-white">
            Tabish
            <span className="text-[#60A5FA]">Rajpoot.</span>
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
                    ? "text-[#60A5FA]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-[10px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3182FF] to-[#60A5FA] transition-all duration-300 ${
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
              ? "border-[#3182FF] bg-[#3182FF] text-white"
              : "border-[#3182FF]/40 bg-[#0A1B3A] text-white hover:border-[#60A5FA] hover:bg-[#102951]"
          }`}
        >
          Let's Connect
          <ArrowRight
            size={16}
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              isActive("/contact") ? "text-white" : "text-[#60A5FA]"
            }`}
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A1B3A] text-white transition hover:bg-[#102951] lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#3182FF]/20 bg-[#071630] px-6 py-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/10 px-2 py-4 text-sm font-semibold transition ${
                    active
                      ? "text-[#60A5FA]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#3182FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#60A5FA]"
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