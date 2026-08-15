import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { soundtrack } from "../data/birthdayData";
import SectionHeading from "../components/SectionHeading";
import SectionDoodles from "../components/SectionDoodles";

const doodleSpots = [
  { type: "sparkle", top: "10%", left: "88%", size: 18, rotate: 0 },
  { type: "star", top: "85%", left: "6%", size: 14, rotate: -15 },
];

export default function MusicPlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const active = soundtrack[activeIndex];

  const togglePlay = () => {
    if (!active.audioSrc) {
      // visual-only placeholder mode: no audio file yet
      setPlaying((p) => !p);
      return;
    }
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      audioRef.current?.play();
      setPlaying(true);
    }
  };

  const selectTrack = (i) => {
    setActiveIndex(i);
    setPlaying(false);
  };

  return (
    <section id="soundtrack" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-lavender/25 overflow-hidden">
      <SectionDoodles spots={doodleSpots} color="#7c2a3a" />
      <SectionHeading eyebrow="chapter four" title="our soundtrack ♫" subtitle="the songs that sound like us." />

      <div className="max-w-3xl mx-auto grid sm:grid-cols-[220px_1fr] gap-8 items-start">
        {/* cassette visual */}
        <div className="mx-auto sm:mx-0 w-52">
          <div className="relative rounded-2xl bg-ink text-cream p-4 shadow-xl">
            <div className="rounded-lg bg-paper/10 p-3 mb-3">
              <div className="flex justify-between items-center">
                <Reel spinning={playing} />
                <Reel spinning={playing} />
              </div>
              <div className="h-1.5 bg-cream/20 rounded-full mt-3" />
            </div>
            <p className="font-script text-lg text-blush truncate">{active.title}</p>
            <p className="font-sans text-[11px] text-cream/60 truncate">{active.artist}</p>

            <button
              onClick={togglePlay}
              className="mt-3 w-full py-2 rounded-full bg-burgundy text-cream text-sm font-sans flex items-center justify-center gap-2"
            >
              {playing ? "❚❚ pause" : "▶ play"}
            </button>

            {active.audioSrc && (
              <audio
                ref={audioRef}
                src={active.audioSrc}
                onEnded={() => setPlaying(false)}
              />
            )}
          </div>
          {!active.audioSrc && (
            <p className="font-sans text-[11px] text-ink-soft/70 text-center mt-2">
              add an audio file in birthdayData.js to enable playback
            </p>
          )}
        </div>

        {/* track list */}
        <ul className="flex flex-col gap-2">
          {soundtrack.map((t, i) => (
            <motion.li
              key={t.track}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => selectTrack(i)}
                className={`w-full text-left flex items-baseline gap-3 px-4 py-3 rounded-lg transition-colors ${
                  i === activeIndex ? "bg-burgundy text-cream" : "bg-paper hover:bg-blush/50"
                }`}
              >
                <span className="font-display italic text-sm opacity-70">{t.track}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-sans text-sm sm:text-base truncate">{t.title}</span>
                  <span
                    className={`block font-script text-base truncate ${
                      i === activeIndex ? "text-blush" : "text-rose"
                    }`}
                  >
                    {t.note}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reel({ spinning }) {
  return (
    <motion.div
      className="w-9 h-9 rounded-full border-4 border-cream/30 flex items-center justify-center"
      animate={spinning ? { rotate: 360 } : { rotate: 0 }}
      transition={spinning ? { repeat: Infinity, duration: 1.6, ease: "linear" } : { duration: 0.3 }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-cream/50" />
    </motion.div>
  );
}
