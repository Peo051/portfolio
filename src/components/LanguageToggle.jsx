import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function LanguageToggle({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  const isVietnamese = language === "vi";
  const nextLanguage = isVietnamese ? "en" : "vi";
  const label = isVietnamese ? "Tiếng Việt" : "English";
  const switchLabel = isVietnamese ? "Chuyển sang English" : "Switch to Vietnamese";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={switchLabel}
      className={`focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100 ${className}`}
    >
      <Languages size={14} className="text-sky-300" />
      <span>{label}</span>
      <span className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-sky-200">{nextLanguage.toUpperCase()}</span>
    </button>
  );
}

export default LanguageToggle;
