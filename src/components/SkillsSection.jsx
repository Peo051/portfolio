import { Blocks, Bot, Code2, Database, Layers3, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { skills } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  languages: Code2,
  backend: Layers3,
  database: Database,
  frontend: Blocks,
  ai: Bot,
  tools: Wrench
};

function SkillsSection() {
  const { text, language } = useLanguage();

  return (
    <section id="skills" className="section-space">
      <SectionHeading
        eyebrow={language === "vi" ? "Kỹ Năng" : "Skills"}
        title={
          language === "vi"
            ? "Stack thực hành được xây qua dự án và vòng lặp cải tiến."
            : "A practical technical stack built through projects and iteration."
        }
        description={
          language === "vi"
            ? "Nhóm theo miền kỹ thuật để phản ánh cách mình triển khai giải pháp từ data/backend đến giao diện và toolchain."
            : "Grouped by engineering domains to reflect how I approach solution building from data and backend to interface and tooling."
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[group.id] || Code2;
          const axis = index % 3 === 0 ? "x-reverse" : index % 3 === 1 ? "y" : "x";

          return (
            <AxisReveal
              key={group.id}
              as="article"
              axis={axis}
              distance={20}
              delay={index * 0.05}
              amount={0.3}
              className="surface-card group p-5 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={14} />
                {text(group.title)}
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
            </AxisReveal>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
