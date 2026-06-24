// Couche motion générique (cible des data-name stables -> survit au re-sync Figma).
// emil : transform+opacity, ease-out, reduced-motion safe. Marketing = on peut charger.

const EASE = "cubic-bezier(0.23,1,0.32,1)";

// éléments révélés en cascade au scroll
const REVEAL_SEL = [
  '[data-name="Heading and supporting text"]',
  '[data-name="Heading and subheading"]',
  '[data-name="Supporting text"]',
  '[data-name="Check item text"]',
  '[data-name="Featured icon"]',
  '[data-name="Actions"]',
  '[data-name="_Pricing tier card"]',
  '[data-name="_Metric item"]',
  '[data-name="Logos"]',
].join(",");

function setupReveal() {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SEL)
  ).filter((el) => !el.closest("[data-reveal]")); // pas de cibles imbriquées

  // index de stagger par groupe (même parent)
  const groupCount = new Map<Element, number>();
  targets.forEach((el) => {
    el.setAttribute("data-reveal", "");
    const p = el.parentElement || document.body;
    const i = groupCount.get(p) || 0;
    groupCount.set(p, i + 1);
    el.style.transitionDelay = `${Math.min(i, 8) * 75}ms`;
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("m-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

// (marquee logos = CSS pur dans le markup, plus de JS)

function countUp(el: HTMLElement) {
  const raw = (el.textContent || "").trim();
  const m = raw.match(/-?\d+(?:[.,]\d+)?/);
  if (!m) return;
  const numStr = m[0];
  const target = parseFloat(numStr.replace(",", "."));
  const decimals = numStr.includes(",") || numStr.includes(".") ? 1 : 0;
  const prefix = raw.slice(0, m.index);
  const suffix = raw.slice((m.index || 0) + numStr.length);
  const dur = 1200;
  let start = 0;
  const step = (t: number) => {
    if (!start) start = t;
    const p = Math.min((t - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = (target * eased).toFixed(decimals).replace(".", ",");
    el.textContent = `${prefix}${val}${suffix}`;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  };
  requestAnimationFrame(step);
}

function setupCounters() {
  const items = document.querySelectorAll<HTMLElement>('[data-name="_Metric item"]');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        // plus grand texte = le chiffre
        const ps = Array.from(
          (e.target as HTMLElement).querySelectorAll<HTMLElement>("p,span,div")
        ).filter((n) => n.children.length === 0 && /\d/.test(n.textContent || ""));
        ps.sort(
          (a, b) =>
            parseFloat(getComputedStyle(b).fontSize) -
            parseFloat(getComputedStyle(a).fontSize)
        );
        if (ps[0]) countUp(ps[0]);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.5 }
  );
  items.forEach((el) => io.observe(el));
}

function setupParallax() {
  // cibles : grands visuels SANS transform Figma existante (sinon on casse la rotation des mockups)
  const sel = '[data-name="Image"],[data-name*="Bezel"],[data-name*="Background image"]';
  const targets = Array.from(document.querySelectorAll<HTMLElement>(sel)).filter(
    (el) => getComputedStyle(el).transform === "none"
  );
  if (!targets.length) return;
  const vh = () => window.innerHeight;
  let ticking = false;
  const update = () => {
    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const prog = (center - vh() / 2) / vh(); // -1 (haut) .. +1 (bas)
      const ty = Math.max(-50, Math.min(50, -prog * 36));
      el.style.transform = `translate3d(0, ${ty}px, 0)`;
      el.style.willChange = "transform";
    });
    ticking = false;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

export function initMotion() {
  if (typeof window === "undefined") return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add(reduce ? "m-off" : "m-on");
  if (reduce) return;
  setupReveal();
  setupCounters();
  setupParallax();
}
