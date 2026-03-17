import { Award, BrainCircuit } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { achievementsData } from "../data";

const icons = [Award, BrainCircuit];

function AchievementsSection() {
  return (
    <section id="achievements" className="section-space">
      <SectionHeading
        eyebrow="Achievements"
        title="Technical milestones built on initiative and execution."
        description="Recognition points that reflect problem-solving discipline and willingness to engage with real technical challenges."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {achievementsData.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          const axis = index % 2 === 0 ? "x-reverse" : "x";

          return (
            <AxisReveal key={achievement.id} as="article" axis={axis} distance={18} delay={index * 0.06} amount={0.3} className="surface-card p-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-slate-900/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={13} />
                Achievement
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{achievement.description}</p>
            </AxisReveal>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementsSection;
