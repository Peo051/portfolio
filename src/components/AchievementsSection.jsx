import { Award, BrainCircuit } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { achievementsData, uiText } from "../data";
import databaseImage from "../assets/achievement-database.jpg";
import ricePestImage from "../assets/achievement-ai-rice-pest.jpg";
import skinCancerImage from "../assets/achievement-ai-skin-cancer.jpg";

const icons = [Award, BrainCircuit];
const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

const imageMap = {
  "../assets/achievement-database.jpg": databaseImage,
  "../assets/achievement-ai-rice-pest.jpg": ricePestImage,
  "../assets/achievement-ai-skin-cancer.jpg": skinCancerImage
};

function AchievementsSection({ language }) {
  return (
    <section id="achievements" className="section-space">
      <SectionHeading
        eyebrow={textByLang(uiText.achievements.eyebrow, language)}
        title={textByLang(uiText.achievements.title, language)}
        description={textByLang(uiText.achievements.description, language)}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {achievementsData.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          const axis = index % 2 === 0 ? "x-reverse" : "x";
          const singleImage = achievement.image ? imageMap[achievement.image] : null;
          const multipleImages = achievement.images?.map((src) => imageMap[src]).filter(Boolean) || [];

          return (
            <AxisReveal key={achievement.id} as="article" axis={axis} distance={18} delay={index * 0.06} amount={0.3} className="surface-card p-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-slate-900/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.13em] text-sky-300/80">
                <Icon size={13} />
                {textByLang({ en: "Achievement", vi: "Thanh tich" }, language)}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{textByLang(achievement.title, language)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{textByLang(achievement.context, language)}</p>
              <p className="mt-3 rounded-2xl border border-line bg-slate-900/65 px-4 py-3 text-sm leading-relaxed text-slate-200">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-sky-300/80">
                  {textByLang(uiText.achievements.reflection, language)}
                </span>
                {textByLang(achievement.reflection, language)}
              </p>

              {singleImage ? (
                <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-slate-900/70">
                  <img src={singleImage} alt={textByLang(achievement.title, language)} className="h-40 w-full object-cover" loading="lazy" />
                </div>
              ) : null}

              {multipleImages.length ? (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {multipleImages.map((src, imageIndex) => (
                    <div key={`${achievement.id}-${imageIndex}`} className="overflow-hidden rounded-2xl border border-line bg-slate-900/70">
                      <img src={src} alt={textByLang(achievement.title, language)} className="h-32 w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              ) : null}
            </AxisReveal>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementsSection;
