import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { journey } from "../data/portfolioData";

function JourneySection() {
  return (
    <section id="journey" className="section-space">
      <SectionHeading
        eyebrow="Academic & Technical Journey"
        title="From software fundamentals to applied AI exploration."
        description="A growth path shaped by coursework, project implementation, competitions, and hands-on experimentation."
      />

      <div className="surface-card space-y-8 p-6 sm:p-8">
        {journey.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
