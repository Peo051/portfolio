import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import AxisReveal from "./AxisReveal";
import { additionalExplorations, projectsData, uiText } from "../data";

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function ProjectsSection({ language }) {
  return (
    <section id="projects" className="section-space">
      <SectionHeading
        eyebrow={textByLang(uiText.projects.eyebrow, language)}
        title={textByLang(uiText.projects.title, language)}
        description={textByLang(uiText.projects.description, language)}
      />

      <div className="space-y-7">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} language={language} />
        ))}
      </div>

      <AxisReveal axis="y" distance={18} amount={0.35} className="surface-card mt-8 p-6">
        <p className="section-eyebrow">{textByLang(uiText.projects.additionalTitle, language)}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {additionalExplorations.map((item) => (
            <article key={item.title.en} className="rounded-2xl border border-line bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">{textByLang(item.title, language)}</h4>
              <p className="mt-1 text-xs text-slate-300">{textByLang(item.detail, language)}</p>
            </article>
          ))}
        </div>
      </AxisReveal>
    </section>
  );
}

export default ProjectsSection;
