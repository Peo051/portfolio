// Interactive System Constellation Canvas for the Hero Section
// Adapts node count to viewport, theme colors automatically, pauses offscreen, and honors reduced-motion.

function getPalette() {
  const isLight = document.documentElement.dataset.theme === "light";
  return isLight
    ? {
        node: "rgba(2, 132, 199, 0.52)",
        nodeHighlight: "rgba(13, 148, 136, 0.85)",
        lineRgb: "2, 132, 199",
        pulseRgb: "13, 148, 136",
        cursorGlow: "rgba(2, 132, 199, 0.09)"
      }
    : {
        node: "rgba(56, 189, 248, 0.55)",
        nodeHighlight: "rgba(45, 212, 191, 0.9)",
        lineRgb: "56, 189, 248",
        pulseRgb: "45, 212, 191",
        cursorGlow: "rgba(56, 189, 248, 0.12)"
      };
}

/**
 * Mounts an interactive 2D node-constellation canvas inside the Hero section.
 * @param {HTMLCanvasElement | null} canvas
 * @returns {() => void} cleanup callback
 */
export function mountHeroCanvas(canvas) {
  if (!canvas || typeof canvas.getContext !== "function") {
    return () => {};
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return () => {};

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let nodes = [];
  let rafId = 0;
  let inView = true;
  let isPaused = false;
  let pointer = { x: -9999, y: -9999, active: false };
  let palette = getPalette();

  function buildNodes() {
    const count = width < 640 ? 16 : width < 1024 ? 26 : 36;
    const speedScale = reducedMotion ? 0 : width < 640 ? 0.22 : 0.34;
    nodes = Array.from({ length: count }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speedScale,
      vy: (Math.random() - 0.5) * speedScale,
      r: idx % 5 === 0 ? 2.6 : 1.7,
      accent: idx % 5 === 0,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    width = Math.max(300, Math.floor(rect.width));
    height = Math.max(320, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  function drawFrame(timeSec) {
    ctx.clearRect(0, 0, width, height);

    if (pointer.active) {
      const grad = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 210);
      grad.addColorStop(0, palette.cursorGlow);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    const linkDist = width < 640 ? 115 : 148;
    const linkDistSq = linkDist * linkDist;

    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];

      if (!reducedMotion) {
        a.x += a.vx;
        a.y += a.vy;

        if (pointer.active) {
          const dx = a.x - pointer.x;
          const dy = a.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 1 && distSq < 25600) {
            const dist = Math.sqrt(distSq);
            const force = (160 - dist) / 160;
            a.x += (dx / dist) * force * 0.45;
            a.y += (dy / dist) * force * 0.45;
          }
        }

        if (a.x < 12 || a.x > width - 12) a.vx *= -1;
        if (a.y < 12 || a.y > height - 12) a.vy *= -1;
        a.x = Math.max(8, Math.min(width - 8, a.x));
        a.y = Math.max(8, Math.min(height - 8, a.y));
      }

      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < linkDistSq) {
          const alpha = (1 - distSq / linkDistSq) * 0.24;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle =
            a.accent || b.accent
              ? `rgba(${palette.pulseRgb}, ${(alpha * 1.15).toFixed(3)})`
              : `rgba(${palette.lineRgb}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = a.accent || b.accent ? 1.15 : 0.85;
          ctx.stroke();

          // Travelling telemetry signal pulse on select accent edges
          if (!reducedMotion && (a.accent || b.accent) && (i + j) % 3 === 0) {
            const t = (Math.sin(timeSec * 1.2 + a.phase) + 1) * 0.5;
            const px = a.x + (b.x - a.x) * t;
            const py = a.y + (b.y - a.y) * t;
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${palette.pulseRgb}, 0.72)`;
            ctx.fill();
          }
        }
      }

      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = a.accent ? palette.nodeHighlight : palette.node;
      ctx.fill();
    }
  }

  function tick(now) {
    if (isPaused || !inView || reducedMotion) {
      rafId = 0;
      return;
    }
    drawFrame(now * 0.001);
    rafId = window.requestAnimationFrame(tick);
  }

  function startLoop() {
    if (reducedMotion || rafId || isPaused || !inView) return;
    rafId = window.requestAnimationFrame(tick);
  }

  function stopLoop() {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  const hostSection = canvas.closest(".hero") || canvas.parentElement;

  const onPointerMove = (e) => {
    if (!hostSection) return;
    const rect = hostSection.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  };

  const onPointerLeave = () => {
    pointer.active = false;
  };

  const onVisibilityChange = () => {
    isPaused = document.hidden;
    if (isPaused) stopLoop();
    else startLoop();
  };

  const themeObserver = new MutationObserver(() => {
    palette = getPalette();
    if (reducedMotion) drawFrame(0);
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });

  let io = null;
  if ("IntersectionObserver" in window && hostSection) {
    io = new IntersectionObserver(
      (entries) => {
        inView = Boolean(entries[0]?.isIntersecting);
        if (inView) startLoop();
        else stopLoop();
      },
      { threshold: 0.02 }
    );
    io.observe(hostSection);
  }

  let resizeTimer = 0;
  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resize();
      if (reducedMotion) drawFrame(0);
    }, 120);
  };

  resize();
  drawFrame(0);

  if (!reducedMotion) {
    startLoop();
    if (finePointer && hostSection) {
      hostSection.addEventListener("pointermove", onPointerMove, { passive: true });
      hostSection.addEventListener("pointerleave", onPointerLeave, { passive: true });
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
  }
  window.addEventListener("resize", onResize, { passive: true });

  return () => {
    stopLoop();
    window.clearTimeout(resizeTimer);
    themeObserver.disconnect();
    io?.disconnect();
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (hostSection) {
      hostSection.removeEventListener("pointermove", onPointerMove);
      hostSection.removeEventListener("pointerleave", onPointerLeave);
    }
  };
}
