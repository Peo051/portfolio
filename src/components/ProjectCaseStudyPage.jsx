import { ArrowLeft, ArrowUpRight, Clock3, Github, Layers3, Users2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import AxisReveal from "./AxisReveal";

function MetadataCard({ icon: Icon, label, value }) {
  return (
    <AxisReveal axis="y" distance={16} amount={0.45} className="surface-card p-4">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">
        <Icon size={14} />
        {label}
      </p>
      <p className="mt-2 text-sm text-slate-200">{value}</p>
    </AxisReveal>
  );
}

function BulletSection({ title, items }) {
  return (
    <AxisReveal axis="y" distance={18} amount={0.3} className="surface-card p-6">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="text-sm leading-relaxed text-slate-300">
            - {item}
          </li>
        ))}
      </ul>
    </AxisReveal>
  );
}

function ProjectCaseStudyPage({ project, onBackHome }) {
  const { language, text } = useLanguage();

  if (!project) {
    return (
      <main className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-8 sm:px-8">
        <div className="surface-card p-8">
          <h1 className="text-2xl font-semibold text-slate-100">{language === "vi" ? "Không tìm thấy project" : "Project not found"}</h1>
          <p className="mt-3 text-sm text-slate-300">
            {language === "vi"
              ? "Slug project không tồn tại hoặc đã thay đổi. Quay lại trang chính để chọn project khác."
              : "The project slug does not exist or has changed. Return to the portfolio to open another project."}
          </p>
          <button
            type="button"
            onClick={() => onBackHome("projects")}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35"
          >
            <ArrowLeft size={16} /> {language === "vi" ? "Quay lại portfolio" : "Back to portfolio"}
          </button>
        </div>
      </main>
    );
  }

  const metadata = [
    { icon: Clock3, label: language === "vi" ? "Thời lượng" : "Timeline", value: text(project.caseStudy.timeline) },
    { icon: Users2, label: language === "vi" ? "Nhân sự" : "Team", value: text(project.caseStudy.team) },
    { icon: Layers3, label: language === "vi" ? "Vai trò trọng tâm" : "Role Focus", value: text(project.caseStudy.roleFocus) }
  ];

  return (
    <main className="relative z-10 mx-auto max-w-5xl px-5 pb-24 pt-4 sm:px-8">
        <header className="sticky top-4 z-30 mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-slate-900/75 px-4 py-3 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => onBackHome("projects")}
            className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35"
          >
            <ArrowLeft size={15} /> {language === "vi" ? "Về trang chính" : "Back to portfolio"}
          </button>
          <LanguageToggle />
        </header>

        <AxisReveal axis="y" distance={24} amount={0.45} className="surface-card p-7 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-300/80">{text(project.role)}</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">{project.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{text(project.summary)}</p>
          <p className="mt-4 rounded-2xl border border-line bg-slate-900/70 p-4 text-sm text-slate-200">{text(project.caseStudy.overview)}</p>

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
              {language === "vi" ? "Demo trực tiếp" : "Live Demo"} <ArrowUpRight size={14} />
            </a>
          </div>
        </AxisReveal>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {metadata.map((meta) => (
            <MetadataCard key={meta.label} icon={meta.icon} label={meta.label} value={meta.value} />
          ))}
        </section>

        <section className="mt-8 grid gap-4">
          <AxisReveal axis="x-reverse" distance={18} amount={0.35} className="surface-card p-6">
            <h3 className="text-xl font-semibold text-slate-100">{language === "vi" ? "Thách thức cốt lõi" : "Core Challenge"}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{text(project.caseStudy.challenge)}</p>
          </AxisReveal>

          <BulletSection title={language === "vi" ? "Mục tiêu triển khai" : "Delivery Objectives"} items={project.caseStudy.objectives.map(text)} />
          <BulletSection title={language === "vi" ? "Thiết kế kiến trúc" : "Architecture Decisions"} items={project.caseStudy.architecture.map(text)} />
          <BulletSection title={language === "vi" ? "Quá trình thực thi" : "Execution Flow"} items={project.caseStudy.execution.map(text)} />
          <BulletSection title={language === "vi" ? "Kết quả đạt được" : "Outcomes"} items={project.caseStudy.outcomes.map(text)} />
          <BulletSection title={language === "vi" ? "Hướng phát triển tiếp" : "Next Iterations"} items={project.caseStudy.nextSteps.map(text)} />
        </section>
    </main>
  );
}

export default ProjectCaseStudyPage;
