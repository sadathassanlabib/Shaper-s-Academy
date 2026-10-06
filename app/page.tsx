import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { programs } from "@/data/programs";
import { teachers } from "@/data/teachers";
import { routineData } from "@/data/routine";

// Subjects that have at least one teacher
const availableSubjects = new Set(teachers.map((t) => t.subject));

export default function HomePage() {
  /* Programs: HSC only + only subjects with teachers */
  const programPreview = programs
    .filter((p) => p.title === "HSC")
    .map((p) => ({
      ...p,
      subjects: p.subjects.filter((s) => availableSubjects.has(s)),
    }))
    .filter((p) => p.subjects.length > 0)
    .slice(0, 3);

  const teacherPreview = teachers.slice(0, 8);

  const routinePreview = [
    { day: "Saturday", classes: routineData.Saturday },
    { day: "Sunday", classes: routineData.Sunday },
    { day: "Monday", classes: routineData.Monday },
  ];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Shaper's Academy · Since 2026
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[64px]">
              Where learning
              <br />
              becomes{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                a habit.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              A focused academic environment for HSC students where clarity,
              consistency, and confidence grow together — class after class.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
              >
                Explore Programs
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href="/routine"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
              >
                View Routine
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-6">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  {teachers.length}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Expert Teachers
                </p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  {programPreview.length}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  HSC Programs
                </p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  {availableSubjects.size}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Subjects
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
                  Why families choose us
                </span>
                <span className="text-2xl">🎓</span>
              </div>

              <div className="mt-6 space-y-5">
                <HeroFeature
                  icon="🎯"
                  title="Clear teaching"
                  text="Concepts explained step by step — no confusion left behind."
                />
                <HeroFeature
                  icon="📅"
                  title="Structured routine"
                  text="Fixed weekly schedule keeps students disciplined and prepared."
                />
                <HeroFeature
                  icon="👥"
                  title="Caring mentors"
                  text="Experienced teachers who guide with patience and purpose."
                />
              </div>

              <div className="mt-7 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-4">
                <p className="text-xs font-semibold text-slate-700">
                  ⭐ Trusted by students and parents
                </p>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  Join a growing community of HSC learners building strong
                  academic foundations.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] bg-gradient-to-br from-sky-100 to-blue-100" />
          </div>
        </div>
      </section>

      {/* ═══════════ VALUE STRIP ═══════════ */}
      <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              Our Promise
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Education built on{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                three pillars.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Simple principles. Applied consistently. That's how progress
              happens.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                icon: "🎯",
                title: "Clarity",
                text: "Understand the concepts before moving forward.",
              },
              {
                num: "02",
                icon: "🔁",
                title: "Consistency",
                text: "Build a disciplined academic routine.",
              },
              {
                num: "03",
                icon: "🚀",
                title: "Confidence",
                text: "Face exams and challenges with self-belief.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-2xl">
                    {v.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-100 transition group-hover:text-blue-100">
                    {v.num}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROGRAMS ═══════════ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
                Academic Programs
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Find your track.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                HSC programs across Science, Commerce, and Humanities —
                structured for real progress.
              </p>
            </div>

            <Link
              href="/programs"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              View all programs →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programPreview.map((program) => (
              <Link
                key={program.id}
                href="/programs"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {program.title} · Program
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                      {program.group}
                    </h3>
                  </div>

                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    →
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {program.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {program.subjects.slice(0, 4).map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-100"
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-500" />
                      {subject}
                    </span>
                  ))}
                  {program.subjects.length > 4 && (
                    <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
                      +{program.subjects.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {program.subjects.length} subjects
                    </span>
                    <span className="text-xs font-bold text-blue-600 transition group-hover:translate-x-0.5">
                      Enroll →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEACHERS ═══════════ */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              Our Mentors
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Taught by people who care.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Every class is led by teachers who make concepts click — no rush,
              no shortcuts.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            {teacherPreview.map((teacher) => {
              const initials = teacher.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <div
                  key={teacher.id}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <div className="rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-[2px] transition duration-300 group-hover:scale-105">
                      <div className="rounded-full bg-slate-50 p-1">
                        {teacher.image ? (
                          <img
                            src={teacher.image}
                            alt={teacher.name}
                            className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                          />
                        ) : (
                          <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-100 text-xl font-black text-blue-700 sm:h-28 sm:w-28 sm:text-2xl">
                            {initials}
                          </div>
                        )}
                      </div>
                    </div>

                    <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-blue-500 ring-2 ring-slate-50" />
                  </div>

                  <h3 className="mt-4 line-clamp-1 text-sm font-extrabold text-slate-900 sm:text-base">
                    {teacher.name}
                  </h3>

                  <span className="mt-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                    {teacher.subject}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
            >
              Meet all teachers →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ ROUTINE ═══════════ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              Weekly Routine
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Stay organized. Stay ahead.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              A clear weekly structure so students always know what's next.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routinePreview.map((day) => (
              <div
                key={day.day}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-800">
                    {day.day}
                  </h3>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-blue-600 ring-1 ring-blue-100">
                    {day.classes.length} class
                    {day.classes.length > 1 ? "es" : ""}
                  </span>
                </div>

                <ul className="divide-y divide-slate-100">
                  {day.classes.map((item, index) => (
                    <li
                      key={`${day.day}-${item.subject}-${index}`}
                      className="relative flex items-start gap-3 px-5 py-4 transition hover:bg-slate-50"
                    >
                      <span className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b from-sky-400 to-blue-600" />

                      <div className="min-w-0 flex-1 pl-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="truncate text-sm font-bold text-slate-900">
                            {item.subject}
                          </p>
                          <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-700">
                            {item.group}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] font-medium text-slate-500">
                          {item.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/routine"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
            >
              View full routine →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/90">
            Ready to begin?
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Start your journey with{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Shaper's Academy.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore our programs, check the routine, or reach out — we're happy
            to help you find the right path.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-700"
            >
              Explore Programs
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroFeature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-xl">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
          {title}
        </h3>
        <p className="mt-0.5 text-xs leading-6 text-slate-500 sm:text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}