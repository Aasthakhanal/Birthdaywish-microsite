import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { finalSurprise } from "../data/birthdayData";
import { fireConfetti } from "../components/Confetti";
import FloatingHearts from "../components/FloatingHearts";
import Sticker from "../components/Sticker";

export default function FinalReveal() {
  const [unwrapped, setUnwrapped] = useState(false);

  const handleUnwrap = () => {
    setUnwrapped(true);
    fireConfetti(0.5);
  };

  return (
    <section
      id="finale"
      className="relative min-h-svh flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-blush/30 via-cream to-lavender/20 overflow-hidden"
    >
      {unwrapped && <FloatingHearts count={26} />}

      <AnimatePresence mode="wait">
        {!unwrapped ? (
          <motion.div
            key="pre"
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center text-center"
          >
            {finalSurprise.preText.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.5, duration: 0.6 }}
                className="font-display italic text-2xl sm:text-3xl text-ink-soft"
              >
                {line}
              </motion.p>
            ))}

            <motion.button
              onClick={handleUnwrap}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 220, damping: 16 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.94 }}
              className="mt-10 relative"
            >
              <div className="w-40 h-32 sm:w-48 sm:h-36 bg-burgundy rounded-lg shadow-xl relative flex items-center justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-blush" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-full bg-blush" />
                <Sticker
                  type="heart"
                  size={26}
                  color="#f8efe0"
                  className="relative z-10"
                />
              </div>
              <span className="block mt-4 font-sans tracking-widest text-xs sm:text-sm text-burgundy">
                {finalSurprise.buttonLabel}
              </span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="post"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-md"
          >
            <h2 className="font-display italic text-3xl sm:text-5xl text-burgundy leading-tight mb-6">
              {finalSurprise.headline}
            </h2>

            <div className="w-56 sm:w-64 bg-paper p-3 pb-6 shadow-xl relative rotate-[-2deg]">
              <span className="tape w-14 h-5 -top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" aria-hidden="true" />
              <div className="w-full aspect-[4/5] overflow-hidden bg-ink/5">
                <img
                  src={finalSurprise.photo}
                  alt="favorite memory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="font-sans text-ink-soft text-sm sm:text-base leading-relaxed mt-8 whitespace-pre-line">
              {finalSurprise.letter}
            </p>
            <p className="font-script text-xl text-rose mt-6">{finalSurprise.signOff}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
