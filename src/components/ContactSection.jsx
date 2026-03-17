import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { personalInfo, socialLinks } from "../data";

const socialMap = Object.fromEntries(socialLinks.map((item) => [item.id, item.href]));

function ContactSection() {
  return (
    <section id="contact" className="section-space">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s Build Something Meaningful"
        description="Open to internship and collaborative engineering opportunities where strong fundamentals and disciplined execution are valued."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
        <AxisReveal axis="x-reverse" distance={20} amount={0.35} className="surface-card p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-slate-100">Open to Internship Opportunities</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{personalInfo.currentGoal}</p>
        </AxisReveal>

        <AxisReveal axis="x" distance={20} delay={0.05} amount={0.35} className="surface-card p-6">
          <div className="grid gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Mail size={16} />
              Email
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
            <a
              href={socialMap.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
            <a
              href={socialMap.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
          </div>
        </AxisReveal>
      </div>
    </section>
  );
}

export default ContactSection;
