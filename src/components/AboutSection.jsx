import { motion } from "framer-motion";
import { Compass, GraduationCap, MapPin, Radar, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { highlights, personalInfo } from "../data/portfolioData";

const cards = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: GraduationCap, label: "Education", value: "HUIT - Information Technology" },
  { icon: Compass, label: "Focus Areas", value: "Backend, Architecture, Database" },
  { icon: Target, label: "Current Goal", value: "Internship / Junior Engineering Role" },
  { icon: Radar, label: "Currently Exploring", value: "AI, Computer Vision, Data-Driven Systems" }
];

function AboutSection() {
  return (
    <section id="about" className="section-space">
      <SectionHeading
        eyebrow="About"
        title="Engineering mindset, product responsibility, and long-term growth."
        description="A practical profile built on software engineering fundamentals and project-based learning."
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="surface-card p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-slate-100">{personalInfo.name}</h3>
          <p className="mt-1 text-sm text-sky-200">{personalInfo.role}</p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {personalInfo.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </motion.article>

        <div className="grid gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="surface-card p-4"
              >
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-sky-300/80">
                  <Icon size={14} /> {card.label}
                </p>
                <p className="mt-2 text-sm text-slate-200">{card.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
