import { motion } from "framer-motion";
import Sticker from "./Sticker";

/**
 * Scatters a handful of low-opacity decorative stickers across a section
 * for scrapbook texture. Pass a `spots` array of
 * { type, top, left, size, rotate, delay }. Parent must be `relative`
 * (and ideally `overflow-hidden`).
 */
export default function SectionDoodles({ spots, color = "#c98a99" }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {spots.map((s, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{ top: s.top, left: s.left }}
          animate={{ y: [0, -8, 0], rotate: [s.rotate ?? 0, (s.rotate ?? 0) + 6, s.rotate ?? 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + (i % 3),
            delay: s.delay ?? i * 0.3,
            ease: "easeInOut",
          }}
        >
          <Sticker type={s.type} size={s.size ?? 16} color={s.color ?? color} rotate={s.rotate ?? 0} />
        </motion.div>
      ))}
    </div>
  );
}
