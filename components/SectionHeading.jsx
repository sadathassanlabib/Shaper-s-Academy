export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`max-w-2xl ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0f2a5f]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}