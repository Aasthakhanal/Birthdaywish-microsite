import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { secretPage } from "../data/birthdayData";
import Sticker from "./Sticker";
import FloatingHearts from "./FloatingHearts";

/**
 * A tiny star tucked in a corner of the page. Click it `unlockClicks` times
 * to reveal the hidden secret-page modal.
 */
export default function SecretEasterEgg() {
  const [clicks, setClicks] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= secretPage.unlockClicks) {
      setUnlocked(true);
      setShowModal(true);
    }
  };

  const remaining = Math.max(0, secretPage.unlockClicks - clicks);

  return (
    <>
      <motion.button
        onClick={handleClick}
        aria-label="???"
        className="fixed bottom-5 left-5 z-[70] w-9 h-9 flex items-center justify-center text-gold/70 hover:text-gold"
        animate={unlocked ? {} : { rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        whileTap={{ scale: 0.8 }}
      >
        <Sticker type="star" size={unlocked ? 14 : 18} color="currentColor" />
      </motion.button>

      {!unlocked && clicks > 0 && (
        <span className="fixed bottom-6 left-16 z-[70] font-script text-sm text-ink-soft/60">
          {remaining} more...
        </span>
      )}

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/70 backdrop-blur-sm px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <FloatingHearts count={16} />
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="relative bg-paper max-w-sm w-full rounded-sm p-8 shadow-2xl text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-md"
              >
                ✕
              </button>
              <Sticker type="sparkle" size={24} color="#b98b3e" className="mx-auto mb-3" />
              <p className="font-script text-2xl text-rose">{secretPage.intro}</p>
              <p className="font-display italic text-xl text-ink mt-2">{secretPage.reveal}</p>
              <p className="font-sans text-ink-soft text-sm mt-4 leading-relaxed">{secretPage.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
