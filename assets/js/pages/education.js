import { escapeHtml } from "../utils/dom.js";
import { education } from "../data/education.js";
import { pageHero } from "./projects.js";

export function renderEducation(lang, t) {
  const items = education[lang];
  return `
    <div class="page route-enter">
      ${pageHero(t.pages.education)}
      <section class="section">
        <div class="shell">
          ${items
            .map(
              (item) => `
            <article class="card education-card reveal">
              <span class="award-label">${escapeHtml(item.meta)}</span>
              <h2>${escapeHtml(item.title)}</h2>
              <p class="education-subline">${escapeHtml(item.subline)}</p>
              <p class="education-desc">${escapeHtml(item.desc)}</p>
            </article>`
            )
            .join("")}
        </div>
      </section>
    </div>`;
}
