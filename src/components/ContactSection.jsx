import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState(false);

  const errors = {
    name: form.name.trim().length < 2,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    message: form.message.trim().length < 10
  };

  const hasError = touched && (errors.name || errors.email || errors.message);

  return (
    <section id="contact" className="section-space">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="I am looking for internship opportunities, collaborative projects, and environments where I can keep growing as an engineer."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="surface-card p-6"
        >
          <h3 className="text-xl font-semibold text-slate-100">Open to internships and engineering collaboration</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            If your team is building reliable software products and values clean implementation, I would be excited to
            connect and contribute.
          </p>

          <div className="mt-5 space-y-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="focus-ring flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Mail size={16} /> {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-2 rounded-xl border border-line bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/35 hover:text-slate-100"
            >
              <Github size={16} /> GitHub Profile
            </a>
          </div>
        </motion.article>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="surface-card p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setTouched(true);
            if (!errors.name && !errors.email && !errors.message) {
              window.location.href = `mailto:${personalInfo.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
                form.name
              )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
            }
          }}
          noValidate
        >
          <h3 className="text-lg font-semibold text-slate-100">Quick message</h3>
          <p className="mt-2 text-sm text-slate-300">UI-only form with basic validation and email handoff.</p>

          <div className="mt-5 space-y-4">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="focus-ring mt-2 w-full rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-slate-100"
                placeholder="Your name"
                required
              />
            </label>

            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="focus-ring mt-2 w-full rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-slate-100"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block text-sm text-slate-300">
              Message
              <textarea
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="focus-ring mt-2 h-32 w-full rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-slate-100"
                placeholder="Tell me about your project, team, or opportunity."
                required
              />
            </label>

            {hasError && (
              <p className="text-sm text-rose-300">Please enter a valid name, email, and a message with at least 10 characters.</p>
            )}

            <button
              type="submit"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Send Message <Send size={15} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
