import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, socials } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import AxisReveal from "./AxisReveal";

const chips = [
  { vi: "Backend", en: "Backend" },
  { vi: "SQL", en: "SQL" },
  { vi: "AI ứng dụng", en: "Applied AI" },
  { vi: "Clean Architecture", en: "Clean Architecture" }
];

const socialIcons = {
  github: Github,
  email: Mail,
  linkedin: Linkedin
};

function HeroSection() {
  const { text, language } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 68]);
  const layerY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section id="top" ref={heroRef} className="relative flex min-h-[calc(100vh-6rem)] items-center py-16 sm:py-20">
      <motion.div style={{ y: layerY }} className="absolute inset-0 -z-10">
        <div className="absolute left-[2%] top-[8%] h-48 w-48 rounded-full bg-cyan-400/12 blur-[84px]" />
        <div className="absolute right-[8%] top-[6%] h-40 w-40 rounded-full bg-indigo-500/14 blur-[90px]" />
      </motion.div>

      <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div style={{ y: leftY }} className="space-y-7">
          <AxisReveal axis="y" distance={18} amount={0.45}>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-sky-200">
              {text(personalInfo.role)}
            </p>
          </AxisReveal>

          <AxisReveal axis="y" distance={24} delay={0.04} amount={0.45}>
            <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">{text(personalInfo.tagline)}</h1>
          </AxisReveal>

          <AxisReveal axis="y" distance={24} delay={0.08} amount={0.45}>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{text(personalInfo.summary)}</p>
          </AxisReveal>

          <AxisReveal axis="y" distance={20} delay={0.12} amount={0.45}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                {language === "vi" ? "Xem dự án" : "View Projects"} <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/30 hover:bg-slate-800"
              >
                {language === "vi" ? "Liên hệ" : "Contact Me"}
              </a>
            </div>
          </AxisReveal>

          <AxisReveal axis="x-reverse" distance={18} delay={0.16} amount={0.45}>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/60 px-3 py-2">
                <MapPin size={14} className="text-sky-300" /> {text(personalInfo.location)}
              </span>
              {socials.map((social) => {
                const Icon = socialIcons[social.id] || Mail;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/60 px-3 py-2 transition hover:border-sky-300/30 hover:text-slate-100"
                  >
                    <Icon size={14} /> {text(social.label)}
                  </a>
                );
              })}
            </div>
          </AxisReveal>
        </motion.div>

        <motion.div style={{ y: cardY }} className="relative">
          <AxisReveal axis="x" distance={24} delay={0.15} amount={0.35}>
            <div className="surface-card relative overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.2),transparent_42%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-line bg-slate-900/80 px-4 py-3 font-mono text-xs text-slate-300">
                  <span>engineer@workspace:~</span>
                  <span className="text-emerald-300">{language === "vi" ? "đang hoạt động" : "active"}</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {chips.map((chip, index) => (
                    <motion.div
                      key={chip.en}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ delay: 0.2 + index * 0.07, duration: 0.42 }}
                      className="rounded-2xl border border-line bg-slate-900/70 p-4"
                    >
                      <p className="font-mono text-xs uppercase tracking-wider text-sky-300/80">{language === "vi" ? "Trọng tâm" : "Focus"}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">{text(chip)}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-line bg-slate-900/70 p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-sky-300/80">
                    {language === "vi" ? "Sprint hiện tại" : "Current sprint"}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {language === "vi"
                      ? "Đào sâu kiến trúc backend và SQL, đồng thời chuyển các thử nghiệm AI từ notebook sang prototype có thể chạy."
                      : "Strengthening backend architecture and SQL fundamentals while shipping practical AI experiments from notebook to runnable prototype."}
                  </p>
                </div>
              </div>
            </div>
          </AxisReveal>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
