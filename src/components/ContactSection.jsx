import { useState } from "react";
import { Github, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AxisReveal from "./AxisReveal";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

function ContactSection() {
  const { language } = useLanguage();
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
        eyebrow={language === "vi" ? "Liên Hệ" : "Contact"}
        title={language === "vi" ? "Cùng xây một sản phẩm có ý nghĩa." : "Let's build something meaningful."}
        description={
          language === "vi"
            ? "Mình đang tìm cơ hội internship, dự án cộng tác và môi trường giúp phát triển như một kỹ sư sản phẩm."
            : "I am looking for internship opportunities, collaborative projects, and environments where I can keep growing as an engineer."
        }
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <AxisReveal as="article" axis="x-reverse" distance={20} amount={0.35} className="surface-card p-6">
          <h3 className="text-xl font-semibold text-slate-100">
            {language === "vi" ? "Sẵn sàng cho internship và cộng tác kỹ thuật" : "Open to internships and engineering collaboration"}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {language === "vi"
              ? "Nếu team của bạn xây sản phẩm phần mềm ổn định và ưu tiên code sạch, mình rất muốn kết nối và đóng góp."
              : "If your team is building reliable software products and values clean implementation, I would be excited to connect and contribute."}
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
              <Github size={16} /> {language === "vi" ? "Hồ sơ GitHub" : "GitHub Profile"}
            </a>
          </div>
        </AxisReveal>

        <AxisReveal as="form" axis="x" distance={20} delay={0.05} amount={0.35} className="surface-card p-6"
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
          <h3 className="text-lg font-semibold text-slate-100">{language === "vi" ? "Gửi tin nhắn nhanh" : "Quick message"}</h3>
          <p className="mt-2 text-sm text-slate-300">
            {language === "vi"
              ? "Form UI với validate cơ bản, gửi qua email client."
              : "UI-only form with basic validation and email handoff."}
          </p>

          <div className="mt-5 space-y-4">
            <label className="block text-sm text-slate-300">
              {language === "vi" ? "Họ tên" : "Name"}
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="focus-ring mt-2 w-full rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-slate-100"
                placeholder={language === "vi" ? "Tên của bạn" : "Your name"}
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
              {language === "vi" ? "Nội dung" : "Message"}
              <textarea
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="focus-ring mt-2 h-32 w-full rounded-xl border border-line bg-slate-900/70 px-3 py-2 text-slate-100"
                placeholder={
                  language === "vi"
                    ? "Chia sẻ ngắn về dự án, team hoặc cơ hội."
                    : "Tell me about your project, team, or opportunity."
                }
                required
              />
            </label>

            {hasError && (
              <p className="text-sm text-rose-300">
                {language === "vi"
                  ? "Vui lòng nhập tên hợp lệ, email hợp lệ và nội dung ít nhất 10 ký tự."
                  : "Please enter a valid name, email, and a message with at least 10 characters."}
              </p>
            )}

            <button
              type="submit"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              {language === "vi" ? "Gửi tin nhắn" : "Send Message"} <Send size={15} />
            </button>
          </div>
        </AxisReveal>
      </div>
    </section>
  );
}

export default ContactSection;
