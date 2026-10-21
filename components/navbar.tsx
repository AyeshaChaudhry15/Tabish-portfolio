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
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#060B14]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/40 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-xl font-bold text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.08)] transition duration-300 group-hover:border-blue-300/70 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
            K
          </div>

          <span className="font-bold">
            Kiran
            <span className="text-[#4c8ef8]">Fatima</span>
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
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-300"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-[10px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
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
              ? "border-blue-400 bg-blue-500/10 text-white"
              : "border-blue-500/50 bg-blue-500/[0.04] text-slate-100 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
          }`}
        >
          Let's Connect
          <ArrowRight
            size={16}
            className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/5 text-slate-200 transition hover:border-blue-400/60 hover:bg-blue-500/10 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-blue-500/10 bg-[#07101F]/98 px-6 py-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-blue-500/10 px-2 py-4 text-sm font-semibold transition ${
                    active
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
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
