import { Award, BrainCircuit } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { achievements } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const icons = [Award, BrainCircuit];

function AchievementsSection() {
  const { language, text } = useLanguage();

  return (
    <section id="achievements" className="section-space">
      <SectionHeading
        eyebrow={language === "vi" ? "Thành Tích" : "Achievements"}
        title={
          language === "vi"
            ? "Các dấu mốc thi kỹ thuật phản ánh tính kỷ luật và chủ động."
            : "Competition milestones that reflect discipline and initiative."
        }
        description={
          language === "vi"
            ? "Tập trung vào thực lực triển khai bài toán, không phô trương."
            : "Focused on technical challenge participation, not hype."
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];
          const axis = index % 2 === 0 ? "x-reverse" : "x";

          return (
            <AxisReveal key={item.title.en} as="article" axis={axis} distance={20} delay={index * 0.06} amount={0.3} className="surface-card p-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-slate-900/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={13} /> {language === "vi" ? "Thành tích" : "Achievement"}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{text(item.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text(item.context)}</p>
              <p className="mt-3 rounded-xl border border-line bg-slate-900/70 p-3 text-sm text-slate-200">
                <span className="font-semibold text-sky-200">{language === "vi" ? "Điều mình chứng minh được:" : "What it says about me:"}</span>{" "}
                {text(item.signal)}
              </p>
            </AxisReveal>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementsSection;
