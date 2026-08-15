import { motion } from "framer-motion";
import Sticker from "./Sticker";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col ${alignment} mb-10 sm:mb-14 px-4`}
    >
      {eyebrow && (
        <span className="font-script text-xl sm:text-2xl text-rose mb-1">{eyebrow}</span>
      )}
      <h2 className="font-display italic text-3xl sm:text-5xl text-ink leading-tight text-shadow-soft relative inline-block">
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="absolute left-0 right-0 -bottom-2 origin-left"
        >
          <Sticker type="underline" size={22} color="#e6a8b8" className="w-full h-3" />
        </motion.span>
      </h2>
      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-ink-soft mt-4 max-w-md">{subtitle}</p>
      )}
    </motion.div>
  );
}
