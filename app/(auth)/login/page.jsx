import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-50 px-5 py-14 sm:py-20">
      {/* Soft decorative blob */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm sm:p-10">
          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />

          {/* Logo badge */}
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-lg font-black text-white shadow-md shadow-blue-500/20">
            SA
          </div>

          {/* Brand */}
          <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Shaper's Academy
          </p>

          {/* Headline */}
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Login is coming{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              soon.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:leading-7">
            The student login system is currently under development. Please
            check back later.
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Info pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Coming Soon
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500 ring-1 ring-slate-100">
              Student Portal
            </span>
          </div>

          {/* CTA buttons — stacked mobile, inline sm+ */}
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition active:bg-blue-600 sm:py-3 sm:hover:-translate-y-0.5 sm:hover:bg-blue-600"
            >
              <span className="transition group-hover:-translate-x-0.5">←</span>
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition active:border-blue-500 active:text-blue-600 sm:py-3 sm:hover:-translate-y-0.5 sm:hover:border-blue-500 sm:hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-[11px] font-medium text-slate-400">
          We're working hard to bring this to you 💬
        </p>
      </div>
    </section>
  );
}