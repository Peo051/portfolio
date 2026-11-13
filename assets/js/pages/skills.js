import { escapeHtml, tags } from "../utils/dom.js";
import { skillGroups } from "../data/skills.js";
import { pageHero } from "./projects.js";

const DOMAIN_KEYS = ["languages", "backend", "frontend", "database", "cloud", "ai"];

export function renderSkills(lang, t, state = { skillFilter: "all" }) {
  const groups = skillGroups[lang];
  const activeFilter = state.skillFilter || "all";
  const allLabel = lang === "vi" ? "Tất cả nhóm (6)" : "All Domains (6)";

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.skills)}
      <section class="section">
        <div class="shell">
          <div class="skill-filter-bar" role="tablist" aria-label="Filter technical skills by domain">
            <button
              type="button"
              role="tab"
              aria-selected="${activeFilter === "all" ? "true" : "false"}"
              class="skill-filter-btn ${activeFilter === "all" ? "is-active" : ""}"
              data-skill-filter="all"
            >${escapeHtml(allLabel)}</button>
            ${groups
              .map((group, idx) => {
                const key = DOMAIN_KEYS[idx] || `domain-${idx}`;
                return `
              <button
                type="button"
                role="tab"
                aria-selected="${activeFilter === key ? "true" : "false"}"
                class="skill-filter-btn ${activeFilter === key ? "is-active" : ""}"
                data-skill-filter="${escapeHtml(key)}"
              >${escapeHtml(group.title)}</button>`;
              })
              .join("")}
          </div>

          <div class="skills-grid">
            ${groups
              .map((group, idx) => {
                const key = DOMAIN_KEYS[idx] || `domain-${idx}`;
                const visible = activeFilter === "all" || activeFilter === key;
                return `
              <article class="card skill-card reveal ${visible ? "" : "is-hidden"}" data-reveal="scale-in" data-skill-domain="${escapeHtml(key)}">
                <div class="skill-card-head">
                  <h2>${escapeHtml(group.title)}</h2>
                  <span class="skill-domain-badge">${group.items.length} ${lang === "vi" ? "công nghệ" : "technologies"}</span>
                </div>
                <p>${escapeHtml(group.desc)}</p>
                ${tags(group.items)}
              </article>`;
              })
              .join("")}
          </div>
        </div>
      </section>
    </div>`;
}
