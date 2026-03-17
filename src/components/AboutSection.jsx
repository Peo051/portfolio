import { Compass, GraduationCap, MapPin, Radar, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { highlights, personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

function AboutSection() {
  const { text, language } = useLanguage();

  const cards = [
    { icon: MapPin, label: { vi: "Địa điểm", en: "Location" }, value: personalInfo.location },
    { icon: GraduationCap, label: { vi: "Học vấn", en: "Education" }, value: personalInfo.school },
    {
      icon: Compass,
      label: { vi: "Mũi nhọn", en: "Focus Areas" },
      value: language === "vi" ? "Backend, kiến trúc hệ thống, cơ sở dữ liệu" : "Backend, architecture, database systems"
    },
    {
      icon: Target,
      label: { vi: "Mục tiêu hiện tại", en: "Current Goal" },
      value: language === "vi" ? "Vị trí Internship / Junior Engineer" : "Internship / Junior Engineering Role"
    },
    {
      icon: Radar,
      label: { vi: "Đang mở rộng", en: "Currently Exploring" },
      value: language === "vi" ? "AI ứng dụng, computer vision, hệ thống data-driven" : "Applied AI, computer vision, data-driven systems"
    }
  ];

  return (
    <section id="about" className="section-space">
      <SectionHeading
        eyebrow={language === "vi" ? "Giới Thiệu" : "About"}
        title={
          language === "vi"
            ? "Tư duy kỹ sư, trách nhiệm sản phẩm và lộ trình phát triển dài hạn."
            : "Engineering mindset, product responsibility, and long-term growth."
        }
        description={
          language === "vi"
            ? "Một profile thực hành, xây trên nền tảng kỹ thuật phần mềm và học qua dự án."
            : "A practical profile built on software engineering fundamentals and project-based learning."
        }
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <AxisReveal as="article" axis="x-reverse" distance={26} className="surface-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-100">{personalInfo.name}</h3>
          <p className="mt-1 text-sm text-sky-200">{text(personalInfo.role)}</p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {personalInfo.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.en}>{text(paragraph)}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item.en} className="chip">
                {text(item)}
              </span>
            ))}
          </div>
        </AxisReveal>

        <div className="grid gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const axis = index % 2 === 0 ? "x" : "y";

            return (
              <AxisReveal key={card.label.en} axis={axis} distance={16} delay={index * 0.05} className="surface-card p-4">
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-sky-300/80">
                  <Icon size={14} /> {text(card.label)}
                </p>
                <p className="mt-2 text-sm text-slate-200">{text(card.value)}</p>
              </AxisReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
