import confetti from "canvas-confetti";

const palette = ["#c98a99", "#7c2a3a", "#f2c9d3", "#d9cfea", "#b98b3e"];

/** Fires a soft, paper-confetti-like burst. Call fireConfetti() from any handler. */
export function fireConfetti(originY = 0.6) {
  confetti({
    particleCount: 70,
    spread: 80,
    startVelocity: 35,
    gravity: 0.9,
    scalar: 0.8,
    ticks: 200,
    origin: { y: originY },
    colors: palette,
    shapes: ["circle", "square"],
  });
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 100,
      startVelocity: 25,
      gravity: 0.8,
      scalar: 0.7,
      origin: { y: originY, x: 0.2 },
      colors: palette,
    });
    confetti({
      particleCount: 40,
      spread: 100,
      startVelocity: 25,
      gravity: 0.8,
      scalar: 0.7,
      origin: { y: originY, x: 0.8 },
      colors: palette,
    });
  }, 180);
}
