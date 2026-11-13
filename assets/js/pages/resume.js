import { escapeHtml, icon, tags } from "../utils/dom.js";
import {
  resumeProfile,
  resumeSkillGroups,
  education,
  workExperience,
  cvProjectExperience
} from "../data/education.js";
import {
  researchProjects,
  researchPapers,
  achievements
} from "../data/achievements.js";
import { certifications } from "../data/certifications.js";
import { pageHero } from "./projects.js";

const CV_PATH = "assets/documents/TranDuongGiaBao_ITIntern_CV.pdf";
const AVATAR_PATH = "assets/img/profile/avatar-main.png?v=2.7";
const REPRESENTATIVE_CERT_IDS = [
  "google-ux-design",
  "google-ai",
  "google-cybersecurity",
  "google-advanced-data-analytics",
  "google-it-automation-with-python",
  "google-project-management"
];

export function renderResearchProjectsGroup(projectsList, rp) {
  return `
    <div class="research-group">
      <div class="research-group-head">
        <h3>${escapeHtml(rp.universityResearchGroupTitle)}</h3>
        <p>${escapeHtml(rp.universityResearchGroupIntro)}</p>
      </div>
      <div class="research-projects-list">
        ${projectsList
          .map(
            (proj) => `
          <article class="card research-project-card" id="${escapeHtml(proj.id)}">
            <div class="research-card-top">
              <div class="research-card-badges">
                <span class="research-code-pill">Research ${escapeHtml(proj.code)}</span>
                <span class="research-type-text">${escapeHtml(proj.type)}</span>
              </div>
              <span class="research-status-badge is-${escapeHtml(proj.statusKey)}">
                ${proj.statusKey === "in-progress" ? '<span class="status-dot is-pulsing" aria-hidden="true"></span>' : ""}
                ${escapeHtml(proj.statusLabel)}
              </span>
            </div>
            <h4 class="research-project-title">${escapeHtml(proj.title)}</h4>
            ${proj.subtitle ? `<p class="research-project-subtitle">${escapeHtml(proj.subtitle)}</p>` : ""}
            <dl class="research-meta-grid">
              <div class="research-meta-item">
                <dt>${escapeHtml(rp.researchPeriodLabel)}</dt>
                <dd>${escapeHtml(proj.period)}</dd>
              </div>
              <div class="research-meta-item">
                <dt>${escapeHtml(rp.researchRoleLabel)}</dt>
                <dd>${escapeHtml(proj.role)}</dd>
              </div>
            </dl>
            <div class="research-focus-row">
              <span class="research-focus-label">${escapeHtml(rp.researchFocusLabel)}</span>
              ${tags(proj.focus)}
            </div>
            ${
              proj.projectLink
                ? `<div class="research-card-actions">
                    <a class="text-link" href="${escapeHtml(proj.projectLink)}">
                      ${escapeHtml(proj.projectLinkLabel || rp.viewRelatedProject)} ${icon("arrow")}
                    </a>
                  </div>`
                : ""
            }
          </article>`
          )
          .join("")}
      </div>
    </div>`;
}

export function renderConferencePapersGroup(papersList, rp) {
  return `
    <div class="research-group">
      <div class="research-group-head">
        <h3>${escapeHtml(rp.conferenceGroupTitle)}</h3>
        <p>${escapeHtml(rp.conferenceGroupIntro)}</p>
      </div>
      <div class="research-papers-grid">
        ${papersList
          .map(
            (paper) => `
          <article class="card research-paper-card">
            <div class="research-card-top">
              <span class="award-label">${escapeHtml(paper.typeBadge || rp.conferenceBadge)}</span>
              <span class="research-date-pill">${escapeHtml(paper.date || paper.year)}</span>
            </div>
            <h4>${escapeHtml(paper.title)}</h4>
            <p class="research-paper-meta">
              <strong>${escapeHtml(rp.researchRoleLabel)}:</strong> ${escapeHtml(paper.role)}
            </p>
            <p class="research-paper-venue">${escapeHtml(paper.venue)}</p>
          </article>`
          )
          .join("")}
      </div>
    </div>`;
}

