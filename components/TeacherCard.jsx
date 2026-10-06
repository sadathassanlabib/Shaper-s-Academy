const subjectTheme = {
  Physics: {
    chip: "bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700",
    grad: "from-sky-100 to-cyan-50",
    dot: "bg-sky-500",
  },
  Chemistry: {
    chip: "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700",
    grad: "from-emerald-100 to-teal-50",
    dot: "bg-emerald-500",
  },
  Biology: {
    chip: "bg-gradient-to-r from-lime-100 to-green-100 text-lime-700",
    grad: "from-lime-100 to-green-50",
    dot: "bg-lime-500",
  },
  "Higher Mathematics": {
    chip: "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700",
    grad: "from-violet-100 to-purple-50",
    dot: "bg-violet-500",
  },
  ICT: {
    chip: "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700",
    grad: "from-blue-100 to-indigo-50",
    dot: "bg-blue-500",
  },
  English: {
    chip: "bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700",
    grad: "from-rose-100 to-pink-50",
    dot: "bg-rose-500",
  },
  Economics: {
    chip: "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700",
    grad: "from-amber-100 to-orange-50",
    dot: "bg-amber-500",
  },
};

const fallbackTheme = {
  chip: "bg-slate-100 text-slate-700",
  grad: "from-slate-100 to-slate-50",
  dot: "bg-slate-400",
};

export default function TeacherCard({
  name,
  subject,
  qualification,
  image,
}) {
  const theme = subjectTheme[subject] || fallbackTheme;
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl sm:p-5">

      {/* Corner glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${theme.grad} opacity-70 blur-2xl`}
      />

      {/* Photo / Avatar */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full items-center justify-center bg-gradient-to-br ${theme.grad}`}
          >
            <div className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/70 text-xl font-black text-slate-800 shadow-sm backdrop-blur ring-1 ring-white/60">
                {initials}
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Photo Soon
              </p>
            </div>
          </div>
        )}

        {/* Subject chip floating top-right */}
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur ${theme.chip}`}
        >
          {subject}
        </span>
      </div>

      {/* Info */}
      <div className="relative mt-4">
        <h3 className="truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
          {name}
        </h3>

        <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} />
          {subject}
        </p>

        {qualification && (
          <>
            <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p className="line-clamp-2 text-xs leading-6 text-slate-500 sm:text-sm">
              🎓 {qualification}
            </p>
          </>
        )}
      </div>
    </div>
  );
}