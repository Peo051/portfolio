import { escapeHtml, icon } from "../utils/dom.js";
import {
  achievements,
  researchPapers,
  researchProjects
} from "../data/achievements.js";
import { pageHero } from "./projects.js";
import {
  renderResearchProjectsGroup,
  renderConferencePapersGroup
} from "./resume.js";

export function renderAchievements(lang, t) {
  const items = achievements[lang];
  const papers = researchPapers[lang];
  const researchList = researchProjects[lang];
  const rp = t.resumePage;
  const c = t.common;

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.achievements)}
      <section class="section">
        <div class="shell">
          <div class="section-head split">
            <div>
              <p class="eyebrow">${escapeHtml(rp.achievementsSectionLabel)}</p>
              <h2 class="section-title">${escapeHtml(rp.achievementsTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(rp.achievementsIntro)}</p>
          </div>
          <div class="evidence-grid">
            ${items
              .map(
                (item) => `
              <article class="card evidence-card">
                <span class="award-label">${escapeHtml(item.label)} · ${escapeHtml(item.year)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.detail)}</p>
                <div>
                  <button type="button" class="button sm" data-proof-id="${escapeHtml(item.id)}">
                    ${icon("zoom")} ${escapeHtml(c.viewProof)}
                  </button>
                </div>
              </article>`
              )
              .join("")}
          </div>

          <div class="resume-block" id="achievements-research">
            <div class="section-head split">
              <div>
                <p class="eyebrow">${escapeHtml(rp.researchEyebrow)}</p>
                <h2 class="section-title">${escapeHtml(rp.researchTitle)}</h2>
              </div>
              <p class="section-intro">${escapeHtml(rp.researchIntro)}</p>
            </div>
            ${renderResearchProjectsGroup(researchList, rp)}
            ${renderConferencePapersGroup(papers, rp)}
          </div>

          <div class="card cta-banner" style="margin-top: var(--space-10);">
            <div>
              <h2>${escapeHtml(t.home.certsTitle)}</h2>
              <p>${escapeHtml(t.home.certsIntro)}</p>
            </div>
            <a class="button primary" href="#/certifications">${escapeHtml(t.home.viewAllCerts)} ${icon("arrow")}</a>
          </div>
        </div>
      </section>
    </div>`;
}
