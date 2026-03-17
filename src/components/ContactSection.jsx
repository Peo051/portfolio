import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { personalInfo, socialLinks, uiText } from "../data";

const socialMap = Object.fromEntries(socialLinks.map((item) => [item.id, item.href]));
const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function ContactSection({ language }) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFeedback(textByLang(uiText.contact.validation.required, language));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setFeedback(textByLang(uiText.contact.validation.invalidEmail, language));
      return;
    }

    setFeedback(textByLang(uiText.contact.validation.success, language));
  };

  return (
    <section id="contact" className="section-space">
      <SectionHeading
        eyebrow={textByLang(uiText.contact.eyebrow, language)}
        title={textByLang(uiText.contact.title, language)}
        description={textByLang(uiText.contact.description, language)}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AxisReveal axis="x-reverse" distance={20} amount={0.35} className="surface-card p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-slate-100">{textByLang(uiText.contact.title, language)}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{textByLang(personalInfo.currentGoal, language)}</p>

          <form className="mt-6 grid gap-3" onSubmit={onSubmit} noValidate>
            <p className="section-eyebrow">{textByLang(uiText.contact.formTitle, language)}</p>

            <label className="text-xs text-slate-300" htmlFor="contact-name">
              {textByLang(uiText.contact.formFields.name, language)}
            </label>
            <input
              id="contact-name"
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              className="focus-ring rounded-xl border border-line bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
            />

            <label className="text-xs text-slate-300" htmlFor="contact-email">
              {textByLang(uiText.contact.formFields.email, language)}
            </label>
            <input
              id="contact-email"
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              className="focus-ring rounded-xl border border-line bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
            />

            <label className="text-xs text-slate-300" htmlFor="contact-message">
              {textByLang(uiText.contact.formFields.message, language)}
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formState.message}
              onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
              className="focus-ring rounded-xl border border-line bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
            />

            <button type="submit" className="btn-primary w-fit">
              {textByLang(uiText.contact.formFields.submit, language)}
            </button>

            {feedback ? <p className="text-xs text-sky-200">{feedback}</p> : null}
          </form>
        </AxisReveal>

        <AxisReveal axis="x" distance={20} delay={0.05} amount={0.35} className="surface-card p-6">
          <div className="grid gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Mail size={16} />
              {textByLang({ en: "Email", vi: "Email" }, language)}
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
            <a
              href={socialMap.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Github size={16} />
              {textByLang({ en: "GitHub", vi: "GitHub" }, language)}
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
            <a
              href={socialMap.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Linkedin size={16} />
              {textByLang({ en: "LinkedIn", vi: "LinkedIn" }, language)}
              <ArrowUpRight size={14} className="ml-auto" />
            </a>
          </div>
        </AxisReveal>
      </div>
    </section>
  );
}

export default ContactSection;
