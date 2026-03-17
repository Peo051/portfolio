import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { additionalProjects, projects } from "../data/portfolioData";

function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Project-based growth across backend logic, system design, and applied AI."
        description="Selected works that show how I solve problems, implement business flow, and learn through execution."
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="surface-card mt-8 p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">Additional Engineering Projects</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-100">Java-based academic implementations</h3>
        <p className="mt-2 text-sm text-slate-300">
          Additional repositories including algorithmic and coursework-oriented implementations: {additionalProjects.join(", ")}.
          These projects represent technical practice, experimentation, and engineering discipline across Java modules.
        </p>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
