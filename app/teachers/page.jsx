"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { teachers } from "@/data/teachers";

// ✅ Merge teachers by name — combine subjects into an array
function mergeTeachersByName(list) {
  const map = new Map();

  list.forEach((teacher) => {
    if (map.has(teacher.name)) {
      const existing = map.get(teacher.name);
      // Add subject if not already present
      if (!existing.subjects.includes(teacher.subject)) {
        existing.subjects.push(teacher.subject);
      }
    } else {
      map.set(teacher.name, {
        ...teacher,
        subjects: [teacher.subject],
      });
    }
  });

  return Array.from(map.values());
}

const mergedTeachers = mergeTeachersByName(teachers);

// All unique subjects (from merged list)
const allSubjects = [
  "All",
  ...new Set(mergedTeachers.flatMap((t) => t.subjects)),
];

export default function TeachersPage() {
  const [activeSubject, setActiveSubject] = useState("All");

  const filtered = useMemo(() => {
    if (activeSubject === "All") return mergedTeachers;
    return mergedTeachers.filter((t) =>
      t.subjects.includes(activeSubject)
    );
  }, [activeSubject]);

  return (
    <>
      {/* ═══════════ COMPACT HEADER ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative px-5 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Our Mentors
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Taught by people who{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                truly care.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Every class is led by teachers who make concepts click.
            </p>

            {/* ✅ Stats — merged teacher count */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold">
              <span className="rounded-full bg-white px-3 py-1.5 text-slate-700 ring-1 ring-slate-200">
                {mergedTeachers.length}+ Teachers
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 text-slate-700 ring-1 ring-slate-200">
                {allSubjects.length - 1} Subjects
              </span>
              <span className="rounded-full bg-blue-600 px-3 py-1.5 text-white">
                {filtered.length} Showing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HORIZONTAL SCROLL FILTERS ═══════════ */}
      <div className="sticky top-16 z-30 border-y border-slate-100 bg-white/95 backdrop-blur-xl sm:top-18">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {allSubjects.map((subject) => {
              const active = activeSubject === subject;
              return (
                <button
                  key={subject}
                  type="button"
                  onClick={() => setActiveSubject(subject)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    active
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-50 text-slate-600 active:bg-blue-50 active:text-blue-700"
                  }`}
                >
                  {subject}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════ TEACHERS GRID ═══════════ */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {filtered.map((teacher) => (
                <TeacherCard key={teacher.name} teacher={teacher} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-sm rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-2xl">
                🔍
              </div>
              <p className="mt-4 text-sm font-bold text-slate-900">
                No teachers found
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Try a different subject filter.
              </p>
              <button
                type="button"
                onClick={() => setActiveSubject("All")}
                className="mt-5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white active:bg-blue-600"
              >
                Show all teachers
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
              Learn with us
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Ready to learn from{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                the best?
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Explore programs or reach out — we'll help you find the right
              class.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg active:bg-blue-50 active:text-blue-700"
              >
                Explore Programs
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white active:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────── Teacher Card (multiple subjects) ─────────────── */
function TeacherCard({ teacher }) {
  const initials = teacher.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition active:border-blue-200 active:shadow-md sm:rounded-3xl sm:p-5 sm:hover:-translate-y-1 sm:hover:border-blue-200 sm:hover:shadow-xl">
      {/* Top accent — visible on hover/active */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 transition group-hover:opacity-100 group-active:opacity-100" />

      {/* Avatar */}
      <div className="relative mx-auto">
        <div className="rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-[2px] transition group-hover:scale-105">
          <div className="rounded-full bg-white p-0.5 sm:p-1">
            {teacher.image ? (
              <img
                src={teacher.image}
                alt={teacher.name}
                className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
              />
            ) : (
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-100 text-base font-black text-blue-700 sm:h-20 sm:w-20 sm:text-lg">
                {initials}
              </div>
            )}
          </div>
        </div>

        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-blue-500 ring-2 ring-white sm:h-3.5 sm:w-3.5" />
      </div>

      {/* Info */}
      <div className="mt-3 text-center sm:mt-4">
        <h3 className="line-clamp-2 text-xs font-extrabold leading-tight tracking-tight text-slate-900 sm:text-sm">
          {teacher.name}
        </h3>

        {/* ✅ All subjects shown as pills */}
        <div className="mt-2 flex flex-wrap justify-center gap-1">
          {teacher.subjects.map((subject) => (
            <span
              key={subject}
              className="inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-700 sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {subject}
            </span>
          ))}
        </div>

        {teacher.qualification && (
          <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-slate-500 sm:text-[11px] sm:leading-5">
            {teacher.qualification}
          </p>
        )}
      </div>
    </div>
  );
}