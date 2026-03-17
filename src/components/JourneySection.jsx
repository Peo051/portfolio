import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { timelineData } from "../data";

function JourneySection() {
  return (
    <section id="journey" className="section-space">
      <SectionHeading
        eyebrow="Technical Journey"
        title="Building engineering depth through focused stages of growth."
        description="A progression from core programming fundamentals to backend systems thinking and applied AI exploration."
      />

      <div className="surface-card space-y-8 p-6 sm:p-8">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
