import { escapeHtml, icon, tags } from "../utils/dom.js";
import { projects } from "../data/projects.js";
import { renderProjectCard } from "./home.js";

export function pageHero(page) {
  return `
    <section class="page-hero">
      <div class="shell">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1 class="page-title">${escapeHtml(page.title)}</h1>
        <p class="lead">${escapeHtml(page.lead)}</p>
      </div>
    </section>`;
}

function provenanceBadge(type, pText) {
  if (type === "real-screenshot") {
    return { cls: "real", label: pText.badgeReal };
  }
  if (type === "benchmark-figure") {
    return { cls: "benchmark", label: pText.badgeBenchmark };
  }
  return { cls: "illustration", label: pText.badgeIllustration };
}

export function renderProjects(lang, t) {
  const pText = t.projectsPage;
  const c = t.common;

  const featuredList = projects.filter((p) => p.featured);
  const otherList = projects.filter((p) => !p.featured);

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.projects)}

      <section class="section" style="padding-top: 0;">
        <div class="shell">
          <div class="section-head split">
            <div>
              <p class="eyebrow">${escapeHtml(pText.featuredEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(pText.featuredTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(pText.featuredDesc)}</p>
          </div>
          <div class="projects-grid">
            ${featuredList.map((p) => renderProjectCard(p, lang, c, pText)).join("")}
          </div>
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split">
            <div>
              <p class="eyebrow">${escapeHtml(pText.otherEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(pText.otherTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(pText.otherDesc)}</p>
          </div>
          <div class="projects-grid">
            ${otherList.map((p) => renderProjectCard(p, lang, c, pText)).join("")}
          </div>
        </div>
      </section>
    </div>`;
}

export function renderProjectDetail(slug, lang, t) {
  const project = projects.find((p) => p.slug === slug);
  const c = t.common;
  const pText = t.projectsPage;

  if (!project) {
    return `
      <div class="page route-enter">
        <section class="section">
          <div class="shell">
            <p class="eyebrow">404</p>
            <h1 class="page-title">Project not found</h1>
            <a class="button primary" href="#/project">${escapeHtml(c.back)}</a>
          </div>
        </section>
      </div>`;
  }

  const copy = project[lang];
  const gallery = project.gallery || [];
  const statusLabel =
    project.statusKey === "deployed"
      ? c.deployed
      : project.statusKey === "in-development"
        ? c.inDev
        : c.completed;

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      project: p,
      score: (p.categories || []).filter((cat) => (project.categories || []).includes(cat)).length + (p.featured ? 0.2 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.project);

  return `
    <div class="page route-enter">
      <!-- 1. Project Hero -->
      <section class="page-hero">
        <div class="shell">
          <a class="text-link" href="#/project" style="margin-bottom: var(--space-4);">&larr; ${escapeHtml(c.back)}</a>
          <p class="eyebrow">${escapeHtml(project.category)}</p>
          <h1 class="page-title">${escapeHtml(project.title)}</h1>
          <p class="lead">${escapeHtml(copy.summary)}</p>

          <div class="project-detail-hero">
            <button
              type="button"
              class="project-detail-cover project-cover-btn"
              data-gallery-project="${escapeHtml(project.slug)}"
              data-gallery-idx="0"
              aria-label="${escapeHtml(c.viewFullImg)} — ${escapeHtml(project.title)}"
            >
              <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" decoding="async">
              <span class="cover-zoom-pill">${icon("zoom")} ${escapeHtml(c.viewFullImg)}</span>
            </button>

            <aside class="card project-specs">
              <div class="spec-row">
                <span class="spec-label">${escapeHtml(c.status)}</span>
                <span class="spec-value"><span class="status-pill ${escapeHtml(project.statusKey)}"><span class="status-dot"></span>${escapeHtml(statusLabel)}</span></span>
              </div>
              <div class="spec-row">
                <span class="spec-label">${escapeHtml(c.period)}</span>
                <span class="spec-value">${escapeHtml(project.year)}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">${escapeHtml(c.role)}</span>
                <span class="spec-value">${escapeHtml(project.role)}</span>
              </div>
              ${
                project.isPrivateRepo
                  ? `<div class="spec-row">
                      <span class="spec-label">Visibility</span>
                      <span class="spec-value private-inline">${icon("lock")} ${escapeHtml(pText.privateRepoBadge)}</span>
                    </div>`
                  : ""
              }
              <div class="hero-actions" style="margin-top: var(--space-2);">
                ${project.repo ? `<a class="button primary sm" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(c.repo)}</a>` : ""}
                ${project.repoSecondary ? `<a class="button sm" href="${escapeHtml(project.repoSecondary)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(pText.secondaryRepoLabel)}</a>` : ""}
                ${project.live ? `<a class="button sm" href="${escapeHtml(project.live)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(c.live)}</a>` : ""}
              </div>
            </aside>
          </div>

          <nav class="detail-anchor-bar" aria-label="Case study sections">
            <button type="button" class="detail-anchor-pill" data-scroll-target="detail-overview">${escapeHtml(c.overview)}</button>
            <button type="button" class="detail-anchor-pill" data-scroll-target="detail-gallery">${escapeHtml(pText.galleryTitle)}</button>
            <button type="button" class="detail-anchor-pill" data-scroll-target="detail-architecture">${escapeHtml(pText.archTitle)}</button>
            <button type="button" class="detail-anchor-pill" data-scroll-target="detail-specs">${escapeHtml(c.stack)}</button>
          </nav>
        </div>
      </section>

      <!-- 2. Project Overview (Problem, Solution & Overview) + 3. Main Features -->
      <section class="section" id="detail-overview">
        <div class="shell">
          <div class="detail-sections">
            <article class="card detail-panel full reveal">
              <h2>${escapeHtml(c.overview)}</h2>
              <p>${escapeHtml(copy.overview)}</p>
            </article>

            <article class="card detail-panel reveal">
              <h2>${escapeHtml(pText.problemTitle)}</h2>
              <p>${escapeHtml(copy.problem)}</p>
            </article>

            <article class="card detail-panel reveal">
              <h2>${escapeHtml(pText.solutionTitle)}</h2>
              <p>${escapeHtml(copy.solution)}</p>
            </article>

            <article class="card detail-panel full reveal">
              <h2>${escapeHtml(pText.featuresTitle)}</h2>
              <ul class="feature-list-grid detail-list">
                ${copy.features.map((feat) => `<li>${escapeHtml(feat)}</li>`).join("")}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- 4. Screenshots & Visuals Gallery -->
      <section class="section section-divider" id="detail-gallery">
        <div class="shell">
          <div class="section-head split reveal">
            <div>
              <p class="eyebrow">${escapeHtml(pText.galleryTitle)}</p>
              <h2 class="section-title">${escapeHtml(pText.galleryTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(pText.galleryHint)}</p>
          </div>
          <div class="project-gallery-grid">
            ${gallery
              .map((item, idx) => {
                const b = provenanceBadge(item.type, pText);
                const gTitle = typeof item.title === "object" ? item.title[lang] : item.title;
                const gCap = typeof item.caption === "object" ? item.caption[lang] : item.caption;
                return `
                  <article class="card gallery-card reveal">
                    <button
                      type="button"
                      class="gallery-thumb-btn"
                      data-gallery-project="${escapeHtml(project.slug)}"
                      data-gallery-idx="${idx}"
                      aria-label="${escapeHtml(gTitle)}"
                    >
                      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(gTitle)}" loading="lazy" decoding="async">
                      <span class="gallery-badge ${b.cls}">${escapeHtml(b.label)}</span>
                    </button>
                    <div class="gallery-card-body">
                      <h3>${escapeHtml(gTitle)}</h3>
                      <p>${escapeHtml(gCap)}</p>
                    </div>
                  </article>`;
              })
              .join("")}
          </div>
        </div>
      </section>

      <!-- 5. Architecture / System Flow -->
      <section class="section section-divider" id="detail-architecture">
        <div class="shell">
          <div class="section-head split reveal">
            <div>
              <p class="eyebrow">${escapeHtml(pText.archTitle)}</p>
              <h2 class="section-title">${escapeHtml(pText.archTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(pText.archHint)}</p>
          </div>

          <div class="detail-sections">
            <article class="card detail-panel full reveal">
              <button
                type="button"
                class="arch-viewer-btn"
                data-arch-open="${escapeHtml(project.slug)}"
                aria-label="${escapeHtml(pText.archTitle)} — ${escapeHtml(project.title)}"
              >
                <img src="${escapeHtml(project.architectureSvg)}" alt="${escapeHtml(project.title)} Architecture Diagram" loading="lazy" decoding="async">
              </button>
              <div class="hero-actions" style="margin-top: var(--space-4);">
                <button type="button" class="button sm" data-arch-open="${escapeHtml(project.slug)}">
                  ${icon("zoom")} ${escapeHtml(c.viewFullImg)}
                </button>
                <a class="button ghost sm" href="${escapeHtml(project.architectureMermaid)}" target="_blank" rel="noreferrer">
                  ${icon("external")} ${escapeHtml(pText.viewMmd)}
                </a>
              </div>
              <ul class="detail-list" style="margin-top: var(--space-4);">
                ${copy.architectureNotes.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
              </ul>
            </article>

            <!-- 6. Tech Stack -->
            <article class="card detail-panel reveal" id="detail-specs">
              <h2>${escapeHtml(c.stack)}</h2>
              ${tags(project.tech)}
            </article>

            <!-- 7. Personal Contribution -->
            <article class="card detail-panel reveal">
              <h2>${escapeHtml(c.contribution)}</h2>
              <ul class="detail-list">
                ${copy.contribution.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
              </ul>
            </article>

            <!-- 8. Development Status -->
            <article class="card detail-panel reveal">
              <h2>${escapeHtml(pText.statusDetailTitle)}</h2>
              <div style="margin-bottom: var(--space-3);">
                <span class="status-pill ${escapeHtml(project.statusKey)}"><span class="status-dot"></span>${escapeHtml(statusLabel)} · ${escapeHtml(project.year)}</span>
              </div>
              <p>${escapeHtml(copy.developmentStatus)}</p>
            </article>

            <!-- 9. Links -->
            <article class="card detail-panel reveal">
              <h2>${escapeHtml(pText.linksTitle)}</h2>
              <div class="hero-actions">
                ${project.repo ? `<a class="button primary sm" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(c.repo)}</a>` : ""}
                ${project.repoSecondary ? `<a class="button sm" href="${escapeHtml(project.repoSecondary)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(pText.secondaryRepoLabel)}</a>` : ""}
                ${project.live ? `<a class="button sm" href="${escapeHtml(project.live)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(c.live)}</a>` : ""}
                <a class="button ghost sm" href="${escapeHtml(project.architectureSvg)}" target="_blank" rel="noreferrer">${icon("layers")} SVG Diagram</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 10. Related Projects -->
      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split reveal">
            <div>
              <p class="eyebrow">${escapeHtml(pText.relatedTitle)}</p>
              <h2 class="section-title">${escapeHtml(pText.relatedTitle)}</h2>
            </div>
          </div>
          <div class="projects-grid">
            ${related.map((p) => renderProjectCard(p, lang, c, pText, "eager")).join("")}
          </div>
        </div>
      </section>
    </div>`;
}
