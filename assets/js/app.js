import { i18n } from "./data/i18n.js";
import { projects } from "./data/projects.js";
import { certifications, standaloneCourses } from "./data/certifications.js";
import { achievements } from "./data/achievements.js";
import { createLightbox } from "./components/lightbox.js";
import { mountHeroCanvas } from "./components/hero-canvas.js";
import { renderHome } from "./pages/home.js";
import { renderProjects, renderProjectDetail } from "./pages/projects.js";
import { renderSkills } from "./pages/skills.js";
import { renderCertifications } from "./pages/certifications.js";
import { renderAchievements } from "./pages/achievements.js";
import { renderEducation } from "./pages/education.js";
import { renderResume } from "./pages/resume.js";
import { renderContact } from "./pages/contact.js";
import { escapeHtml, icon } from "./utils/dom.js";
import { initGlobalMotion, initPageMotion, runViewTransition } from "./utils/motion.js";

const app = document.getElementById("app");
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const state = {
  lang: localStorage.getItem("portfolio-language") || "vi",
  certFilter: "all",
  certSearch: "",
  skillFilter: "all",
  archTab: "backend"
};

if (!i18n[state.lang]) state.lang = "vi";

const getLang = () => state.lang;
const getText = () => i18n[state.lang];

const lightbox = createLightbox({ getLang, getText });

function normalizeRoute() {
  let hash = window.location.hash || "#/";
  if (!hash.startsWith("#/")) hash = "#/";
  return hash.slice(1).replace(/\/$/, "") || "/";
}

function setActiveNavigation(route) {
  const rootRoute = route.startsWith("/project/")
    ? "/project"
    : route === "/projects"
      ? "/project"
      : route === "/skills"
        ? "/skill"
        : route === "/achievements"
          ? "/achievement"
          : route === "/certification" || route === "/certificates"
            ? "/certifications"
            : route;

  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === rootRoute);
  });
}

function updateNavigationLabels() {
  const n = getText().nav;
  const map = [
    ["/", n.home],
    ["/project", n.projects],
    ["/skill", n.skills],
    ["/certifications", n.certifications],
    ["/achievement", n.achievements],
    ["/resume", n.resume],
    ["/contact", n.contact]
  ];
  document.querySelectorAll("[data-route]").forEach((link) => {
    const item = map.find(([route]) => route === link.dataset.route);
    if (item) link.textContent = item[1];
  });
  const footerLine = document.querySelector("[data-i18n='footerLine']");
  if (footerLine) footerLine.textContent = getText().common.footerLine;
  const footerEdu = document.querySelector("[data-i18n='footerEdu']");
  if (footerEdu) footerEdu.textContent = getText().common.educationLink;
  const footerCv = document.querySelector("[data-i18n='footerCv']");
  if (footerCv) footerCv.textContent = getText().common.footerCv;
}

function closeMobileMenu() {
  mobileNav?.classList.remove("is-open");
  menuToggle?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function renderArchStagePanel() {
  const h = getText().home;
  const tabs = h.archTabs || [];
  const active = tabs.find((tab) => tab.id === state.archTab) || tabs[0];
  if (!active) return;

  const stage = app.querySelector(".arch-walkthrough .arch-stage-panel");
  if (!stage) return;

  stage.innerHTML = `
    <div class="arch-stage-copy">
      <h3>${escapeHtml(active.title)}</h3>
      <p>${escapeHtml(active.desc)}</p>
      <a class="text-link" href="#/project/${escapeHtml(active.projectSlug)}">${escapeHtml(active.cta)} ${icon("arrow")}</a>
    </div>
    <div class="arch-pipeline">
      ${active.nodes
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
  `;

  app.querySelectorAll("[data-arch-tab]").forEach((btn) => {
    const isSel = btn.dataset.archTab === active.id;
    btn.classList.toggle("is-active", isSel);
    btn.setAttribute("aria-selected", isSel ? "true" : "false");
  });
}

function applySkillFilterInPlace() {
  const filter = state.skillFilter || "all";
  app.querySelectorAll("[data-skill-filter]").forEach((btn) => {
    const active = btn.dataset.skillFilter === filter;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  app.querySelectorAll("[data-skill-domain]").forEach((card) => {
    const show = filter === "all" || card.dataset.skillDomain === filter;
    card.classList.toggle("is-hidden", !show);
    if (show) card.classList.add("is-visible");
  });
}

function attachPageHandlers() {
  app.querySelectorAll("[data-cert-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const cert = certifications.find((c) => c.id === el.dataset.certId);
      if (cert) lightbox.open(cert);
    });
  });

  app.querySelectorAll("[data-standalone-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const course = standaloneCourses.find((c) => c.id === el.dataset.standaloneId);
      if (course) lightbox.open(course);
    });
  });

  app.querySelectorAll("[data-proof-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const item = achievements[state.lang].find((a) => a.id === el.dataset.proofId);
      if (item) lightbox.open(item);
    });
  });

  app.querySelectorAll("[data-cert-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.certFilter = btn.dataset.certFilter;
      render({ preserveScroll: true });
    });
  });

  const searchInput = document.getElementById("certSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.certSearch = e.target.value;
      const pos = e.target.selectionStart ?? state.certSearch.length;
      render({ preserveScroll: true, focusInputId: "certSearchInput", focusSearchPos: pos });
    });
  }

  app.querySelectorAll("[data-arch-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.archTab = btn.dataset.archTab;
      renderArchStagePanel();
    });
  });

  app.querySelectorAll("[data-skill-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.skillFilter = btn.dataset.skillFilter;
      applySkillFilterInPlace();
    });
  });

  app.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.scrollTarget);
      if (target) {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      }
    });
  });

  app.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const email = btn.dataset.copyEmail;
      if (!email) return;
      const feedback = btn.parentElement?.querySelector(".copy-feedback");
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(email);
        }
      } catch {
        // Fallback silently; toast still confirms action
      }
      if (feedback) {
        feedback.hidden = false;
        feedback.classList.add("is-visible");
        window.setTimeout(() => {
          feedback.classList.remove("is-visible");
          feedback.hidden = true;
        }, 2200);
      }
    });
  });

  app.querySelectorAll("[data-gallery-project]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.dataset.galleryProject;
      const idx = Number.parseInt(btn.dataset.galleryIdx || "0", 10);
      const proj = projects.find((p) => p.slug === slug);
      if (!proj) return;
      const items = [
        ...(proj.gallery || []),
        {
          src: proj.cover,
          type: "technical-illustration",
          title: { en: `${proj.title} — Visual Cover`, vi: `${proj.title} — Ảnh bìa Tổng quan` },
          caption: { en: proj.en.summary, vi: proj.vi.summary }
        }
      ];
      const safeIdx = idx < (proj.gallery?.length || 0) ? idx : 0;
      lightbox.openGallery(items, safeIdx, proj);
    });
  });

  app.querySelectorAll("[data-arch-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.dataset.archOpen;
      const proj = projects.find((p) => p.slug === slug);
      if (!proj) return;
      lightbox.openGallery(
        [
          {
            src: proj.architectureSvg,
            type: "architecture",
            title: { en: "System Architecture Diagram", vi: "Sơ đồ Kiến trúc Hệ thống" },
            caption: { en: proj.en.architectureNotes.join(" "), vi: proj.vi.architectureNotes.join(" ") }
          }
        ],
        0,
        proj
      );
    });
  });
}

