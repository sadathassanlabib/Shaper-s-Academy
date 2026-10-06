import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Students should understand what they are learning, why they are learning it, and how it connects to their academic goals.",
    emoji: "🎯",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "Regular classes, practice, revision, and a structured routine create steady academic progress.",
    emoji: "🔁",
  },
  {
    number: "03",
    title: "Confidence",
    description:
      "Strong preparation helps students approach examinations and academic challenges with confidence.",
    emoji: "🚀",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════ COMPACT HEADER ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative px-5 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              About Us
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Building a better way to{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                learn.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Focused learning, meaningful guidance, and consistent academic
              preparation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />

            {/* "Our Story" label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                Our Story
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                At Shaper's Academy, we believe education should be structured,
                understandable, and purposeful. Our goal is to create an
                environment where students can strengthen their fundamentals,
                maintain consistency, and gradually develop the confidence they
                need for their academic journey.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Rather than focusing only on completing a syllabus, we aim to
                encourage better learning habits, regular practice, and clear
                academic direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR APPROACH ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Our Approach
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Three principles guide{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                our work.
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Simple principles, applied consistently.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {values.map((value) => (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition active:border-blue-200 sm:rounded-3xl sm:p-6 sm:hover:-translate-y-1 sm:hover:border-blue-200 sm:hover:shadow-xl"
              >
                {/* Top accent (hover/active) */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 transition group-hover:opacity-100 group-active:opacity-100" />

                {/* Emoji + number */}
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-xl sm:h-14 sm:w-14 sm:text-2xl">
                    {value.emoji}
                  </span>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold tracking-widest text-blue-700">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-900 sm:mt-5 sm:text-xl">
                  {value.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-5 py-12 text-center sm:rounded-3xl sm:px-10 sm:py-16 lg:px-16">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">
                Our Mission
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-10 md:text-4xl md:leading-[1.2]">
                To help students learn with{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  clarity
                </span>
                , grow with{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  consistency
                </span>
                , and move forward with{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  confidence.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-6 sm:text-base sm:leading-7">
                We want every student to develop not only academic knowledge,
                but also the discipline and confidence needed for long-term
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CLOSING CTA ═══════════ */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-10 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Learn with purpose · Grow with practice · Succeed with confidence
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/programs"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition active:bg-blue-600 sm:py-3 sm:hover:-translate-y-0.5 sm:hover:bg-blue-600"
            >
              Explore Programs
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition active:border-blue-500 active:text-blue-600 sm:py-3 sm:hover:-translate-y-0.5 sm:hover:border-blue-500 sm:hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}