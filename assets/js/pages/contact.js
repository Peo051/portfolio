import { escapeHtml, icon } from "../utils/dom.js";
import { pageHero } from "./projects.js";

export function renderContact(lang, t) {
  const c = t.common;
  const channels = [
    {
      title: "Email",
      value: "tranduonggiabao0501@gmail.com",
      href: "mailto:tranduonggiabao0501@gmail.com",
      label: lang === "vi" ? "Gửi email" : "Send email",
      copyValue: "tranduonggiabao0501@gmail.com",
      external: false
    },
    {
      title: "GitHub",
      value: "github.com/Peo051",
      href: "https://github.com/Peo051",
      label: lang === "vi" ? "Xem GitHub" : "Visit GitHub",
      external: true
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/peo0501",
      href: "https://www.linkedin.com/in/peo0501",
      label: lang === "vi" ? "Kết nối LinkedIn" : "Connect on LinkedIn",
      external: true
    },
    {
      title: lang === "vi" ? "Hồ sơ CV (PDF)" : "Official Resume (PDF)",
      value: "TranDuongGiaBao_ITIntern_CV.pdf",
      href: "assets/documents/TranDuongGiaBao_ITIntern_CV.pdf",
      label: t.common.download,
      download: "TranDuongGiaBao_ITIntern_CV.pdf"
    }
  ];

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.contact)}
      <section class="section">
        <div class="shell">
          <div class="contact-grid">
            ${channels
              .map(
                (ch) => `
              <article class="card contact-card reveal" data-reveal="scale-in">
                <h2>${escapeHtml(ch.title)}</h2>
                <p>${escapeHtml(ch.value)}</p>
                <div class="contact-actions-row">
                  <a class="button sm" href="${escapeHtml(ch.href)}" ${ch.download ? `download="${escapeHtml(ch.download)}"` : ch.external ? 'target="_blank" rel="noreferrer"' : ""}>
                    ${escapeHtml(ch.label)} ${ch.download ? icon("download") : icon("arrow")}
                  </a>
                  ${
                    ch.copyValue
                      ? `<button type="button" class="button ghost sm" data-copy-email="${escapeHtml(ch.copyValue)}">
                          ${icon("copy")} <span>${escapeHtml(c.copyEmail || "Copy")}</span>
                        </button>
                        <span class="copy-feedback" role="status" aria-live="polite" hidden>${escapeHtml(c.copiedEmail || "Copied!")}</span>`
                      : ""
                  }
                </div>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>
    </div>`;
}
