import { useState } from "react";
import WelcomeScreen from "./sections/WelcomeScreen";
import Timeline from "./sections/Timeline";
import MemoryWall from "./sections/MemoryWall";
import LoveNotes from "./sections/LoveNotes";
import MusicPlayer from "./sections/MusicPlayer";
import ChaosArchive from "./sections/ChaosArchive";
import OpenWhen from "./sections/OpenWhen";
import OurChat from "./sections/OurChat";
import FinalReveal from "./sections/FinalReveal";
import TapeNav from "./components/TapeNav";
import SecretEasterEgg from "./components/SecretEasterEgg";
import FloatingParticles from "./components/FloatingParticles";
import CursorTrail from "./components/CursorTrail";
import SectionDivider from "./components/SectionDivider";

// solid stand-ins for each section's background, used to color the torn-paper
// dividers between sections (tints are translucent, so dividers use the
// approximate solid blend rather than the raw tint).
const BG = {
  cream: "#f8efe0",
  blush: "#f7e6dd",
  lavender: "#efe7e3",
};

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative">
      <FloatingParticles />
      <CursorTrail />

      <div className="relative z-10">
        <WelcomeScreen onEnter={() => setEntered(true)} />

        <Timeline />
        <SectionDivider color={BG.blush} />
        <MemoryWall />
        <SectionDivider color={BG.cream} flip />
        <LoveNotes />
        <SectionDivider color={BG.lavender} />
        <MusicPlayer />
        <SectionDivider color={BG.cream} flip />
        <ChaosArchive />
        <SectionDivider color={BG.blush} />
        <OpenWhen />
        <SectionDivider color={BG.cream} flip />
        <OurChat />
        <FinalReveal />

        {entered && <TapeNav />}
        <SecretEasterEgg />

        <footer className="relative text-center py-10 font-script text-rose/70 text-lg bg-lavender/20">
          made with ♡ — end of the scroll, not the story
        </footer>
      </div>
    </div>
  );
}
