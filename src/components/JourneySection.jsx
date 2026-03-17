import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { journey } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

function JourneySection() {
  const { language } = useLanguage();

  return (
    <section id="journey" className="section-space">
      <SectionHeading
        eyebrow={language === "vi" ? "Hành Trình Học Tập & Kỹ Thuật" : "Academic & Technical Journey"}
        title={language === "vi" ? "Từ nền tảng phần mềm đến AI ứng dụng." : "From software fundamentals to applied AI exploration."}
        description={
          language === "vi"
            ? "Lộ trình phát triển đi qua học phần, triển khai dự án, thi kỹ thuật và thử nghiệm thực tế."
            : "A growth path shaped by coursework, project implementation, competitions, and hands-on experimentation."
        }
      />

      <div className="surface-card space-y-8 p-6 sm:p-8">
        {journey.map((item, index) => (
          <TimelineItem key={`${item.year}-${item.title.en}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
