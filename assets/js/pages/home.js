import { escapeHtml, icon, tags } from "../utils/dom.js";
import { projects } from "../data/projects.js";
import { certifications } from "../data/certifications.js";
import { achievements, researchPapers } from "../data/achievements.js";

function statusClass(statusKey) {
  if (statusKey === "deployed") return "deployed";
  if (statusKey === "in-development") return "in-development";
  return "completed";
}

function statusLabel(statusKey, common) {
  if (statusKey === "deployed") return common.deployed;
  if (statusKey === "in-development") return common.inDev;
  return common.completed;
}

export function renderProjectCard(project, lang, common, projectsPage = {}, imgLoading = "lazy") {
  const copy = project[lang];
  const privateLabel = projectsPage.privateRepoBadge || "Private Repo";
  const featuredLabel = projectsPage.featuredBadge || "Featured";
  return `
    <article class="card project-card reveal" data-reveal="fade-up">
      <a class="project-cover" href="#/project/${escapeHtml(project.slug)}">
        <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" loading="${escapeHtml(imgLoading)}" decoding="async">
      </a>
      <div class="project-body">
        <div class="project-meta-top">
          <span class="project-category">${escapeHtml(project.category)}</span>
          <div style="display:flex; gap:0.35rem; align-items:center; flex-wrap:wrap; justify-content:flex-end;">
            ${project.featured ? `<span class="project-featured-pill">${escapeHtml(featuredLabel)}</span>` : ""}
            <span class="status-pill ${statusClass(project.statusKey)}"><span class="status-dot"></span>${escapeHtml(statusLabel(project.statusKey, common))}</span>
          </div>
        </div>
        <h3><a href="#/project/${escapeHtml(project.slug)}">${escapeHtml(project.title)}</a></h3>
        <p>${escapeHtml(copy.summary)}</p>
        ${tags(project.tech.slice(0, 5))}
        <div class="project-footer">
          <div class="project-links">
            <a class="text-link" href="#/project/${escapeHtml(project.slug)}">${escapeHtml(common.explore)} ${icon("arrow")}</a>
            ${project.repo ? `<a class="text-link" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(common.repo)}</a>` : ""}
            ${project.live ? `<a class="text-link" href="${escapeHtml(project.live)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(common.live)}</a>` : ""}
          </div>
          <span class="cert-date">${project.isPrivateRepo ? `<span class="private-inline">${icon("lock")} ${escapeHtml(privateLabel)}</span> · ` : ""}${escapeHtml(project.year)}</span>
        </div>
      </div>
    </article>`;
}

function renderSpotlightCard(project, lang, common, idx = 0) {
  const copy = project[lang];
  return `
    <article class="spotlight-card">
      <a class="spotlight-thumb" href="#/project/${escapeHtml(project.slug)}">
        <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" loading="${idx === 0 ? "eager" : "lazy"}" decoding="async">
      </a>
      <div class="spotlight-card-body">
        <div class="project-meta-top">
          <span class="project-category">${escapeHtml(project.role)}</span>
          <span class="status-pill ${statusClass(project.statusKey)}"><span class="status-dot"></span>${escapeHtml(statusLabel(project.statusKey, common))}</span>
        </div>
        <h3><a href="#/project/${escapeHtml(project.slug)}">${escapeHtml(project.title)}</a></h3>
        <p>${escapeHtml(copy.summary)}</p>
        ${tags(project.tech.slice(0, 3))}
        <div class="project-links" style="margin-top: var(--space-2);">
          <a class="text-link" href="#/project/${escapeHtml(project.slug)}">${escapeHtml(common.explore)} ${icon("arrow")}</a>
          ${project.live ? `<a class="text-link" href="${escapeHtml(project.live)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(common.live)}</a>` : ""}
        </div>
      </div>
    </article>`;
}

export function renderHome(lang, t, state = {}) {
  const h = t.home;
  const c = t.common;
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const featuredCertIds = ["google-ai", "google-cybersecurity", "google-advanced-data-analytics"];
  const featuredCerts = featuredCertIds
    .map((id) => certifications.find((cert) => cert.id === id))
    .filter(Boolean);
  const featuredAwards = achievements[lang];
  const featuredPapers = researchPapers[lang];

  const archTabs = h.archTabs || [];
  const activeArchId = state.archTab || archTabs[0]?.id || "backend";
  const activeArch = archTabs.find((tab) => tab.id === activeArchId) || archTabs[0];

  const proofRoutes = ["#/education", "#/project", "#/certifications", "#/achievement"];

  return `
    <div class="page route-enter">
      <section class="hero">
        <canvas id="heroCanvas" class="hero-canvas" aria-hidden="true"></canvas>
        <div class="shell">
          <div class="hero-grid">
            <div>
              <p class="eyebrow hero-eyebrow">
                <span class="status-dot is-pulsing" aria-hidden="true"></span>
                ${escapeHtml(h.eyebrow)}
              </p>
              <h1 class="hero-name">
                <span class="hero-name-accent">${escapeHtml(h.fullName)}</span>
              </h1>
              <p class="hero-role">${escapeHtml(h.role)}</p>
              <p class="hero-desc">${escapeHtml(h.description)}</p>
              <div class="hero-actions">
                <a class="button primary" data-magnetic href="#/project">${escapeHtml(h.viewProjects)} ${icon("arrow")}</a>
                <a class="button" href="assets/documents/TranDuongGiaBao_ITIntern_CV.pdf" download="TranDuongGiaBao_ITIntern_CV.pdf">${icon("download")} ${escapeHtml(h.downloadCV)}</a>
                <a class="button ghost" href="#/contact">${icon("mail")} ${escapeHtml(h.contact)}</a>
              </div>
            </div>

            <div class="hero-portrait-wrap">
              <div class="portrait-card" data-tilt-card>
                <div class="portrait-glare" aria-hidden="true"></div>
                <div class="portrait-frame">
                  <img src="assets/img/profile/avatar-main.png?v=2.7" alt="Trần Dương Gia Bảo" width="355" height="266" loading="eager" fetchpriority="high" decoding="async">
                </div>
                <div class="portrait-badges-row">
                  <span class="portrait-chip">GPA 3.74 / 4.0</span>
                  <span class="portrait-chip">.NET 8 · C#</span>
                  <span class="portrait-chip">FAIR 2026</span>
                </div>
                <div class="portrait-meta">
                  <span class="portrait-status"><span class="status-dot is-pulsing"></span>${escapeHtml(h.availability)}</span>
                  <span class="portrait-location">${escapeHtml(h.location)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="proof-strip">
            ${h.proof
              .map(([val, lbl], idx) => {
                const targetRoute = proofRoutes[idx] || "#/resume";
                const counterAttr =
                  idx === 0
                    ? `data-counter-target="3.74" data-counter-decimals="2" data-counter-suffix=" / 4.0"`
                    : idx === 1
                      ? `data-counter-target="11" data-counter-decimals="0"`
                      : "";
                return `
              <a class="proof-item" href="${escapeHtml(targetRoute)}">
                <span class="proof-index">0${idx + 1}</span>
                <span class="proof-value" ${counterAttr}>${escapeHtml(val)}</span>
                <span class="proof-label">${escapeHtml(lbl)}</span>
              </a>`;
              })
              .join("")}
          </div>

          ${
            h.currentWork
              ? `
          <div class="current-work-banner">
            <div class="current-work-main">
              <div class="current-work-kicker">
                <span class="status-dot is-pulsing" aria-hidden="true"></span>
                <span>${escapeHtml(h.currentWork.badge)}</span>
              </div>
              <p class="current-work-heading">
                <strong>${escapeHtml(h.currentWork.role)}</strong>
                <span class="current-work-at">@</span>
                <span>${escapeHtml(h.currentWork.company)}</span>
              </p>
              <p class="current-work-summary">${escapeHtml(h.currentWork.summary)}</p>
              <div class="current-work-pills">
                ${(h.currentWork.projects || [])
                  .map((proj) => `<span class="current-work-pill">${escapeHtml(proj)}</span>`)
                  .join("")}
              </div>
            </div>
            <div class="current-work-cta">
              <a class="button sm" href="#/resume">${escapeHtml(h.currentWork.cta)} ${icon("arrow")}</a>
            </div>
          </div>`
              : ""
          }
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split reveal" data-reveal="mask-up">
            <div>
              <p class="eyebrow">${escapeHtml(h.focusEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(h.focusTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(h.focusIntro)}</p>
          </div>

          ${
            activeArch
              ? `
          <div class="arch-walkthrough reveal" data-reveal="scale-in">
            <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:var(--space-3);">
              <span class="spotlight-kicker">${escapeHtml(h.archTabsTitle || "System Architecture")}</span>
              <div class="arch-tabs" role="tablist" aria-label="${escapeHtml(h.archTabsTitle || "System Architecture")}">
                ${archTabs
                  .map(
                    (tab) => `
                  <button
                    type="button"
                    role="tab"
                    class="arch-tab-btn ${tab.id === activeArch.id ? "is-active" : ""}"
                    aria-selected="${tab.id === activeArch.id ? "true" : "false"}"
                    data-arch-tab="${escapeHtml(tab.id)}"
                  >${escapeHtml(tab.tab)}</button>`
                  )
                  .join("")}
              </div>
            </div>

            <div class="arch-stage-panel" role="tabpanel">
              <div class="arch-stage-copy">
                <h3>${escapeHtml(activeArch.title)}</h3>
                <p>${escapeHtml(activeArch.desc)}</p>
                <a class="text-link" href="#/project/${escapeHtml(activeArch.projectSlug)}">${escapeHtml(activeArch.cta)} ${icon("arrow")}</a>
              </div>
              <div class="arch-pipeline">
                ${activeArch.nodes
                  .map(
                    ([step, label, tech]) => `
                  <div class="arch-node">
                    <span class="arch-node-step">${escapeHtml(step)}</span>
                    <span class="arch-node-label">${escapeHtml(label)}</span>
                    <span class="arch-node-tech">${escapeHtml(tech)}</span>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
          </div>`
              : ""
          }

          <div class="focus-grid">
            ${h.focusAreas
              .map(
                (area, idx) => `
              <article class="card focus-card reveal" data-reveal="${idx % 2 === 0 ? "fade-up" : "scale-in"}">
                <h3>${escapeHtml(area.title)}</h3>
                <p>${escapeHtml(area.desc)}</p>
                ${tags(area.tags)}
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split reveal" data-reveal="mask-up">
            <div>
              <p class="eyebrow">${escapeHtml(h.featuredEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(h.featuredTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(h.featuredIntro)}</p>
          </div>

          <div class="spotlight-rail-wrap reveal" data-reveal="fade-up" data-spotlight-wrap>
            <div class="spotlight-header">
              <div class="spotlight-title-group">
                <span class="spotlight-kicker">${escapeHtml(h.spotlightEyebrow || "Interactive Showcase")} · ${escapeHtml(h.spotlightTitle || "Spotlight")}</span>
                <p class="spotlight-sub">${escapeHtml(h.spotlightDesc || "")}</p>
              </div>
              <div class="spotlight-controls">
                <button type="button" class="spotlight-nav-btn" data-spotlight-prev aria-label="${escapeHtml(t.projectsPage.prevSlide)}">
                  ${icon("chevronLeft")}
                </button>
                <button type="button" class="spotlight-nav-btn" data-spotlight-next aria-label="${escapeHtml(t.projectsPage.nextSlide)}">
                  ${icon("chevronRight")}
                </button>
              </div>
            </div>
            <div class="spotlight-track" data-spotlight-track tabindex="0" aria-label="${escapeHtml(h.spotlightTitle || "Featured Spotlight")}">
              ${featuredProjects.map((p, idx) => renderSpotlightCard(p, lang, c, idx)).join("")}
            </div>
            <div class="spotlight-footer-bar">
              <div class="spotlight-progress-track" aria-hidden="true">
                <div class="spotlight-progress-fill" data-spotlight-progress></div>
              </div>
              <div class="spotlight-dots" role="tablist" aria-label="Spotlight slides">
                ${featuredProjects
                  .map(
                    (p, idx) => `
                  <button
                    type="button"
                    role="tab"
                    class="spotlight-dot ${idx === 0 ? "is-active" : ""}"
                    aria-selected="${idx === 0 ? "true" : "false"}"
                    aria-label="${escapeHtml(p.title)}"
                    data-spotlight-dot="${idx}"
                  ></button>`
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div class="projects-grid">
            ${featuredProjects.map((p) => renderProjectCard(p, lang, c, t.projectsPage)).join("")}
          </div>
          <div style="margin-top: var(--space-6);">
            <a class="button" href="#/project">${escapeHtml(h.viewAllProjects)} ${icon("arrow")}</a>
          </div>
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split reveal" data-reveal="mask-up">
            <div>
              <p class="eyebrow">${escapeHtml(h.certsEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(h.certsTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(h.certsIntro)}</p>
          </div>
          <div class="cert-grid">
            ${featuredCerts
              .map((cert) => {
                const subCount = cert.subCourses?.length || 0;
                return `
                <article class="card cert-card reveal" data-reveal="scale-in">
                  <button type="button" class="cert-thumb-btn" data-cert-id="${escapeHtml(cert.id)}" aria-label="${escapeHtml(cert.title)}">
                    <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)}" loading="lazy" decoding="async">
                  </button>
                  <div class="cert-content">
                    <div class="cert-meta-top">
                      <span class="cert-issuer">${escapeHtml(cert.credentialType)}</span>
                      <span class="cert-date">${escapeHtml(cert.date)}</span>
                    </div>
                    <h3>${escapeHtml(cert.title)}</h3>
                    <p>${escapeHtml(cert[lang].summary)}</p>
                    <div class="cert-actions">
                      <button type="button" class="button sm" data-cert-id="${escapeHtml(cert.id)}">
                        ${icon("zoom")} ${subCount > 0 ? `${escapeHtml(t.certs.viewCourses)} (${subCount})` : escapeHtml(t.certs.viewDetails)}
                      </button>
                      ${cert.verify ? `<a class="text-link" href="${escapeHtml(cert.verify)}" target="_blank" rel="noreferrer">${icon("external")} Verify</a>` : ""}
                    </div>
                  </div>
                </article>`;
              })
              .join("")}
          </div>
          <div style="margin-top: var(--space-6);">
            <a class="button primary" href="#/certifications">${escapeHtml(h.viewAllCerts)} ${icon("arrow")}</a>
          </div>
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="section-head split reveal" data-reveal="mask-up">
            <div>
              <p class="eyebrow">${escapeHtml(h.achievementsEyebrow)}</p>
              <h2 class="section-title">${escapeHtml(h.achievementsTitle)}</h2>
            </div>
            <p class="section-intro">${escapeHtml(h.achievementsIntro)}</p>
          </div>
          <div class="research-papers-grid">
            ${featuredPapers
              .map(
                (paper) => `
              <article class="card research-paper-card reveal" data-reveal="fade-up">
                <span class="award-label">${escapeHtml(paper.role)} · ${escapeHtml(paper.year)}</span>
                <h3>${escapeHtml(paper.title)}</h3>
                <p class="research-paper-venue">${escapeHtml(paper.venue)}</p>
              </article>`
              )
              .join("")}
          </div>
          <div class="evidence-grid">
            ${featuredAwards
              .map(
                (item) => `
              <article class="card evidence-card reveal" data-reveal="scale-in">
                <span class="award-label">${escapeHtml(item.label)} · ${escapeHtml(item.year)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.detail)}</p>
                <div>
                  <button type="button" class="button sm" data-proof-id="${escapeHtml(item.id)}">${icon("zoom")} ${escapeHtml(c.viewProof)}</button>
                </div>
              </article>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section section-divider">
        <div class="shell">
          <div class="card cta-banner reveal" data-reveal="scale-in">
            <div>
              <h2>${escapeHtml(h.ctaTitle)}</h2>
              <p>${escapeHtml(h.ctaDesc)}</p>
            </div>
            <div class="hero-actions">
              <a class="button primary" data-magnetic href="#/contact">${icon("mail")} ${escapeHtml(h.contact)}</a>
              <a class="button" href="#/resume">${escapeHtml(h.ctaResume)} ${icon("arrow")}</a>
            </div>
          </div>
        </div>
      </section>
    </div>`;
}
