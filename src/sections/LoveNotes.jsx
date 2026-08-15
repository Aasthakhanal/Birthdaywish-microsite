import { useState } from "react";
import { motion } from "framer-motion";
import { loveNotes } from "../data/birthdayData";
import SectionHeading from "../components/SectionHeading";
import Sticker from "../components/Sticker";

function LoveCard({ note, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      onClick={() => setOpen((v) => !v)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      className="relative text-left h-44 sm:h-48 [perspective:1000px]"
      aria-label={open ? note.message : note.label}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        {/* front: envelope */}
        <div
          className="absolute inset-0 rounded-md bg-paper border border-blush paper-shadow flex flex-col items-center justify-center gap-2 px-3 [backface-visibility:hidden]"
        >
          <Sticker type="heart" size={22} color="#7c2a3a" />
          <span className="font-sans text-xs sm:text-sm tracking-widest text-ink-soft text-center">
            {note.label}
          </span>
          <span className="absolute top-2 right-2 text-rose/50 text-[10px] font-script">tap</span>
        </div>

        {/* back: message */}
        <div
          className="absolute inset-0 rounded-md bg-gradient-to-br from-burgundy to-burgundy-deep text-cream paper-shadow flex items-center justify-center px-4 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="font-script text-lg sm:text-xl text-center leading-snug">{note.message}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}

export default function LoveNotes() {
  return (
    <section id="love" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-cream">
      <SectionHeading eyebrow="chapter three" title="things I love about you" subtitle="tap a card to open it." />
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {loveNotes.map((note, i) => (
          <LoveCard key={note.label} note={note} index={i} />
        ))}
      </div>
    </section>
  );
}
