import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhenLetters } from "../data/birthdayData";
import SectionHeading from "../components/SectionHeading";
import Sticker from "../components/Sticker";
import SectionDoodles from "../components/SectionDoodles";

const doodleSpots = [
  { type: "swirl", top: "8%", left: "90%", size: 20, rotate: -6 },
  { type: "star", top: "88%", left: "8%", size: 14, rotate: 12 },
];

export default function OpenWhen() {
  const [active, setActive] = useState(null);

  return (
    <section id="openwhen" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-blush/25 overflow-hidden">
      <SectionDoodles spots={doodleSpots} />
      <SectionHeading eyebrow="chapter six" title="open when..." subtitle="little letters for whenever you need one." />

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {openWhenLetters.map((letter, i) => (
          <motion.button
            key={letter.label}
            onClick={() => setActive(letter)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -3 }}
            className="relative bg-paper rounded-sm px-5 py-6 paper-shadow text-left border-b-4 border-rose/40 flex items-center gap-3"
          >
            <Sticker type="heart" size={18} color="#c98a99" />
            <span className="font-script text-xl sm:text-2xl text-ink">{letter.label}</span>
          </motion.button>
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
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="relative bg-paper max-w-sm w-full rounded-sm p-8 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-md"
              >
                ✕
              </button>
              <p className="font-script text-2xl text-rose mb-3 text-center">{active.label}</p>
              <p className="font-sans text-ink-soft text-center leading-relaxed">{active.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
