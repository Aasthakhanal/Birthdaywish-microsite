import { useEffect, useRef } from "react";

/**
 * Desktop-only: spawns a small fading heart every so often as the mouse
 * moves, for a subtle "premium" ambient cursor interaction. No-ops on
 * touch devices and respects prefers-reduced-motion.
 */
export default function CursorTrail() {
  const containerRef = useRef(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) return;

    const colors = ["#c98a99", "#7c2a3a", "#d9cfea"];

    const handleMove = (e) => {
      const now = performance.now();
      if (now - lastSpawn.current < 120) return;
      lastSpawn.current = now;

      const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      el.setAttribute("viewBox", "0 0 24 24");
      el.setAttribute("width", "12");
      el.setAttribute("height", "12");
      el.style.position = "fixed";
      el.style.left = `${e.clientX - 6}px`;
      el.style.top = `${e.clientY - 6}px`;
      el.style.pointerEvents = "none";
      el.style.zIndex = "80";
      el.style.opacity = "0.7";
      el.style.transition = "transform 900ms ease-out, opacity 900ms ease-out";

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        "M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.5 5.7 4C8 3.7 10 5 12 7.5C14 5 16 3.7 18.3 4C22 4.5 23.6 8.4 22 11.7C19.5 16.3 12 21 12 21z"
      );
      path.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);
      el.appendChild(path);

      containerRef.current?.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translateY(-24px) scale(0.4)`;
        el.style.opacity = "0";
      });

      setTimeout(() => el.remove(), 950);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div ref={containerRef} className="hidden md:block" aria-hidden="true" />;
}