export function renderResume(lang, t) {
  const profile = resumeProfile[lang];
  const skillGroupsList = resumeSkillGroups[lang];
  const edu = education[lang][0];
  const experiences = workExperience[lang];
  const cvProjects = cvProjectExperience[lang];
  const researchList = researchProjects[lang];
  const papers = researchPapers[lang];
  const awards = achievements[lang];
  const rp = t.resumePage;
  const c = t.common;

  const certMap = new Map(certifications.map((item) => [item.id, item]));
  const featuredCerts = REPRESENTATIVE_CERT_IDS.map((id) => certMap.get(id)).filter(Boolean);

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.resume)}
      <section class="section">
        <div class="shell">
          <div class="resume-top-bar">
            <nav class="resume-jump-nav" aria-label="${escapeHtml(rp.summaryTitle)}">
              ${(rp.sectionNav || [])
                .map(
                  (navItem) => `
                <button type="button" class="resume-jump-chip" data-scroll-target="${escapeHtml(navItem.id)}">
                  <span class="resume-jump-code">${escapeHtml(navItem.code)}</span>
                  <span>${escapeHtml(navItem.label)}</span>
                </button>`
                )
                .join("")}
            </nav>
            <div class="resume-top-actions">
              <span class="status-pill deployed"><span class="status-dot"></span>${escapeHtml(rp.verifiedBadge)}</span>
              <a class="button primary sm" href="${CV_PATH}" download="TranDuongGiaBao_ITIntern_CV.pdf">
                ${icon("download")} ${escapeHtml(c.download)}
              </a>
              <a class="button sm" href="${CV_PATH}" target="_blank" rel="noreferrer">
                ${icon("external")} ${escapeHtml(rp.openPdf)}
              </a>
            </div>
          </div>

          <div class="resume-grid resume-layout">
            <aside class="card resume-sidebar">
              <div class="resume-sidebar-profile">
                <div class="resume-avatar-frame">
                  <img src="${AVATAR_PATH}" alt="${escapeHtml(profile.fullName)}" width="84" height="84" loading="eager">
                </div>
                <div class="resume-identity-text">
                  <p class="resume-sidebar-role-badge">${escapeHtml(profile.currentPosition)}</p>
                  <h2>${escapeHtml(profile.fullName)}</h2>
                  <p class="resume-sidebar-direction">${escapeHtml(profile.direction)}</p>
                </div>
              </div>

              <div class="resume-sidebar-meta-pills">
                <span class="resume-gpa-pill">${escapeHtml(profile.educationLine)}</span>
                <span class="resume-location-pill">${icon("mapPin")} ${escapeHtml(profile.location)}</span>
              </div>

              <div class="resume-sidebar-section">
                <h3 class="resume-sidebar-heading">${escapeHtml(rp.sidebarSummaryLabel || rp.summaryTitle)}</h3>
                <div class="resume-summary-paragraphs">
                  ${profile.summaryParagraphs.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}
                </div>
              </div>

              <div class="resume-sidebar-section">
                <h3 class="resume-sidebar-heading">${escapeHtml(rp.sidebarContactLabel)}</h3>
                <ul class="resume-contact-list">
                  ${profile.contacts
                    .map((contact) => {
                      const isExternal = contact.href.startsWith("http");
                      return `
                        <li class="resume-contact-item">
                          <span class="resume-contact-icon" aria-hidden="true">${icon(contact.icon)}</span>
                          <div class="resume-contact-body">
                            <span class="resume-contact-label">${escapeHtml(contact.label)}</span>
                            <a href="${escapeHtml(contact.href)}" ${isExternal ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(contact.value)}</a>
                          </div>
                          ${
                            contact.copyable
                              ? `<div class="resume-copy-wrap">
                                  <button type="button" class="button ghost sm resume-copy-btn" data-copy-email="${escapeHtml(contact.value)}" aria-label="${escapeHtml(c.copyEmail || "Copy")}">
                                    ${icon("copy")}
                                  </button>
                                  <span class="copy-feedback" role="status" aria-live="polite" hidden>${escapeHtml(c.copiedEmail || "Copied!")}</span>
                                </div>`
                              : ""
                          }
                        </li>`;
                    })
                    .join("")}
                </ul>
              </div>

              <div class="resume-sidebar-section resume-sidebar-edu">
                <h3 class="resume-sidebar-heading">${escapeHtml(rp.sidebarEducationLabel)}</h3>
                <p class="resume-sidebar-edu-school">${escapeHtml(edu.title)}</p>
                <p class="resume-sidebar-edu-major">${escapeHtml(profile.majorLine)}</p>
                <p class="resume-sidebar-edu-sub">${escapeHtml(edu.subline)}</p>
              </div>

              <div class="resume-sidebar-actions">
                <a class="button primary" href="${CV_PATH}" download="TranDuongGiaBao_ITIntern_CV.pdf">
                  ${icon("download")} ${escapeHtml(c.download)}
                </a>
                <a class="button" href="${CV_PATH}" target="_blank" rel="noreferrer">
                  ${icon("external")} ${escapeHtml(rp.openPdf)}
                </a>
              </div>
            </aside>

            <div class="resume-main-column">
              <section class="resume-numbered-section" id="technical-skills">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.skillsSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.skillsTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.skillsIntro)}</p>
                </div>
                <div class="resume-skill-grid">
                  ${skillGroupsList
                    .map(
                      (group, idx) => `
                    <article class="card resume-skill-card">
                      <div class="resume-skill-card-head">
                        <span class="resume-skill-index">0${idx + 1}</span>
                        <h3>${escapeHtml(group.title)}</h3>
                      </div>
                      ${tags(group.items)}
                    </article>`
                    )
                    .join("")}
                </div>
              </section>

              <section class="resume-numbered-section" id="work-experience">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.workSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.workExpTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.workExpIntro)}</p>
                </div>
                <div class="experience-timeline" data-timeline-progress>
                  ${experiences
                    .map(
                      (exp, idx) => `
                    <article class="card experience-card ${exp.isCurrent ? "is-current" : "is-previous"}">
                      <div class="experience-status-row">
                        <span class="experience-order-chip">EXP ${escapeHtml(exp.orderLabel || `0${idx + 1}`)}</span>
                        ${
                          exp.statusBadge
                            ? `<span class="experience-status-pill ${exp.isCurrent ? "is-current" : "is-completed"}">
                                ${exp.isCurrent ? `<span class="status-dot is-pulsing" aria-hidden="true"></span>` : ""}
                                ${escapeHtml(exp.statusBadge)}
                              </span>`
                            : ""
                        }
                      </div>
                      <div class="experience-header">
                        <div>
                          <h3 class="experience-company">${escapeHtml(exp.company)}</h3>
                          ${exp.companySub ? `<p class="experience-company-sub">${escapeHtml(exp.companySub)}</p>` : ""}
                          <p class="experience-position">${escapeHtml(exp.position)}</p>
                          ${
                            exp.focus
                              ? `<p class="experience-focus-line"><strong>${escapeHtml(rp.focusLabel || "Focus")}:</strong> ${escapeHtml(exp.focus)}</p>`
                              : ""
                          }
                          <p class="experience-project-line">
                            <strong>${escapeHtml(rp.projectLabel)}:</strong>
                            ${
                              exp.projectLink
                                ? `<a href="${escapeHtml(exp.projectLink)}">${escapeHtml(exp.project)}</a>`
                                : `<span>${escapeHtml(exp.project)}</span>`
                            }
                          </p>
                          ${
                            exp.projectTags?.length
                              ? `<div class="experience-project-pills" aria-label="${escapeHtml(rp.activeProjectsLabel || "Platforms")}">
                                  ${exp.projectTags.map((tag) => `<span class="experience-project-pill">${escapeHtml(tag)}</span>`).join("")}
                                </div>`
                              : ""
                          }
                        </div>
                        <span class="experience-period-badge ${exp.isCurrent ? "is-current" : ""}">${escapeHtml(exp.period)}</span>
                      </div>

                      <div>
                        <p class="experience-subhead">${escapeHtml(rp.responsibilitiesLabel)}</p>
                        <ul class="detail-list">
                          ${exp.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                        </ul>
                      </div>

                      <div>
                        <p class="experience-subhead">${escapeHtml(rp.contributionsLabel)}</p>
                        <div class="experience-scope-grid">
                          ${exp.contributions
                            .map(
                              (scope) => `
                            <div class="experience-scope-item">
                              <span class="experience-scope-badge">${escapeHtml(scope.badge)}</span>
                              <p>${escapeHtml(scope.detail)}</p>
                            </div>`
                            )
                            .join("")}
                        </div>
                      </div>

                      <div>
                        <p class="experience-subhead">${escapeHtml(rp.techLabel)}</p>
                        ${tags(exp.tech)}
                      </div>
                    </article>`
                    )
                    .join("")}
                </div>
              </section>

              <section class="resume-numbered-section" id="resume-education">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.educationSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.educationTitle)}</h2>
                </div>
                <article class="card resume-edu-card">
                  <div class="resume-edu-head">
                    <div>
                      <h3>${escapeHtml(edu.title)}</h3>
                      <p class="education-subline">${escapeHtml(edu.subline)}</p>
                    </div>
                    <span class="experience-period-badge">${escapeHtml(edu.meta)}</span>
                  </div>
                  <p class="resume-edu-desc">${escapeHtml(edu.desc)}</p>
                  <div class="resume-edu-links">
                    <a class="text-link" href="#/education">${escapeHtml(c.educationLink)} ${icon("arrow")}</a>
                  </div>
                </article>
              </section>

              <section class="resume-numbered-section" id="resume-achievements">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.achievementsSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.achievementsTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.achievementsIntro)}</p>
                </div>
                <div class="evidence-grid">
                  ${awards
                    .map(
                      (item) => `
                    <article class="card evidence-card">
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
              </section>

              <section class="resume-numbered-section" id="scientific-research">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.researchSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.researchTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.researchIntro)}</p>
                </div>
                ${renderResearchProjectsGroup(researchList, rp)}
                ${renderConferencePapersGroup(papers, rp)}
              </section>

              <section class="resume-numbered-section" id="resume-certifications">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.certificationsSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.certificationsTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.certificationsIntro)}</p>
                </div>
                <div class="resume-credentials-split">
                  <div class="card resume-certs-card">
                    <div class="resume-certs-card-top">
                      <span class="resume-cert-stats-note">${escapeHtml(rp.certStatsNote)}</span>
                      <a class="text-link" href="#/certifications">${escapeHtml(rp.browseAllCerts)} ${icon("arrow")}</a>
                    </div>
                    <div class="resume-cert-compact-list">
                      ${featuredCerts
                        .map(
                          (cert) => `
                        <button type="button" class="resume-cert-row" data-cert-id="${escapeHtml(cert.id)}">
                          <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)}" width="64" height="48" loading="lazy">
                          <div class="resume-cert-row-body">
                            <strong>${escapeHtml(cert.title)}</strong>
                            <span>${escapeHtml(cert.issuer)} · ${escapeHtml(cert.date)}${cert.subCourses?.length ? ` · ${cert.subCourses.length} courses` : ""}</span>
                          </div>
                          <span class="resume-cert-inspect-icon" aria-hidden="true">${icon("zoom")}</span>
                        </button>`
                        )
                        .join("")}
                    </div>
                  </div>

                  <div class="card resume-lang-card">
                    <h3>${escapeHtml(rp.languagesTitle)}</h3>
                    <ul class="resume-language-list">
                      ${profile.languages
                        .map(
                          (language) => `
                        <li>
                          <strong>${escapeHtml(language.name)}</strong>
                          <span>${escapeHtml(language.level)}</span>
                        </li>`
                        )
                        .join("")}
                    </ul>
                  </div>
                </div>
              </section>

              <section class="resume-numbered-section" id="project-experience">
                <div class="resume-section-head">
                  <span class="resume-section-label">${escapeHtml(rp.projectExpSectionLabel)}</span>
                  <h2 class="section-title">${escapeHtml(rp.projectExpTitle)}</h2>
                  <p class="resume-section-intro">${escapeHtml(rp.projectExpIntro)}</p>
                </div>
                <div class="cv-projects-list">
                  ${cvProjects
                    .map(
                      (proj) => `
                    <article class="card cv-project-card">
                      <div class="cv-project-head">
                        <div>
                          <h3>${escapeHtml(proj.title)}</h3>
                          <p class="cv-project-role">${escapeHtml(proj.role)} · ${escapeHtml(proj.year)}</p>
                        </div>
                        <div class="cv-project-actions">
                          ${proj.slug ? `<a class="text-link" href="#/project/${escapeHtml(proj.slug)}">${escapeHtml(rp.viewCaseStudy)} ${icon("arrow")}</a>` : ""}
                          ${proj.repo ? `<a class="text-link" href="${escapeHtml(proj.repo)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(rp.viewRepo)}</a>` : ""}
                        </div>
                      </div>
                      <ul class="detail-list">
                        ${proj.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
                      </ul>
                      ${tags(proj.tech)}
                    </article>`
                    )
                    .join("")}
                </div>
                <div style="margin-top: var(--space-5);">
                  <a class="button" href="#/project">${escapeHtml(rp.viewAllProjects)} ${icon("arrow")}</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>`;
}
