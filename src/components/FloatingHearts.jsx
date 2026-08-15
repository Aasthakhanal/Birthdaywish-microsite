import { motion } from "framer-motion";
import Sticker from "./Sticker";

/**
 * Renders `count` hearts that float upward and fade out.
 * Mount this component conditionally (e.g. on a click) and it plays once.
 */
export default function FloatingHearts({ count = 14, colors = ["#c98a99", "#7c2a3a", "#d9cfea"] }) {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 2.2 + Math.random() * 1.4,
    size: 12 + Math.random() * 18,
    color: colors[i % colors.length],
    drift: (Math.random() - 0.5) * 80,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute bottom-0"
          style={{ left: `${h.left}%` }}
          initial={{ y: 0, opacity: 0, x: 0 }}
          animate={{ y: "-100vh", opacity: [0, 1, 1, 0], x: h.drift }}
          transition={{ duration: h.duration, delay: h.delay, ease: "easeOut" }}
        >
          <Sticker type="heart" size={h.size} color={h.color} />
        </motion.div>
      ))}
    </div>
  );
}
