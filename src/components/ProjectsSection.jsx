import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import AxisReveal from "./AxisReveal";
import { additionalProjects, projects } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

function ProjectsSection({ onOpenCaseStudy }) {
  const { language } = useLanguage();

  return (
    <section id="projects" className="section-space">
      <SectionHeading
        eyebrow={language === "vi" ? "Dự Án Nổi Bật" : "Featured Projects"}
        title={
          language === "vi"
            ? "Tăng trưởng qua dự án: backend logic, system design và AI ứng dụng."
            : "Project-based growth across backend logic, system design, and applied AI."
        }
        description={
          language === "vi"
            ? "Các sản phẩm tiêu biểu thể hiện cách mình xử lý bài toán, triển khai nghiệp vụ và học qua thực thi."
            : "Selected works that show how I solve problems, implement business flow, and learn through execution."
        }
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} onOpenCaseStudy={onOpenCaseStudy} />
        ))}
      </div>

      <AxisReveal axis="y" distance={20} amount={0.4} className="surface-card mt-8 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">
          {language === "vi" ? "Các Project Kỹ Thuật Khác" : "Additional Engineering Projects"}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-100">
          {language === "vi" ? "Các implementation học thuật theo Java" : "Java-based academic implementations"}
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          {language === "vi"
            ? `Bao gồm các repository luyện thuật toán và học phần: ${additionalProjects.join(", ")}. Đây là vùng thực hành để tăng tính kỷ luật kỹ thuật và tốc độ triển khai.`
            : `Additional repositories including algorithmic and coursework-oriented implementations: ${additionalProjects.join(", ")}. These projects represent technical practice, experimentation, and engineering discipline.`}
        </p>
      </AxisReveal>
    </section>
  );
}

export default ProjectsSection;
