import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import AxisReveal from "./AxisReveal";
import { uiText } from "../data";

const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function ProjectCard({ project, index, language }) {
  const reversed = index % 2 === 1;
  const isRealLink = Boolean(project.repositoryVisible && project.github);

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
            <img
              src={project.thumbnail}
              alt={`${textByLang(project.title, language)} visual`}
              className="h-full min-h-56 w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        <div className={reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">{textByLang(project.category, language)}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-100">{textByLang(project.title, language)}</h3>
          <p className="mt-3 text-sm text-slate-200">{textByLang(project.valueSummary, language)}</p>

          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                <Sparkles size={13} className="text-cyan-300" />
                {textByLang(uiText.projects.labels.problemContext, language)}
              </p>
              <p className="mt-1.5">{textByLang(project.problemContext, language)}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">{textByLang(uiText.projects.labels.whatIBuilt, language)}</p>
              <p className="mt-1.5">{textByLang(project.whatIBuilt, language)}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">{textByLang(uiText.projects.labels.keyContributions, language)}</p>
              <ul className="mt-2 space-y-2">
                {project.keyContributions[language].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">{textByLang(uiText.projects.labels.whatILearned, language)}</p>
              <p className="mt-1.5">{textByLang(project.whatILearned, language)}</p>
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
              {textByLang({ en: "GitHub", vi: "GitHub" }, language)}
            </a>

            {isRealLink ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                {textByLang(uiText.projects.labels.viewRepository, language)} <ExternalLink size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-slate-800/65 px-4 py-2 text-sm font-semibold text-slate-400">
                {textByLang(uiText.projects.labels.repositoryPrivate, language)} <ArrowUpRight size={14} />
              </span>
            )}
          </div>
        </div>
      </div>
    </AxisReveal>
  );
}

export default ProjectCard;
