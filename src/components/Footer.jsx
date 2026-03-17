import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks, uiText } from "../data";

const socialMap = Object.fromEntries(socialLinks.map((item) => [item.id, item.href]));
const textByLang = (value, language) => (typeof value === "string" ? value : value?.[language] || "");

function Footer({ language }) {
  return (
    <footer className="relative z-10 border-t border-line/70 bg-slate-950/50 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row sm:px-8">
        <div>
          <p>
            {new Date().getFullYear()} &copy; {personalInfo.displayName}.
          </p>
          <p className="mt-1 text-xs text-slate-500">{textByLang(uiText.footer.microcopy, language)}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={socialMap.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-lg border border-line bg-slate-900/70 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-slate-100"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={socialMap.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-lg border border-line bg-slate-900/70 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-slate-100"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="focus-ring rounded-lg border border-line bg-slate-900/70 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-slate-100"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
