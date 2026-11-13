// Central Motion & Micro-Interaction Engine
// Handles WAAPI choreographed entrances, View Transitions, scroll progress, 3D portrait tilt,
// magnetic CTAs, card spotlight tracking, timeline scroll-draw, counter animations, and cleanup.

const cleanups = [];
let globalInitialized = false;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function addPageListener(target, type, handler, options) {
  if (!target) return;
  target.addEventListener(type, handler, options);
  cleanups.push(() => target.removeEventListener(type, handler, options));
}

/**
 * Updates the fixed top scroll-progress bar and header elevation state passively.
 */
export function initGlobalMotion() {
  if (globalInitialized) return;
  globalInitialized = true;

  const progressBar = document.getElementById("scrollProgressBar");
  const header = document.getElementById("siteHeader");
  let ticking = false;

  const updateScroll = () => {
    ticking = false;
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    if (progressBar) {
      progressBar.style.setProperty("--scroll-progress", ratio.toFixed(4));
    }
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScroll);
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateScroll, { passive: true });
  updateScroll();
}

/**
 * Wraps DOM updates in native View Transitions API when supported and safe.
 * @param {() => void} updateDomFn
 */
export function runViewTransition(updateDomFn) {
  if (typeof document.startViewTransition === "function" && !prefersReducedMotion()) {
    try {
      const transition = document.startViewTransition(() => {
        updateDomFn();
      });
      return transition.finished.catch(() => {});
    } catch {
      updateDomFn();
      return Promise.resolve();
    }
  }
  updateDomFn();
  return Promise.resolve();
}

/**
 * Cleans up page-scoped observers, rAF loops, and event handlers before re-render.
 */
export function cleanupPageMotion() {
  while (cleanups.length > 0) {
    const fn = cleanups.pop();
    try {
      fn();
    } catch {
      // Ignore already detached nodes
    }
  }
}

function animateHeroEntrance(rootEl) {
  if (prefersReducedMotion()) return;
  const targets = [
    rootEl.querySelector(".hero-eyebrow"),
    rootEl.querySelector(".hero-name"),
    rootEl.querySelector(".hero-role"),
    rootEl.querySelector(".hero-desc"),
    rootEl.querySelector(".hero-actions"),
    rootEl.querySelector(".portrait-card")
  ].filter(Boolean);

  targets.forEach((el, idx) => {
    if (typeof el.animate !== "function") return;
    el.animate(
      [
        { opacity: 0.94, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 320,
        delay: Math.min(idx * 35, 140),
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "backwards"
      }
    );
  });
}

function animateCounterElement(el) {
  if (!el || el.dataset.counterAnimated === "true") return;
  el.dataset.counterAnimated = "true";

  const targetRaw = el.dataset.counterTarget;
  if (!targetRaw) return;
  const target = Number.parseFloat(targetRaw);
  if (!Number.isFinite(target)) return;

  const decimals = Number.parseInt(el.dataset.counterDecimals || "0", 10);
  const suffix = el.dataset.counterSuffix || "";
  const prefix = el.dataset.counterPrefix || "";

  if (prefersReducedMotion()) {
    el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    return;
  }

  const duration = 360;
  const start = performance.now();
  let rafId = 0;

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * (0.45 + 0.55 * eased);
    el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
    if (progress < 1) {
      rafId = window.requestAnimationFrame(step);
    } else {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      rafId = 0;
    }
  };

  cleanups.push(() => {
    if (rafId) window.cancelAnimationFrame(rafId);
  });
  rafId = window.requestAnimationFrame(step);
}

function attachCounters(rootEl) {
  const counters = Array.from(rootEl.querySelectorAll("[data-counter-target]"));
  if (counters.length === 0) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    counters.forEach(animateCounterElement);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounterElement(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  counters.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

function attachRevealChoreography(rootEl) {
  const elements = Array.from(rootEl.querySelectorAll(".reveal"));
  if (elements.length === 0) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Assign stagger index among siblings within common grids
  rootEl
    .querySelectorAll(".focus-grid, .projects-grid, .cert-grid, .skills-grid, .evidence-grid, .research-papers-grid, .contact-grid, .project-gallery-grid")
    .forEach((container) => {
      Array.from(container.querySelectorAll(":scope > .reveal")).forEach((child, idx) => {
        child.style.setProperty("--stagger-index", String(Math.min(idx, 5)));
      });
    });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.04, rootMargin: "0px 0px 90px 0px" }
  );

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 90) {
      el.classList.add("is-visible");
    } else {
      io.observe(el);
    }
  });
  cleanups.push(() => io.disconnect());
}

function attachCardSpotlights(rootEl) {
  if (!hasFinePointer() || prefersReducedMotion()) return;
  const cards = rootEl.querySelectorAll(".card");
  cards.forEach((card) => {
    addPageListener(
      card,
      "pointermove",
      (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 100;
        const y = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 100;
        card.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
        card.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
      },
      { passive: true }
    );
  });
}

