import { useMemo } from "react";
import { motion } from "framer-motion";
import Sticker from "./Sticker";

const TYPES = ["heart", "star", "sparkle"];
const COLORS = ["#c98a99", "#d9cfea", "#b98b3e", "#e6a8b8"];

/**
 * Fixed, full-page, very low-opacity drifting particles for ambience.
 * Purely decorative — pointer-events disabled, respects reduced motion via CSS.
 */
export default function FloatingParticles({ count = 10 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 4 + Math.random() * 92,
        size: 10 + Math.random() * 12,
        type: TYPES[i % TYPES.length],
        color: COLORS[i % COLORS.length],
        duration: 18 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: 20 + Math.random() * 40,
        rotate: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute opacity-[0.16]"
          style={{ left: `${p.left}%`, top: "110%" }}
          animate={{
            top: ["110%", "-10%"],
            x: [0, p.drift, -p.drift, 0],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sticker type={p.type} size={p.size} color={p.color} />
        </motion.div>
      ))}
    </div>
  );
}
