function LanguageSwitcher({ language, onLanguageChange }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-line bg-slate-900/70 p-1" role="group" aria-label="Language switcher">
      {[
        { id: "en", label: "EN" },
        { id: "vi", label: "VI" }
      ].map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onLanguageChange(item.id)}
          className={`focus-ring rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
            language === item.id ? "bg-sky-400/20 text-sky-200" : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
          }`}
          aria-pressed={language === item.id}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