function attachPortraitTilt(rootEl) {
  if (!hasFinePointer() || prefersReducedMotion()) return;
  const card = rootEl.querySelector("[data-tilt-card]");
  if (!card) return;

  addPageListener(
    card,
    "pointermove",
    (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / Math.max(1, rect.width);
      const py = (e.clientY - rect.top) / Math.max(1, rect.height);
      const rotY = (px - 0.5) * 9;
      const rotX = (0.5 - py) * 9;
      card.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-2px)`;
      card.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
      card.classList.add("is-tilting");
    },
    { passive: true }
  );

  addPageListener(
    card,
    "pointerleave",
    () => {
      card.style.transform = "";
      card.classList.remove("is-tilting");
    },
    { passive: true }
  );
}

function attachMagneticButtons(rootEl) {
  if (!hasFinePointer() || prefersReducedMotion()) return;
  const buttons = rootEl.querySelectorAll("[data-magnetic], .button.primary");
  buttons.forEach((btn) => {
    addPageListener(
      btn,
      "pointermove",
      (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.14;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
        const cx = Math.max(-6, Math.min(6, dx));
        const cy = Math.max(-5, Math.min(5, dy));
        btn.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      },
      { passive: true }
    );
    addPageListener(
      btn,
      "pointerleave",
      () => {
        btn.style.transform = "";
      },
      { passive: true }
    );
  });
}

function attachTimelineScrollDraw(rootEl) {
  const timelines = Array.from(rootEl.querySelectorAll("[data-timeline-progress]"));
  if (timelines.length === 0) return;

  const update = () => {
    const viewportMid = window.innerHeight * 0.72;
    timelines.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const total = Math.max(120, rect.height);
      const passed = viewportMid - rect.top;
      const ratio = prefersReducedMotion() ? 1 : Math.min(1, Math.max(0.18, passed / total));
      el.style.setProperty("--timeline-fill", `${(ratio * 100).toFixed(1)}%`);
    });
  };

  let ticking = false;
  addPageListener(
    window,
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          ticking = false;
          update();
        });
      }
    },
    { passive: true }
  );
  update();
}

function attachSpotlightRail(rootEl) {
  const wrap = rootEl.querySelector("[data-spotlight-wrap]");
  if (!wrap) return;

  const track = wrap.querySelector("[data-spotlight-track]");
  const prevBtn = wrap.querySelector("[data-spotlight-prev]");
  const nextBtn = wrap.querySelector("[data-spotlight-next]");
  const progressFill = wrap.querySelector("[data-spotlight-progress]");
  const dots = Array.from(wrap.querySelectorAll("[data-spotlight-dot]"));
  const cards = Array.from(wrap.querySelectorAll(".spotlight-card"));
  if (!track || cards.length === 0) return;

  const getStepWidth = () => {
    const first = cards[0];
    if (!first) return 320;
    const style = window.getComputedStyle(track);
    const gap = Number.parseFloat(style.columnGap || style.gap || "16") || 16;
    return first.getBoundingClientRect().width + gap;
  };

  const syncState = () => {
    const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
    const ratio = Math.min(1, Math.max(0, track.scrollLeft / maxScroll));
    if (progressFill) {
      progressFill.style.transform = `scaleX(${Math.max(0.18, ratio).toFixed(3)})`;
    }
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 4;
    if (nextBtn) nextBtn.disabled = track.scrollLeft >= maxScroll - 4;

    const stepW = Math.max(1, getStepWidth());
    const activeIdx = Math.min(cards.length - 1, Math.round(track.scrollLeft / stepW));
    dots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === activeIdx);
      dot.setAttribute("aria-selected", idx === activeIdx ? "true" : "false");
    });
  };

  const scrollByStep = (direction) => {
    const stepW = getStepWidth();
    track.scrollBy({
      left: direction * stepW,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  };

  addPageListener(prevBtn, "click", () => scrollByStep(-1));
  addPageListener(nextBtn, "click", () => scrollByStep(1));
  dots.forEach((dot, idx) => {
    addPageListener(dot, "click", () => {
      const stepW = getStepWidth();
      track.scrollTo({
        left: idx * stepW,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    });
  });

  addPageListener(track, "keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByStep(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByStep(-1);
    }
  });

  addPageListener(track, "scroll", syncState, { passive: true });
  addPageListener(window, "resize", syncState, { passive: true });
  syncState();
}

/**
 * Initializes all page-scoped motion, reveal observers, tilt, magnetic interactions, and counters.
 * Always cleans up prior page registrations first.
 * @param {HTMLElement} rootEl
 * @param {() => void} [mountCanvasFn]
 */
export function initPageMotion(rootEl, mountCanvasFn) {
  cleanupPageMotion();
  if (!rootEl) return;

  if (typeof mountCanvasFn === "function") {
    const canvasCleanup = mountCanvasFn();
    if (typeof canvasCleanup === "function") {
      cleanups.push(canvasCleanup);
    }
  }

  animateHeroEntrance(rootEl);
  attachRevealChoreography(rootEl);
  attachCounters(rootEl);
  attachCardSpotlights(rootEl);
  attachPortraitTilt(rootEl);
  attachMagneticButtons(rootEl);
  attachTimelineScrollDraw(rootEl);
  attachSpotlightRail(rootEl);
}
