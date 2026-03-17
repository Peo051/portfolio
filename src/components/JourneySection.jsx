import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { timelineData, uiText } from "../data";

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function JourneySection({ language }) {
  return (
    <section id="journey" className="section-space">
      <SectionHeading
        eyebrow={textByLang(uiText.journey.eyebrow, language)}
        title={textByLang(uiText.journey.title, language)}
        description={textByLang(uiText.journey.description, language)}
      />

      <div className="surface-card space-y-8 p-6 sm:p-8">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} language={language} />
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
