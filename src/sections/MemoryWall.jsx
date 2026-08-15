import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memories } from "../data/birthdayData";
import Polaroid from "../components/Polaroid";
import SectionHeading from "../components/SectionHeading";
import Sticker from "../components/Sticker";
import SectionDoodles from "../components/SectionDoodles";

const doodleSpots = [
  { type: "star", top: "6%", left: "6%", size: 16, rotate: -10 },
  { type: "heart", top: "12%", left: "92%", size: 16, rotate: 10 },
  { type: "sparkle", top: "90%", left: "10%", size: 14, rotate: 0 },
];

export default function MemoryWall() {
  const [active, setActive] = useState(null);

  return (
    <section id="memories" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-blush/25 overflow-hidden">
      <SectionDoodles spots={doodleSpots} />
      <SectionHeading eyebrow="chapter two" title="memory wall" subtitle="tap any photo to open the memory." />

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 place-items-center">
        {memories.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <Polaroid
              photo={m.photo}
              caption={m.title}
              rotate={m.rotation}
              size="sm"
              onClick={() => setActive(m)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative bg-paper max-w-md w-full rounded-sm p-4 pb-7 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-md"
              >
                ✕
              </button>
              <span className="tape w-16 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" aria-hidden="true" />
              <div className="w-full aspect-[4/3] overflow-hidden bg-ink/5">
                <img src={active.photo} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center px-2">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Sticker type="heart" size={14} color="#c98a99" />
                  <h3 className="font-display italic text-xl text-ink">{active.title}</h3>
                </div>
                <p className="font-script text-lg text-rose">{active.caption}</p>
                <p className="font-sans text-sm text-ink-soft mt-3">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
