import { Compass, GraduationCap, MapPin, Target } from "lucide-react";
import AxisReveal from "./AxisReveal";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data";

const infoCards = [
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: personalInfo.location
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Education",
    value: `${personalInfo.school} - ${personalInfo.major}`
  },
  {
    id: "focus",
    icon: Compass,
    label: "Focus",
    value: "Backend engineering, system logic, and relational database design"
  },
  {
    id: "goal",
    icon: Target,
    label: "Current Goal",
    value: "Internship / Fresher opportunities with strong technical mentorship"
  }
];

function AboutSection() {
  return (
    <section id="about" className="section-space">
      <SectionHeading
        eyebrow="About"
        title="A software engineering profile centered on fundamentals and system-level thinking."
        description="I prioritize backend reliability, maintainable architecture, and technical clarity over superficial complexity."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <AxisReveal as="article" axis="x-reverse" distance={24} className="surface-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-100">{personalInfo.name}</h3>
          <p className="mt-1 text-sm text-sky-200">{personalInfo.role}</p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {personalInfo.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6">
            <p className="section-eyebrow">Currently Exploring</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {personalInfo.currentlyExploring.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {personalInfo.focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
        </AxisReveal>

        <div className="grid gap-4">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            const axis = index % 2 === 0 ? "x" : "y";

            return (
              <AxisReveal key={card.id} axis={axis} distance={16} delay={index * 0.05} className="surface-card p-4">
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">
                  <Icon size={13} />
                  {card.label}
                </p>
                <p className="mt-2 text-sm text-slate-200">{card.value}</p>
              </AxisReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
