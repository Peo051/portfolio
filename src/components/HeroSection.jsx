import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, socials } from "../data/portfolioData";

const chips = ["Backend", "SQL", "AI", "Clean Architecture"];

const socialIcons = {
  GitHub: Github,
  Email: Mail,
  LinkedIn: Linkedin
};

function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-6rem)] items-center py-16 sm:py-20">
      <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-7"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-sky-200">
            {personalInfo.role}
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {personalInfo.tagline}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I am a software engineering student building dependable backend-oriented systems with clean architecture and
            database-first thinking, while actively expanding into applied AI and computer vision.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View Projects <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/30 hover:bg-slate-800"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/60 px-3 py-2">
              <MapPin size={14} className="text-sky-300" /> {personalInfo.location}
            </span>
            {socials.map((social) => {
              const Icon = socialIcons[social.label] || Mail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/60 px-3 py-2 transition hover:border-sky-300/30 hover:text-slate-100"
                >
                  <Icon size={14} /> {social.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="surface-card relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.2),transparent_42%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-line bg-slate-900/80 px-4 py-3 font-mono text-xs text-slate-300">
                <span>engineer@workspace:~</span>
                <span className="text-emerald-300">active</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {chips.map((chip, index) => (
                  <motion.div
                    key={chip}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.08 }}
                    className="rounded-2xl border border-line bg-slate-900/70 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-wider text-sky-300/80">Focus</p>
                    <p className="mt-2 text-sm font-semibold text-slate-100">{chip}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-line bg-slate-900/70 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-sky-300/80">Current sprint</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Strengthening backend architecture and SQL fundamentals while shipping practical AI experiments from
                  notebook to runnable prototype.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
