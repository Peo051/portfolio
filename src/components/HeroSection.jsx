import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import AxisReveal from "./AxisReveal";
import { personalInfo, socialLinks } from "../data";
import profilePhoto from "../assets/profile.jpg";

const chipItems = ["Backend", ".NET", "SQL", "Clean Architecture", "AI Vision"];

const iconMap = {
  github: Github,
  email: Mail,
  linkedin: Linkedin
};

function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-6.2rem)] items-center pb-8 pt-14 sm:pt-18">
      <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <AxisReveal axis="y" distance={16} amount={0.5}>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-sky-200">
              {personalInfo.heroEyebrow}
            </p>
          </AxisReveal>

          <AxisReveal axis="y" distance={22} delay={0.04} amount={0.45}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
              {personalInfo.headline}
            </h1>
          </AxisReveal>

          <AxisReveal axis="y" distance={22} delay={0.08} amount={0.45}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{personalInfo.summary}</p>
          </AxisReveal>

          <AxisReveal axis="y" distance={16} delay={0.12} amount={0.45}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary focus-ring">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Contact Me
              </a>
            </div>
          </AxisReveal>

          <AxisReveal axis="x-reverse" distance={18} delay={0.16} amount={0.45}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/65 px-3 py-2">
                <MapPin size={14} className="text-cyan-300" /> {personalInfo.location}
              </span>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.id] || ArrowUpRight;
                const external = link.href.startsWith("http");
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/65 px-3 py-2 transition hover:border-sky-300/35 hover:text-slate-100"
                  >
                    <Icon size={14} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </AxisReveal>
        </div>

        <AxisReveal axis="x" distance={24} delay={0.1} amount={0.35} className="relative">
          <div className="surface-card p-5 sm:p-6">
            <div className="relative mx-auto max-w-sm">
              <div className="profile-frame">
                <img
                  src={profilePhoto}
                  alt="Profile of Tran Duong Gia Bao"
                  className="h-[460px] w-full rounded-3xl object-cover object-center"
                  loading="lazy"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 top-10 rounded-2xl border border-line bg-slate-900/85 px-3 py-2 text-xs font-medium text-slate-200 shadow-card backdrop-blur"
              >
                Backend First
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 bottom-12 rounded-2xl border border-line bg-slate-900/85 px-3 py-2 text-xs font-medium text-slate-200 shadow-card backdrop-blur"
              >
                Systems Thinking
              </motion.div>
            </div>

            <div className="mt-5 rounded-2xl border border-line bg-slate-900/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sky-300/80">Engineering Snapshot</p>
              <div className="mt-3 space-y-1.5 font-mono text-xs text-slate-300">
                <p>
                  <span className="text-cyan-300">$</span> focus --domain backend-systems
                </p>
                <p>
                  <span className="text-cyan-300">$</span> stack --core .net aspnetcore sqlserver
                </p>
                <p>
                  <span className="text-cyan-300">$</span> learning --track applied-ai vision
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {chipItems.map((chip, index) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.16 + index * 0.05 }}
                  className="rounded-xl border border-line bg-slate-900/65 px-3 py-2 text-xs text-slate-200"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </AxisReveal>
      </div>
    </section>
  );
}

export default HeroSection;
