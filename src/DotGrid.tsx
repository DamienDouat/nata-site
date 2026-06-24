import { useEffect, useRef } from "react";

// Grille de points interactive : les points s'écartent du curseur puis reviennent (ressort).
// Canvas léger, pas de dépendance. pointer-events none -> écoute la souris au niveau window.
export default function DotGrid({
  gap = 30,
  radius = 1.6,
  influence = 130,
  push = 22,
  color = "16,40,30",
}: {
  gap?: number;
  radius?: number;
  influence?: number;
  push?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: { ox: number; oy: number; x: number; y: number }[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      dots = [];
      for (let y = gap / 2; y < h; y += gap)
        for (let x = gap / 2; x < w; x += gap)
          dots.push({ ox: x, oy: y, x, y });
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.ox - mouse.x;
        const dy = d.oy - mouse.y;
        const dist = Math.hypot(dx, dy);
        let tx = d.ox,
          ty = d.oy,
          r = radius,
          a = 0.22;
        if (dist < influence) {
          const f = (1 - dist / influence) ** 2;
          const ang = Math.atan2(dy, dx);
          tx = d.ox + Math.cos(ang) * push * f;
          ty = d.oy + Math.sin(ang) * push * f;
          r = radius + f * 1.8;
          a = 0.18 + f * 0.5;
        }
        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    if (reduce) {
      // statique : un seul rendu
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},0.16)`;
        ctx.fill();
      }
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave);
      raf = requestAnimationFrame(draw);
    }
    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [gap, radius, influence, push, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "58%",
        height: "66%",
        pointerEvents: "none",
        // fondu vers le coin intérieur (bas-gauche) pour que la grille reste discrète, en haut à droite
        WebkitMaskImage:
          "radial-gradient(120% 120% at 100% 0%, #000 35%, transparent 72%)",
        maskImage:
          "radial-gradient(120% 120% at 100% 0%, #000 35%, transparent 72%)",
      }}
      aria-hidden
    />
  );
}
