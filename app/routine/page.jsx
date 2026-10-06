"use client";

import { useState } from "react";
import { routineData, routineDays, routineMeta } from "@/data/routine";

const groups = ["Science", "Humanities", "Commerce"];

// Download PDF link
const ROUTINE_PDF_URL =
  "https://drive.google.com/file/d/1iup3Iw9AcDO8Cr2Oddlg6-aRKf92zVoe/view?usp=sharing";

export default function RoutinePage() {
  const [selectedGroup, setSelectedGroup] = useState("Science");

  const getFilteredRoutine = () => {
    const filtered = {};
    routineDays.forEach((day) => {
      const classes = (routineData[day] || []).filter(
        (item) => item.group === selectedGroup || item.group === "Common"
      );
      if (classes.length > 0) filtered[day] = classes;
    });
    return filtered;
  };

  const routine = getFilteredRoutine();
  const hasAnyClass = Object.keys(routine).length > 0;

  const totalClasses = Object.values(routine).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  return (
    <>
      {/* ═══════════ COMPACT HEADER ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative px-5 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Class Routine
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Plan your learning with{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                clarity.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Structured weekly routine to maintain consistency, balance, and
              focused preparation.
            </p>

            {/* ✅ Download PDF button */}
            <div className="mt-6 flex justify-center">
              <a
                href={ROUTINE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-[10px] sm:h-6 sm:w-6 sm:text-xs">
                  ⬇
                </span>
                Download Routine PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIME INFO ═══════════ */}
      <section className="px-5 pb-4 sm:px-6 sm:pb-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-lg">
              ☀️
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                Morning
              </p>
              <p className="truncate text-xs font-bold text-slate-800 sm:text-sm">
                {routineMeta.morning}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-lg">
              🌙
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                Evening
              </p>
              <p className="truncate text-xs font-bold text-slate-800 sm:text-sm">
                {routineMeta.evening}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STICKY GROUP TABS ═══════════ */}
      <div className="sticky top-16 z-30 border-y border-slate-100 bg-white/95 backdrop-blur-xl sm:top-18">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {groups.map((group) => {
              const active = selectedGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    active
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-50 text-slate-600 active:bg-blue-50 active:text-blue-700"
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════ ROUTINE ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          {hasAnyClass ? (
            <>
              <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-widest text-slate-400">
                {totalClasses} class{totalClasses > 1 ? "es" : ""} this week ·{" "}
                {Object.keys(routine).length} days
              </p>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                {routineDays.map((day) => {
                  const classes = routine[day] || [];
                  if (classes.length === 0) return null;

                  return (
                    <div
                      key={day}
                      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition active:border-blue-200 sm:rounded-3xl sm:hover:-translate-y-1 sm:hover:border-blue-200 sm:hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-2.5 sm:px-5 sm:py-3">
                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-800 sm:text-sm">
                          {day}
                        </h3>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold text-blue-600 ring-1 ring-blue-100 sm:px-2.5 sm:text-[10px]">
                          {classes.length}
                        </span>
                      </div>

                      <ul className="divide-y divide-slate-100">
                        {classes.map((item, index) => (
                          <li
                            key={`${day}-${item.time}-${item.subject}-${index}`}
                            className="relative flex items-start gap-2.5 px-4 py-3 transition active:bg-slate-50 sm:px-5 sm:py-3.5"
                          >
                            <span className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-full bg-gradient-to-b from-sky-400 to-blue-600 sm:top-3 sm:bottom-3 sm:w-1" />

                            <div className="min-w-0 flex-1 pl-1.5">
                              <div className="flex items-start justify-between gap-2">
                                <p className="truncate text-xs font-bold text-slate-900 sm:text-sm">
                                  {item.subject}
                                </p>
                                <span className="shrink-0 rounded-full bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-blue-700 sm:px-2 sm:text-[9px]">
                                  {item.group}
                                </span>
                              </div>

                              <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] text-slate-500 sm:text-[11px]">
                                <span className="font-medium">{item.time}</span>
                                {item.teacher && (
                                  <>
                                    <span className="text-slate-300">•</span>
                                    <span className="truncate">
                                      {item.teacher}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* ✅ Bottom Download CTA (for after scrolling) */}
              <div className="mt-8 flex justify-center">
                <a
                  href={ROUTINE_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <span className="text-base">📄</span>
                  Download Full PDF
                </a>
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-sm rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-2xl">
                📅
              </div>
              <p className="mt-4 text-sm font-bold text-slate-900">
                No routine yet
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {selectedGroup} routine will be published soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ INFO STRIP ═══════════ */}
      <section className="border-t border-slate-100 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Subject Groups
          </p>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              {
                emoji: "📘",
                title: "Common",
                text: "ICT and English for every student.",
              },
              {
                emoji: "🧪",
                title: "Science",
                text: "Biology, Physics, Chemistry & Math.",
              },
              {
                emoji: "📖",
                title: "Humanities",
                text: "Economics for Humanities students.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-lg">
                  {card.emoji}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}