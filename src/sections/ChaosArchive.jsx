import { motion } from "framer-motion";
import { achievements, friendshipLevel } from "../data/birthdayData";
import SectionHeading from "../components/SectionHeading";
import SectionDoodles from "../components/SectionDoodles";

const doodleSpots = [
  { type: "star", top: "8%", left: "8%", size: 16, rotate: -10 },
  { type: "swirl", top: "14%", left: "88%", size: 22, rotate: 8 },
  { type: "sparkle", top: "80%", left: "12%", size: 14, rotate: 0 },
  { type: "arrow", top: "70%", left: "85%", size: 20, rotate: 25 },
];

export default function ChaosArchive() {
  return (
    <section id="chaos" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-cream overflow-hidden">
      <SectionDoodles spots={doodleSpots} />
      <SectionHeading
        eyebrow="chapter five"
        title="things we somehow survived"
        subtitle="an incomplete, deeply unofficial record."
      />

      <div className="max-w-xl mx-auto grid gap-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-3 bg-paper rounded-lg px-4 py-3 paper-shadow border border-blush/60"
          >
            <span className="text-burgundy text-lg leading-none">✓</span>
            <span className="font-sans text-sm sm:text-base text-ink-soft">{a}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto mt-12 text-center"
      >
        <p className="font-display italic text-xl text-ink mb-3">{friendshipLevel.label}</p>
        <div className="h-4 rounded-full bg-blush/40 overflow-hidden border border-rose/30">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-rose to-burgundy"
            initial={{ width: 0 }}
            whileInView={{ width: `${friendshipLevel.percent}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          />
        </div>
        <p className="font-sans text-sm text-ink-soft mt-2">{friendshipLevel.percent}%</p>
        <p className="font-script text-xl text-rose mt-4">{friendshipLevel.footnote}</p>
      </motion.div>
    </section>
  );
}
