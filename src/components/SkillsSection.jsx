import { Blocks, Bot, Code2, Database, Layers3, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { skillsData, uiText } from "../data";

const iconMap = {
  languages: Code2,
  "fullstack-web": Blocks,
  "backend-architecture": Layers3,
  database: Database,
  "ai-ml-vision": Bot,
  "desktop-tools": Wrench
};

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function SkillsSection({ language }) {
  return (
    <section id="skills" className="section-space">
      <SectionHeading
        eyebrow={textByLang(uiText.skills.eyebrow, language)}
        title={textByLang(uiText.skills.title, language)}
        description={textByLang(uiText.skills.description, language)}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((group, index) => {
          const Icon = iconMap[group.id] || Code2;
          const axis = index % 3 === 0 ? "x-reverse" : index % 3 === 1 ? "y" : "x";

          return (
            <AxisReveal
              key={group.id}
              as="article"
              axis={axis}
              distance={18}
              delay={index * 0.05}
              amount={0.3}
              className="surface-card group p-5 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={14} />
                {textByLang(group.title, language)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-slate-900/65 px-3 py-1 text-xs text-slate-200 transition group-hover:border-sky-300/35"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AxisReveal>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
