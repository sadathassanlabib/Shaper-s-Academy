import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function ContactPage() {
  const contactItems = [
    {
      title: "Phone",
      value: siteInfo.contact.phone,
      emoji: "📞",
      href: `tel:${siteInfo.contact.phone}`,
    },
    {
      title: "Email",
      value: siteInfo.contact.email,
      emoji: "✉️",
      href: `mailto:${siteInfo.contact.email}`,
    },
    {
      title: "Location",
      value: siteInfo.address,
      emoji: "📍",
      href: null,
    },
  ];

  return (
    <>
      {/* ═══════════ COMPACT HEADER ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative px-5 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Contact Us
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              We'd love to{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                hear from you.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Have a question about programs, routine, or admission? Reach out
              anytime — we usually reply within a few hours.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT CARDS ═══════════ */}
      <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {contactItems.map((item) => {
              const CardWrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("mailto:")
                      ? undefined
                      : "_blank",
                    rel: "noreferrer",
                  }
                : {};

              return (
                <CardWrapper
                  key={item.title}
                  {...wrapperProps}
                  className="group relative block overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition active:border-blue-200 active:shadow-md sm:rounded-3xl sm:p-6 sm:hover:-translate-y-1 sm:hover:border-blue-200 sm:hover:shadow-xl"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 transition group-hover:opacity-100 group-active:opacity-100" />

                  {/* Emoji + Title */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-lg sm:h-12 sm:w-12 sm:text-xl">
                      {item.emoji}
                    </span>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                      {item.title}
                    </span>
                  </div>

                  {/* Value */}
                  <p className="mt-3 break-words text-sm font-bold leading-6 text-slate-900 sm:mt-4 sm:text-base sm:leading-7">
                    {item.value}
                  </p>

                  {/* Hint */}
                  {item.href && (
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-blue-600 sm:text-[11px]">
                      Tap to connect →
                    </p>
                  )}
                </CardWrapper>
              );
            })}
          </div>

          {/* ═══════════ BIG CTA CARD ═══════════ */}
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:mt-8 sm:rounded-3xl sm:p-8 lg:p-10">
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-100/60 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Let's Talk
              </span>

              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Connect with us
              </h2>

              <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                For admission information, class details, or any other academic
                inquiry — contact us directly through the channels below.
              </p>

              {/* Buttons — stacked mobile, inline sm+ */}
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-md transition active:bg-blue-600 sm:py-2.5 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:bg-blue-600"
                >
                  📞 Call Us
                </a>

                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition active:border-blue-500 active:text-blue-600 sm:py-2.5 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:border-blue-500 sm:hover:text-blue-600"
                >
                  ✉️ Email Us
                </a>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition active:border-blue-500 active:text-blue-600 sm:py-2.5 sm:text-sm sm:hover:-translate-y-0.5 sm:hover:border-blue-500 sm:hover:text-blue-600"
                >
                  🎯 View Programs
                </Link>
              </div>
            </div>
          </div>

          {/* ═══════════ INFO STRIP ═══════════ */}
          <div className="mt-5 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {[
              {
                emoji: "🕘",
                title: "Open Daily",
                text: "8:00 AM – 9:00 PM",
              },
              {
                emoji: "⚡",
                title: "Quick Reply",
                text: "Usually within a few hours",
              },
              {
                emoji: "🎓",
                title: "Admission Help",
                text: "Guidance for every step",
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 text-lg">
                  {info.emoji}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                    {info.title}
                  </p>
                  <p className="truncate text-[10px] text-slate-500 sm:text-[11px]">
                    {info.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL NOTE ═══════════ */}
      <section className="border-t border-slate-100 bg-white py-8 sm:py-10">
        <p className="px-5 text-center text-[11px] font-medium text-slate-400 sm:text-xs">
          Shaper's Academy · We're here to help 💬
        </p>
      </section>
    </>
  );
}