import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import AxisReveal from "./AxisReveal";
import { additionalExplorations, projectData } from "../data";

function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected projects that represent depth, not volume."
        description="A curated set of technical projects focused on backend workflow thinking, systems logic, and applied AI implementation."
      />

      <div className="space-y-7">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <AxisReveal axis="y" distance={18} amount={0.35} className="surface-card mt-8 p-6">
        <p className="section-eyebrow">Additional Technical Explorations</p>
        <p className="mt-3 text-sm text-slate-300">
          Supplementary practice areas that continue to support my core direction:
          <span className="text-slate-200"> {additionalExplorations.join(" · ")}</span>.
        </p>
      </AxisReveal>
    </section>
  );
}

export default ProjectsSection;
