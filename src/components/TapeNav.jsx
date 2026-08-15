import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { sections } from "../data/birthdayData";
import useActiveSection from "../hooks/useActiveSection";
import Sticker from "./Sticker";

const ids = sections.map((s) => s.id);

export default function TapeNav() {
  const { scrollYProgress } = useScroll();
  const activeId = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* thin scroll-progress ribbon along the very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-burgundy/70"
        style={{ scaleX: scrollYProgress }}
      />

      {/* desktop: vertical tape tabs pinned to the right edge */}
      <nav
        className="hidden md:flex flex-col gap-2 fixed right-0 top-1/2 -translate-y-1/2 z-[70]"
        aria-label="Section navigation"
      >
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <motion.button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group relative text-right pr-4 pl-3 py-1.5 font-script text-base rounded-l-md paper-shadow transition-colors
                ${isActive ? "bg-burgundy text-cream" : "bg-paper/90 text-ink-soft hover:bg-blush/70"}`}
              style={{ marginRight: isActive ? 0 : -18 }}
              whileHover={{ marginRight: 0, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {isActive && (
                <motion.span
                  layoutId="tape-active-dot"
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cream"
                />
              )}
              {s.label}
            </motion.button>
          );
        })}
      </nav>

      {/* mobile: floating heart toggle -> tape tab sheet */}
      <div className="md:hidden fixed bottom-5 right-5 z-[70]">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="mb-3 bg-paper/95 backdrop-blur rounded-2xl shadow-xl p-3 flex flex-col gap-1 max-h-[60vh] overflow-y-auto no-scrollbar border border-blush"
          >
            {sections.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left font-script text-lg px-3 py-1.5 rounded-lg ${
                    isActive ? "bg-burgundy text-cream" : "text-ink-soft"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </motion.div>
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          aria-label="Open navigation"
          className="w-12 h-12 rounded-full bg-burgundy text-cream shadow-lg flex items-center justify-center"
        >
          <Sticker type="heart" size={22} color="#f8efe0" />
        </motion.button>
      </div>
    </>
  );
}
