import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-panel/75 p-5 shadow-card backdrop-blur sm:p-7"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className={`relative grid gap-6 ${isEven ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`}>
        <div className={`${isEven ? "order-1" : "order-2"}`}>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-sky-300/80">{project.role}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-100">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Key Contributions</p>
            <ul className="mt-3 space-y-2">
              {project.contributions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <Sparkles size={14} className="mt-0.5 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 rounded-2xl border border-line bg-slate-900/70 p-3 text-sm text-slate-200">
            <span className="font-semibold text-sky-200">What I learned:</span> {project.impact}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={project.demo || "#"}
              className={`focus-ring inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                project.demo
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 hover:brightness-110"
                  : "cursor-not-allowed border border-line bg-slate-800/70 text-slate-400"
              }`}
              aria-disabled={!project.demo}
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className={`${isEven ? "order-2" : "order-1"} flex items-center`}>
          <div className="relative h-full min-h-52 w-full overflow-hidden rounded-2xl border border-line bg-slate-900/80 p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.2),transparent_45%)]" />
            <div className="relative h-full rounded-xl border border-sky-300/20 bg-slate-950/70 p-4 font-mono text-xs text-slate-300">
              <p className="text-sky-300">{project.title}.case</p>
              <p className="mt-3 text-slate-400">status: actively documented</p>
              <p className="mt-2 text-slate-400">focus: problem - build - learn</p>
              <p className="mt-2 text-slate-400">stack depth: practical implementation</p>
              <div className="mt-5 h-px w-full bg-line" />
              <p className="mt-4 text-slate-300">Engineering notes and implementation outcomes are summarized in this portfolio card.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
