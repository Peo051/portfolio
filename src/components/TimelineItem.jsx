import AxisReveal from "./AxisReveal";

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function TimelineItem({ item, index, language }) {
  const axis = index % 2 === 0 ? "x-reverse" : "x";

  return (
    <AxisReveal as="article" axis={axis} distance={18} delay={index * 0.05} className="relative pl-10">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_16px_rgba(56,189,248,0.75)]" />
      <span className="absolute left-[5px] top-6 h-[calc(100%-8px)] w-px bg-gradient-to-b from-sky-300/50 to-transparent" />

      <div className="flex flex-wrap items-center gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">{textByLang(item.phase, language)}</p>
        <span className="rounded-full border border-line bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-200">{textByLang(item.dateRange, language)}</span>
      </div>

      <h3 className="mt-2 text-lg font-semibold text-slate-100">{textByLang(item.title, language)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{textByLang(item.description, language)}</p>

      <ul className="mt-3 space-y-1.5">
        {item.highlights[language].map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.chips?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.chips.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-slate-900/65 px-2.5 py-1 text-[11px] text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </AxisReveal>
  );
}

export default TimelineItem;
