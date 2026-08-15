import { chatThread } from "../data/birthdayData";
import ChatMessage from "../components/ChatMessage";
import SectionHeading from "../components/SectionHeading";
import SectionDoodles from "../components/SectionDoodles";

const doodleSpots = [
  { type: "heart", top: "10%", left: "10%", size: 16, rotate: -8 },
  { type: "sparkle", top: "85%", left: "88%", size: 16, rotate: 0 },
];

export default function OurChat() {
  return (
    <section id="chat" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-cream overflow-hidden">
      <SectionDoodles spots={doodleSpots} />
      <SectionHeading eyebrow="chapter seven" title="our chat" subtitle="a very accurate reenactment." />

      <div className="max-w-md mx-auto bg-paper rounded-2xl shadow-lg border border-blush/60 p-4 sm:p-6">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-blush/50">
          <div className="w-8 h-8 rounded-full bg-rose/40 flex items-center justify-center font-script text-lg text-burgundy">
            ♡
          </div>
          <span className="font-sans text-sm text-ink-soft">us, 12:31 AM</span>
        </div>
        {chatThread.map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
