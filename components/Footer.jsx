import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Routine", href: "/routine" },
    { name: "Teachers", href: "/teachers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "Facebook", emoji: "📘" },
    { name: "Messenger", emoji: "💬" },
    { name: "Phone", emoji: "📞" },
  ];

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* Mobile-first: stack on mobile, 3-col on md+ */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
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
            </div>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
              Focused learning, meaningful guidance, and a better path forward
              for HSC students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
              Quick Links
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-slate-600 transition active:text-blue-600 sm:text-sm sm:hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
              Connect
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-100 transition active:bg-blue-50 active:text-blue-700 sm:text-sm sm:hover:ring-blue-200"
                  >
                    <span className="text-base">{social.emoji}</span>
                    {social.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-[11px] font-medium text-slate-400 sm:text-xs">
            © 2026 Shaper's Academy · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}