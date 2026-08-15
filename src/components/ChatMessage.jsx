import { motion } from "framer-motion";

export default function ChatMessage({ from, time, text }) {
  const isYou = from === "you";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.35 }}
      className={`flex flex-col ${isYou ? "items-end" : "items-start"} mb-3`}
    >
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm sm:text-base font-sans leading-snug ${
          isYou
            ? "bg-burgundy text-cream rounded-br-sm"
            : "bg-blush/70 text-ink rounded-bl-sm"
        }`}
      >
        {text}
      </div>
      <span className="text-[10px] text-ink-soft/60 mt-1 px-1">{time}</span>
    </motion.div>
  );
}
