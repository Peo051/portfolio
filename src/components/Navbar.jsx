import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

function Navbar({ activeSection }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { label: language === "vi" ? "Giới thiệu" : "About", href: "#about", id: "about" },
      { label: language === "vi" ? "Hành trình" : "Journey", href: "#journey", id: "journey" },
      { label: language === "vi" ? "Kỹ năng" : "Skills", href: "#skills", id: "skills" },
      { label: language === "vi" ? "Dự án" : "Projects", href: "#projects", id: "projects" },
      { label: language === "vi" ? "Thành tích" : "Achievements", href: "#achievements", id: "achievements" },
      { label: language === "vi" ? "Liên hệ" : "Contact", href: "#contact", id: "contact" }
    ],
    [language]
  );

  const actionLabel = language === "vi" ? "Xem dự án" : "View Projects";
  const menuLabel = language === "vi" ? "Mở menu" : "Toggle menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-6 ${
          scrolled ? "border-line bg-slate-900/65 shadow-glow backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="focus-ring text-sm font-semibold tracking-wide text-slate-100 sm:text-base">
          {personalInfo.displayName}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`focus-ring rounded-xl px-3 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-sky-400/15 text-sky-200"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden md:inline-flex" />
          <a
            href="#projects"
            className="focus-ring hidden rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 lg:inline-block"
          >
            {actionLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="focus-ring inline-flex rounded-xl border border-line bg-slate-900/70 p-2 text-slate-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={menuLabel}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-slate-900/90 p-3 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <LanguageToggle className="w-full justify-between px-3 py-2 text-[11px]" />
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-2 block rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 text-center text-sm font-semibold text-slate-950"
                >
                  {actionLabel}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
