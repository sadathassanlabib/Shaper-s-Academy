"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Routine", href: "/routine" },
  { name: "Teachers", href: "/teachers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-black text-white shadow-md shadow-blue-500/20 sm:h-10 sm:w-10">
            SA
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
              SHAPER'S
            </div>
            <div className="text-[9px] font-bold tracking-[0.25em] text-slate-400 sm:text-[10px]">
              ACADEMY
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50/60 p-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all lg:px-4 lg:text-sm ${
                  active
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions — Join Us only */}
        <div className="hidden items-center md:flex">
          <Link
            href="/join"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg lg:px-5 lg:py-2.5 lg:text-sm"
          >
            Join Us →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition active:bg-blue-50 active:text-blue-600 md:hidden"
        >
          <span className="text-lg font-bold">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold transition ${
                      active
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-slate-700 active:bg-blue-50 active:text-blue-700"
                    }`}
                  >
                    <span>{item.name}</span>
                    {active ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    ) : (
                      <span className="text-slate-300">→</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-slate-900 px-4 py-3.5 text-center text-sm font-bold text-white shadow-md transition active:bg-blue-600"
            >
              Join Us →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}