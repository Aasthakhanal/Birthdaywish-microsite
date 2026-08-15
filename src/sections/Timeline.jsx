import { motion } from "framer-motion";
import { timeline } from "../data/birthdayData";
import Polaroid from "../components/Polaroid";
import SectionHeading from "../components/SectionHeading";

export default function Timeline() {
  return (
    <section id="terminal" className="relative py-20 sm:py-28 px-5 sm:px-10 bg-cream overflow-hidden">
      <SectionHeading eyebrow="chapter one" title="our story" subtitle="every year since the year it started." />

      <div className="relative max-w-3xl mx-auto">
        {/* the "film strip" spine */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-rose/40 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-14 sm:gap-20">
          {timeline.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative flex items-center gap-6 sm:gap-10 pl-16 sm:pl-0 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
              >
                {/* year marker on spine */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                  className="absolute left-6 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-burgundy ring-4 ring-cream z-10"
                />

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="sm:w-1/2 flex justify-center"
                >
                  <Polaroid photo={item.photo} caption={item.title} rotate={isEven ? -5 : 5} size="md" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="sm:w-1/2"
                >
                  <span className="font-display italic text-2xl sm:text-3xl text-burgundy">{item.year}</span>
                  <p className="font-sans text-ink-soft mt-2 text-sm sm:text-base max-w-xs">{item.text}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
