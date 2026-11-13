import { escapeHtml, icon } from "../utils/dom.js";

let previousFocus = null;

function badgeForType(type, projectsText) {
  if (type === "real-screenshot") return projectsText.badgeReal;
  if (type === "benchmark-figure") return projectsText.badgeBenchmark;
  if (type === "architecture") return projectsText.archTitle;
  return projectsText.badgeIllustration;
}

export function createLightbox({ getLang, getText }) {
  const modal = document.getElementById("lightboxModal");
  const backdrop = document.getElementById("lightboxBackdrop");
  const closeBtn = document.getElementById("lightboxClose");
  const imgEl = document.getElementById("lightboxImage");
  const titleEl = document.getElementById("lightboxTitle");
  const subtitleEl = document.getElementById("lightboxSubtitle");
  const actionEl = document.getElementById("lightboxAction");
  const subcoursesEl = document.getElementById("lightboxSubcourses");

  let gallerySession = null;

  function renderActions(verifyUrl, imgUrl, repoUrl, navControlsHtml = "") {
    const c = getText().common;
    let html = navControlsHtml;
    if (verifyUrl) {
      html += `<a class="button primary sm" href="${escapeHtml(verifyUrl)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(c.verifyLink)}</a>`;
    }
    if (repoUrl) {
      html += `<a class="button primary sm" href="${escapeHtml(repoUrl)}" target="_blank" rel="noreferrer">${icon("github")} ${escapeHtml(c.repo)}</a>`;
    }
    if (imgUrl) {
      html += `<a class="button ghost sm" href="${escapeHtml(imgUrl)}" target="_blank" rel="noreferrer">${icon("external")} ${escapeHtml(c.viewFullImg)}</a>`;
    }
    return html;
  }

  function close() {
    if (!modal || !modal.classList.contains("is-active")) return;
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    gallerySession = null;
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
      previousFocus = null;
    }
  }

  function renderGallerySlide(nextIndex) {
    if (!gallerySession) return;
    const { items, projectMeta } = gallerySession;
    const total = items.length;
    const safeIdx = ((nextIndex % total) + total) % total;
    gallerySession.index = safeIdx;

    const item = items[safeIdx];
    const lang = getLang();
    const pText = getText().projectsPage;
    const slideTitle = typeof item.title === "object" ? item.title[lang] : item.title;
    const slideCaption = typeof item.caption === "object" ? item.caption[lang] : item.caption;
    const typeLabel = badgeForType(item.type, pText);

    imgEl.classList.add("is-switching");
    imgEl.src = item.src;
    imgEl.alt = slideTitle || projectMeta.title;
    window.setTimeout(() => imgEl.classList.remove("is-switching"), 160);
    titleEl.textContent = `${projectMeta.title} — ${slideTitle || ""}`;
    subtitleEl.textContent = `${typeLabel} (${safeIdx + 1}/${total}) · ${slideCaption || ""}`;

    const navHtml =
      total > 1
        ? `
      <button type="button" class="button sm lightbox-nav-btn" data-lb-prev aria-label="${escapeHtml(pText.prevSlide)}">
        ${icon("chevronLeft")} ${escapeHtml(pText.prevSlide)}
      </button>
      <button type="button" class="button sm lightbox-nav-btn" data-lb-next aria-label="${escapeHtml(pText.nextSlide)}">
        ${escapeHtml(pText.nextSlide)} ${icon("chevronRight")}
      </button>`
        : "";

    actionEl.innerHTML = renderActions(null, item.src, projectMeta.repo, navHtml);

    actionEl.querySelector("[data-lb-prev]")?.addEventListener("click", () => {
      renderGallerySlide(gallerySession.index - 1);
    });
    actionEl.querySelector("[data-lb-next]")?.addEventListener("click", () => {
      renderGallerySlide(gallerySession.index + 1);
    });

    if (total > 1) {
      subcoursesEl.innerHTML = `
        <div class="lightbox-subcourses-title">
          ${icon("layers")} ${escapeHtml(pText.galleryTitle)} (${safeIdx + 1}/${total})
        </div>
        <div class="lightbox-subcourses-grid">
          ${items
            .map((slide, idx) => {
              const sTitle = typeof slide.title === "object" ? slide.title[lang] : slide.title;
              const sBadge = badgeForType(slide.type, pText);
              return `
                <button type="button" class="subcourse-card ${idx === safeIdx ? "is-active" : ""}" data-gal-thumb="${idx}">
                  <span class="subcourse-thumb">
                    <img src="${escapeHtml(slide.src)}" alt="${escapeHtml(sTitle)}" loading="lazy" decoding="async">
                  </span>
                  <span class="subcourse-card-title">${escapeHtml(sTitle)}</span>
                  <span class="subcourse-card-badge">${escapeHtml(sBadge)}</span>
                </button>`;
            })
            .join("")}
        </div>
      `;
      subcoursesEl.style.display = "block";
      subcoursesEl.querySelectorAll("[data-gal-thumb]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetIdx = Number.parseInt(btn.dataset.galThumb, 10);
          renderGallerySlide(targetIdx);
        });
      });
    } else {
      subcoursesEl.innerHTML = "";
      subcoursesEl.style.display = "none";
    }
  }

  function openGallery(items, startIndex = 0, projectMeta = {}) {
    if (!modal || !Array.isArray(items) || items.length === 0) return;
    previousFocus = document.activeElement;
    gallerySession = { items, index: startIndex, projectMeta };
    renderGallerySlide(startIndex);

    const dialog = modal.querySelector(".lightbox-dialog");
    if (dialog) dialog.scrollTop = 0;

    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function open(item) {
    if (!modal || !item) return;
    gallerySession = null;
    previousFocus = document.activeElement;
    const lang = getLang();
    const c = getText().common;
    const body = item[lang] || item;

    imgEl.src = item.image;
    imgEl.alt = item.title;
    titleEl.textContent = item.title;

    if (item.issuer) {
      const meta = [item.issuer, item.credentialType, item.date || item.year].filter(Boolean).join(" · ");
      const summary = body.summary ? ` — ${body.summary}` : "";
      subtitleEl.textContent = `${meta}${summary}`;
    } else {
      subtitleEl.textContent = `${item.label || ""} · ${item.year || ""} — ${item.detail || ""}`;
    }

    actionEl.innerHTML = renderActions(item.verify, item.image, item.repo);

    if (item.subCourses && item.subCourses.length > 0) {
      const allList = [
        {
          title: item.title,
          image: item.image,
          verify: item.verify,
          date: item.date || item.year,
          isMain: true
        },
        ...item.subCourses
      ];

      subcoursesEl.innerHTML = `
        <div class="lightbox-subcourses-title">
          ${icon("certificate")} ${escapeHtml(c.subcoursesTitle)} (${item.subCourses.length})
        </div>
        <div class="lightbox-subcourses-grid">
          ${allList
            .map(
              (sub, idx) => `
            <button type="button" class="subcourse-card ${idx === 0 ? "is-active" : ""}" data-sub-idx="${idx}">
              <span class="subcourse-thumb">
                <img src="${escapeHtml(sub.image)}" alt="${escapeHtml(sub.title)}" loading="lazy" decoding="async">
              </span>
              <span class="subcourse-card-title">${escapeHtml(sub.title)}</span>
              ${sub.isMain ? `<span class="subcourse-card-badge">${escapeHtml(c.mainCertBadge)}</span>` : ""}
            </button>`
            )
            .join("")}
        </div>
      `;
      subcoursesEl.style.display = "block";

      subcoursesEl.querySelectorAll(".subcourse-card").forEach((card) => {
        card.addEventListener("click", () => {
          const idx = Number.parseInt(card.dataset.subIdx, 10);
          const selected = allList[idx];
          if (!selected) return;
          imgEl.src = selected.image;
          imgEl.alt = selected.title;
          titleEl.textContent = selected.title;
          subcoursesEl.querySelectorAll(".subcourse-card").forEach((el) => el.classList.remove("is-active"));
          card.classList.add("is-active");
          actionEl.innerHTML = renderActions(selected.verify, selected.image, null);
        });
      });
    } else {
      subcoursesEl.innerHTML = "";
      subcoursesEl.style.display = "none";
    }

    const dialog = modal.querySelector(".lightbox-dialog");
    if (dialog) dialog.scrollTop = 0;

    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  backdrop?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (!modal || !modal.classList.contains("is-active")) return;
    if (event.key === "Escape") {
      close();
    } else if (gallerySession && gallerySession.items.length > 1) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        renderGallerySlide(gallerySession.index - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        renderGallerySlide(gallerySession.index + 1);
      }
    }
  });

  return { open, openGallery, close };
}
