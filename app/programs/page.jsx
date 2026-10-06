"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { programs } from "@/data/programs";
import { teachers } from "@/data/teachers";

// ✅ Subjects that have at least one teacher
const availableSubjects = new Set(teachers.map((t) => t.subject));

export default function ProgramsPage() {
  const [activeClass, setActiveClass] = useState("All");

  const visibleClasses = ["All", "HSC"];

  const filtered = useMemo(() => {
    const hscOnly = programs.filter((p) => p.title === "HSC");

    const withAvailableSubjects = hscOnly
      .map((program) => ({
        ...program,
        subjects: program.subjects.filter((s) => availableSubjects.has(s)),
      }))
      .filter((program) => program.subjects.length > 0);

    if (activeClass === "All") return withAvailableSubjects;
    return withAvailableSubjects.filter((p) => p.title === activeClass);
  }, [activeClass]);

  // ✅ UNIQUE subjects across all filtered programs
  const totalSubjects = new Set(
    filtered.flatMap((p) => p.subjects)
  ).size;

  return (
    <>
      {/* ═══════════ COMPACT HEADER ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative px-5 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Academic Programs
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Find your perfect{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                track.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              HSC-focused programs built to help you ace your exams with
              confidence.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold">
              <span className="rounded-full bg-white px-3 py-1.5 text-slate-700 ring-1 ring-slate-200">
                {filtered.length} Programs
              </span>
              {/* ✅ Unique subject count */}
              <span className="rounded-full bg-white px-3 py-1.5 text-slate-700 ring-1 ring-slate-200">
                {totalSubjects} Subjects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STICKY CLASS FILTER ═══════════ */}
      <div className="sticky top-16 z-30 border-y border-slate-100 bg-white/95 backdrop-blur-xl sm:top-18">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {visibleClasses.map((cls) => {
              const active = activeClass === cls;
              return (
                <button
                  key={cls}
                  type="button"
                  onClick={() => setActiveClass(cls)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    active
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-50 text-slate-600 active:bg-blue-50 active:text-blue-700"
                  }`}
                >
                  {cls}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════ PROGRAM CARDS ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {filtered.map((program) => (
                <div
                  key={program.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition active:border-blue-200 sm:rounded-3xl sm:p-6 sm:hover:-translate-y-1 sm:hover:border-blue-200 sm:hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 transition group-hover:opacity-100 group-active:opacity-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                        {program.title} Program
                      </p>
                      <h3 className="mt-0.5 text-base font-extrabold tracking-tight text-slate-900 sm:text-xl">
                        {program.group}
                      </h3>
                    </div>

                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
                      →
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    {program.description}
                  </p>

                  <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent sm:my-4" />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                      Subjects
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {program.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-100 sm:px-2.5 sm:py-1 sm:text-[11px]"
                        >
                          <span className="h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5" />
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 sm:pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                        {program.subjects.length} subjects
                      </span>

                      <Link
                        href="/contact"
                        className="rounded-full bg-slate-900 px-3.5 py-1.5 text-[11px] font-bold text-white transition active:bg-blue-600 sm:text-xs sm:hover:bg-blue-600"
                      >
                        Enroll →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-sm rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-2xl">
                🔍
              </div>
              <p className="mt-4 text-sm font-bold text-slate-900">
                No programs found
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Try a different filter.
              </p>
              <button
                type="button"
                onClick={() => setActiveClass("All")}
                className="mt-5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition active:bg-blue-600"
              >
                Show all programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative px-5 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">
              Ready to join?
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Start your journey with{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Shaper's Academy.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Reach out to enroll or ask any questions — we're here to help.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition active:bg-blue-50 active:text-blue-700 sm:hover:-translate-y-0.5 sm:hover:bg-blue-50 sm:hover:text-blue-700"
              >
                Contact Us
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href="/routine"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition active:bg-white/10 sm:hover:-translate-y-0.5 sm:hover:bg-white/10"
              >
                View Routine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}