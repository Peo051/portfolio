import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, uiText } from "../data";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = ["about", "journey", "skills", "projects", "achievements", "contact"];

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function Navbar({ activeSection, language, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarClasses = useMemo(
    () =>
      `mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-6 ${
        scrolled ? "border-line bg-slate-950/75 shadow-glow backdrop-blur-xl" : "border-transparent bg-transparent"
      }`,
    [scrolled]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <nav className={navbarClasses} aria-label="Primary navigation">
        <a href="#top" className="focus-ring text-sm font-semibold tracking-wide text-slate-100 sm:text-base">
          {siteConfig.nav.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${siteConfig.sections[item]}`}
                className={`focus-ring rounded-xl px-3 py-2 text-sm transition ${
                  activeSection === item
                    ? "bg-sky-400/12 text-sky-200"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-100"
                }`}
              >
                {textByLang(uiText.sectionLabels[item], language)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          </div>
          <a
            href={siteConfig.nav.ctaHref}
            className="focus-ring hidden rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 sm:inline-flex"
          >
            {textByLang(uiText.navCta, language)}
          </a>
          <button
            type="button"
            className="focus-ring inline-flex rounded-xl border border-line bg-slate-900/70 p-2 text-slate-200 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-slate-950/92 p-3 backdrop-blur-xl lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between rounded-xl border border-line bg-slate-900/60 px-3 py-2">
              <span className="text-xs text-slate-300">{textByLang(uiText.languageLabel, language)}</span>
              <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
            </div>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${siteConfig.sections[item]}`}
                    onClick={() => setOpen(false)}
                    className={`focus-ring block rounded-lg px-3 py-2 text-sm transition ${
                      activeSection === item ? "bg-sky-400/10 text-sky-200" : "text-slate-200 hover:bg-slate-800/80"
                    }`}
                  >
                    {textByLang(uiText.sectionLabels[item], language)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-2 inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 text-sm font-semibold text-slate-950"
                >
                  {textByLang(uiText.navCta, language)}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
