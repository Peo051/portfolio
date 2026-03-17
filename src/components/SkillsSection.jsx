import { motion } from "framer-motion";
import { Blocks, Bot, Code2, Database, Layers3, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";

const icons = {
  Languages: Code2,
  "Backend & Architecture": Layers3,
  Database,
  Frontend: Blocks,
  "AI / Data / Computer Vision": Bot,
  "Tools / Workflow": Wrench
};

function SkillsSection() {
  return (
    <section id="skills" className="section-space">
      <SectionHeading
        eyebrow="Skills"
        title="A practical technical stack built through projects and iteration."
        description="Grouped by engineering domains to reflect how I approach solution building from data and backend to interface and tooling."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[group.title] || Code2;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card group p-5 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={14} />
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-slate-900/70 px-3 py-1 text-xs text-slate-200 transition group-hover:border-sky-300/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
