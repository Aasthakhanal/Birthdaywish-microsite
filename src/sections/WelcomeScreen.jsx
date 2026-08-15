import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { landing } from "../data/birthdayData";
import Sticker from "../components/Sticker";
import FloatingHearts from "../components/FloatingHearts";
import { fireConfetti } from "../components/Confetti";

export default function WelcomeScreen({ onEnter }) {
  const [phase, setPhase] = useState("idle"); // idle -> loading -> revealed

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("loading");
    fireConfetti(0.4);
    setTimeout(() => {
      setPhase("revealed");
      setTimeout(() => onEnter?.(), 900);
    }, 1100);
  };

  return (
    <section
      id="landing"
      className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-cream px-6"
    >
      {/* ambient decorative stickers */}
      <FloatingBits />
      {phase === "revealed" && <FloatingHearts count={22} />}

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: -20 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3"
        >
          <Sticker type="sparkle" size={26} color="#b98b3e" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display italic text-4xl sm:text-6xl text-ink leading-snug text-shadow-soft"
        >
          {landing.greeting}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans text-ink-soft mt-4 text-base sm:text-lg"
        >
          {landing.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            {phase !== "revealed" ? (
              <motion.button
                key="btn"
                onClick={handleClick}
                whileHover={{ scale: 1.04, rotate: -1 }}
                whileTap={{ scale: 0.96 }}
                animate={phase === "loading" ? { scale: [1, 1.08, 0.9], opacity: [1, 1, 0] } : {}}
                transition={{ duration: 0.6 }}
                className="relative px-8 py-3.5 rounded-full bg-gradient-to-b from-burgundy to-burgundy-deep text-cream font-sans tracking-wide text-sm sm:text-base shadow-[0_10px_30px_-10px_rgba(124,42,58,0.7)] ring-1 ring-cream/10"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 30% 0%, rgba(255,255,255,0.35), transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <span className="relative">{landing.buttonLabel}</span>
                <motion.span
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: [0, 12, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                >
                  <Sticker type="heart" size={16} color="#f2c9d3" />
                </motion.span>
                {phase === "idle" && (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-burgundy/60"
                    animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-script text-3xl text-burgundy"
              >
                okay, here we go ♡
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-script text-lg text-rose mt-8"
        >
          {landing.footnote}
        </motion.p>
      </div>

      {/* scroll cue */}
      {phase !== "revealed" && (
        <motion.div
          className="absolute bottom-8 text-ink-soft/60 font-sans text-xs tracking-[0.3em]"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          scroll
        </motion.div>
      )}
    </section>
  );
}

function FloatingBits() {
  const bits = [
    { type: "star", top: "12%", left: "10%", size: 18, rotate: -10, delay: 0 },
    { type: "heart", top: "20%", left: "82%", size: 16, rotate: 15, delay: 0.4 },
    { type: "sparkle", top: "70%", left: "14%", size: 14, rotate: 0, delay: 0.8 },
    { type: "star", top: "78%", left: "80%", size: 20, rotate: 20, delay: 1.2 },
    { type: "heart", top: "45%", left: "6%", size: 12, rotate: -5, delay: 0.6 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {bits.map((b, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/60"
          style={{ top: b.top, left: b.left }}
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 3.5, delay: b.delay, ease: "easeInOut" }}
        >
          <Sticker type={b.type} size={b.size} rotate={b.rotate} color="#c98a99" />
        </motion.div>
      ))}
    </div>
  );
}
