import { motion } from "framer-motion";

/**
 * A polaroid-style photo frame with a handwritten caption.
 * Pass `rotate` in degrees to tilt it; `tape` to show a washi tape strip.
 */
export default function Polaroid({
  photo,
  caption,
  rotate = -4,
  tape = true,
  size = "md",
  className = "",
  onClick,
  as: Component = motion.div,
  whileHoverLift = true,
}) {
  const sizes = {
    sm: "w-36 sm:w-40",
    md: "w-48 sm:w-56",
    lg: "w-64 sm:w-80",
  };

  return (
    <Component
      onClick={onClick}
      className={`relative bg-paper p-3 pb-6 paper-shadow ${sizes[size]} ${className} ${onClick ? "cursor-pointer" : ""}`}
      style={{ rotate: `${rotate}deg` }}
      whileHover={
        whileHoverLift
          ? { rotate: 0, scale: 1.05, zIndex: 20, boxShadow: "0 24px 40px -16px rgba(46,36,32,0.38)" }
          : undefined
      }
      whileTap={onClick ? { scale: 0.97 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {tape && (
        <span
          className="tape w-14 h-5 -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]"
          aria-hidden="true"
        />
      )}
      <div className="w-full aspect-[4/5] overflow-hidden bg-ink/5">
        <img
          src={photo}
          alt={caption || "memory"}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="font-script text-lg sm:text-xl text-ink-soft text-center mt-2 leading-tight px-1">
          {caption}
        </p>
      )}
    </Component>
  );
}