function renderNotFound() {
  return `
    <div class="page route-enter">
      <section class="section">
        <div class="shell">
          <p class="eyebrow">404</p>
          <h1 class="page-title">Page not found</h1>
          <a class="button primary" href="#/">${escapeHtml(getText().nav.home)}</a>
        </div>
      </section>
    </div>`;
}

function buildRouteHtml(route) {
  const t = getText();
  if (route === "/") return renderHome(state.lang, t, state);
  if (route === "/skill" || route === "/skills") return renderSkills(state.lang, t, state);
  if (route === "/project" || route === "/projects") return renderProjects(state.lang, t);
  if (route === "/certifications" || route === "/certification" || route === "/certificates") {
    return renderCertifications(state.lang, t, state);
  }
  if (route === "/education") return renderEducation(state.lang, t);
  if (route === "/achievement" || route === "/achievements") return renderAchievements(state.lang, t);
  if (route === "/resume") return renderResume(state.lang, t);
  if (route === "/contact") return renderContact(state.lang, t);
  if (route.startsWith("/project/")) return renderProjectDetail(route.split("/").pop(), state.lang, t);
  return renderNotFound();
}

function render(options = {}) {
  const route = normalizeRoute();
  const html = buildRouteHtml(route);

  const commitDom = () => {
    app.innerHTML = html;
    setActiveNavigation(route);
    updateNavigationLabels();
    closeMobileMenu();
    attachPageHandlers();
    initPageMotion(app, () => mountHeroCanvas(document.getElementById("heroCanvas")));

    if (typeof options.focusSearchPos === "number") {
      const input = document.getElementById(options.focusInputId || "certSearchInput");
      if (input) {
        input.focus();
        input.setSelectionRange(options.focusSearchPos, options.focusSearchPos);
      }
    }

    if (!options.preserveScroll) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    document.title =
      route === "/"
        ? "Trần Dương Gia Bảo | Software Engineering Portfolio"
        : `${route.split("/").filter(Boolean).pop()?.replaceAll("-", " ").toUpperCase() || "Portfolio"} | Trần Dương Gia Bảo`;
  };

  if (options.useTransition && !options.preserveScroll) {
    runViewTransition(commitDom);
  } else {
    commitDom();
  }
}

function applyTheme(theme) {
  const safeTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = safeTheme;
  localStorage.setItem("portfolio-theme", safeTheme);
  themeToggle?.setAttribute("aria-label", safeTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", safeTheme === "dark" ? "#060911" : "#f8fafc");
}

const initialTheme =
  localStorage.getItem("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

languageToggle?.addEventListener("click", () => {
  state.lang = state.lang === "en" ? "vi" : "en";
  localStorage.setItem("portfolio-language", state.lang);
  languageToggle.textContent = state.lang === "en" ? "VI" : "EN";
  document.documentElement.lang = state.lang;
  render({ preserveScroll: true });
});

menuToggle?.addEventListener("click", () => {
  const open = !mobileNav.classList.contains("is-open");
  mobileNav.classList.toggle("is-open", open);
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileMenu();
});

window.addEventListener("hashchange", () => render({ useTransition: true }));
initGlobalMotion();

const yearEl = document.getElementById("currentYear");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
if (languageToggle) languageToggle.textContent = state.lang === "en" ? "VI" : "EN";
document.documentElement.lang = state.lang;

if (!window.location.hash) {
  window.location.hash = "#/";
} else {
  render();
}
