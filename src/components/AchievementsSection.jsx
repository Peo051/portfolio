import { motion } from "framer-motion";
import { Award, BrainCircuit } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/portfolioData";

const icons = [Award, BrainCircuit];

function AchievementsSection() {
  return (
    <section id="achievements" className="section-space">
      <SectionHeading
        eyebrow="Achievements"
        title="Competition milestones that reflect discipline and initiative."
        description="Focused on technical challenge participation, not hype."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card p-6"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-slate-900/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={13} /> Achievement
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.context}</p>
              <p className="mt-3 rounded-xl border border-line bg-slate-900/70 p-3 text-sm text-slate-200">
                <span className="font-semibold text-sky-200">What it says about me:</span> {item.signal}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementsSection;
