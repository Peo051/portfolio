import { escapeHtml, icon } from "../utils/dom.js";
import { certifications, standaloneCourses, allCourseraCourses } from "../data/certifications.js";
import { pageHero } from "./projects.js";

function matchesQuery(item, q, lang) {
  if (!q) return true;
  const needle = q.toLowerCase();
  if (item.title.toLowerCase().includes(needle)) return true;
  if (item.issuer?.toLowerCase().includes(needle)) return true;
  if (item[lang]?.summary?.toLowerCase().includes(needle)) return true;
  if (item.subCourses?.some((sub) => sub.title.toLowerCase().includes(needle))) return true;
  return false;
}

export function renderCertifications(lang, t, state) {
  const ct = t.certs;
  const c = t.common;
  const filter = state.certFilter || "all";
  const query = state.certSearch || "";

  const googleProgramsCount = certifications.filter((item) => item.issuer === "Google via Coursera").length;
  const otherCount = certifications.length - googleProgramsCount;
  const verifiedCount =
    certifications.filter((item) => Boolean(item.verify)).length +
    allCourseraCourses.filter((item) => Boolean(item.verify)).length;

  const isStandaloneView = filter === "standalone";

  const filteredItems = isStandaloneView
    ? standaloneCourses.filter((item) => matchesQuery(item, query, lang))
    : certifications.filter((item) => {
        const catOk = filter === "all" || item.category === filter;
        return catOk && matchesQuery(item, query, lang);
      });

  const totalInView = isStandaloneView ? standaloneCourses.length : certifications.length;

  const filterButtons = [
    ["all", ct.filterAll],
    ["ai", ct.filterAi],
    ["data", ct.filterData],
    ["security", ct.filterSecurity],
    ["ux", ct.filterUx],
    ["career", ct.filterCareer],
    ["standalone", `${ct.filterStandalone} (${standaloneCourses.length})`]
  ];

  return `
    <div class="page route-enter">
      ${pageHero(t.pages.certifications)}
      <section class="section">
        <div class="shell">
          <div class="cert-stats-grid">
            <div class="cert-stat-card">
              <span class="cert-stat-value">${googleProgramsCount}</span>
              <span class="cert-stat-label">${escapeHtml(ct.statPrograms)}</span>
            </div>
            <div class="cert-stat-card">
              <span class="cert-stat-value">${allCourseraCourses.length}</span>
              <span class="cert-stat-label">${escapeHtml(ct.statCourses)}</span>
            </div>
            <div class="cert-stat-card">
              <span class="cert-stat-value">${otherCount}</span>
              <span class="cert-stat-label">${escapeHtml(ct.statOther)}</span>
            </div>
            <div class="cert-stat-card">
              <span class="cert-stat-value">${verifiedCount}</span>
              <span class="cert-stat-label">${escapeHtml(ct.statVerified)}</span>
            </div>
          </div>

          <div class="cert-toolbar">
            <div class="cert-search-wrap">
              <span class="cert-search-icon" aria-hidden="true">${icon("search")}</span>
              <label class="sr-only" for="certSearchInput">${escapeHtml(ct.searchPlaceholder)}</label>
              <input
                id="certSearchInput"
                class="cert-search-input"
                type="search"
                value="${escapeHtml(query)}"
                placeholder="${escapeHtml(ct.searchPlaceholder)}"
                autocomplete="off"
              >
            </div>

            <div class="cert-filter-group" role="tablist" aria-label="Certification domains">
              ${filterButtons
                .map(
                  ([key, label]) => `
                <button
                  type="button"
                  role="tab"
                  aria-selected="${filter === key ? "true" : "false"}"
                  class="cert-filter-btn ${filter === key ? "is-active" : ""}"
                  data-cert-filter="${escapeHtml(key)}"
                >${escapeHtml(label)}</button>`
                )
                .join("")}
            </div>
          </div>

          <p class="cert-results-meta">
            ${escapeHtml(ct.showingLabel)} <strong>${filteredItems.length}</strong> ${escapeHtml(ct.ofLabel)} <strong>${totalInView}</strong> ${escapeHtml(ct.itemsLabel)}
            ${isStandaloneView ? ` — ${escapeHtml(ct.standaloneSub)}` : ""}
          </p>

          ${
            filteredItems.length === 0
              ? `
            <div class="cert-empty">
              <h3>${escapeHtml(ct.emptyTitle)}</h3>
              <p>${escapeHtml(ct.emptyDesc)}</p>
            </div>`
              : `
            <h2 class="sr-only">${escapeHtml(t.pages.certifications.eyebrow)} (${filteredItems.length})</h2>
            <div class="cert-grid">
              ${filteredItems
                .map((item) => {
                  const subCount = item.subCourses?.length || 0;
                  const summary = item[lang]?.summary || `${item.issuer} · ${item.credentialType}`;
                  const dataAttr = isStandaloneView
                    ? `data-standalone-id="${escapeHtml(item.id)}"`
                    : `data-cert-id="${escapeHtml(item.id)}"`;
                  return `
                  <article class="card cert-card">
                    <button type="button" class="cert-thumb-btn" ${dataAttr} aria-label="${escapeHtml(item.title)}">
                      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async">
                    </button>
                    <div class="cert-content">
                      <div class="cert-meta-top">
                        <span class="cert-issuer">${escapeHtml(item.credentialType)}</span>
                        <span class="cert-date">${escapeHtml(item.date || item.year)}</span>
                      </div>
                      <h3>${escapeHtml(item.title)}</h3>
                      <p>${escapeHtml(summary)}</p>
                      <div class="cert-actions">
                        <button type="button" class="button sm" ${dataAttr}>
                          ${icon("zoom")} ${subCount > 0 ? `${escapeHtml(ct.viewCourses)} (${subCount})` : escapeHtml(ct.viewDetails)}
                        </button>
                        ${item.verify ? `<a class="text-link" href="${escapeHtml(item.verify)}" target="_blank" rel="noreferrer">${icon("external")} Verify</a>` : ""}
                      </div>
                    </div>
                  </article>`;
                })
                .join("")}
            </div>`
          }
        </div>
      </section>
    </div>`;
}
