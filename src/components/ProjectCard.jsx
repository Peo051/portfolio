import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import AxisReveal from "./AxisReveal";

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  const isRealLink = project.github && !project.github.includes("PASTE_REAL_LINK_HERE");

  return (
    <AxisReveal
      as="article"
      axis={reversed ? "x" : "x-reverse"}
      distance={22}
      amount={0.25}
      className="group relative overflow-hidden rounded-3xl border border-line bg-panel/80 p-5 shadow-card backdrop-blur sm:p-7"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className={`relative grid gap-7 ${reversed ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
        <div className={reversed ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
          <div className="overflow-hidden rounded-2xl border border-line bg-slate-900/80">
            <img src={project.thumbnail} alt={`${project.title} visual`} className="h-full min-h-56 w-full object-cover object-center" loading="lazy" />
          </div>
        </div>

        <div className={reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-100">{project.title}</h3>
          <p className="mt-3 text-sm text-slate-200">{project.valueSummary}</p>

          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                <Sparkles size={13} className="text-cyan-300" />
                Problem / Context
              </p>
              <p className="mt-1.5">{project.problemContext}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">What I Built</p>
              <p className="mt-1.5">{project.whatIBuilt}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Key Contributions</p>
              <ul className="mt-2 space-y-2">
                {project.keyContributions.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">What I Learned</p>
              <p className="mt-1.5">{project.whatILearned}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={isRealLink ? project.github : "#"}
              target={isRealLink ? "_blank" : undefined}
              rel={isRealLink ? "noreferrer" : undefined}
              className={`focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                isRealLink
                  ? "border border-line bg-slate-900/70 text-slate-200 hover:border-sky-300/35 hover:text-slate-100"
                  : "cursor-not-allowed border border-line bg-slate-800/65 text-slate-400"
              }`}
              aria-disabled={!isRealLink}
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={isRealLink ? project.github : "#"}
              target={isRealLink ? "_blank" : undefined}
              rel={isRealLink ? "noreferrer" : undefined}
              className={`focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                isRealLink
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 hover:brightness-110"
                  : "cursor-not-allowed border border-line bg-slate-800/65 text-slate-400"
              }`}
              aria-disabled={!isRealLink}
            >
              View Repository {isRealLink ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
            </a>
          </div>
        </div>
      </div>
    </AxisReveal>
  );
}

export default ProjectCard;
