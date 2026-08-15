/**
 * A hand-torn paper edge that sits between two sections, like a page torn
 * out of a scrapbook. `flip` mirrors it vertically so consecutive dividers
 * don't look identical. `color` should match the section ABOVE it, since
 * this shape "covers" the seam with the color of the section below.
 */
export default function SectionDivider({ color = "#f8efe0", flip = false }) {
  return (
    <div
      className={`relative w-full h-10 sm:h-14 -mt-1 pointer-events-none select-none ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          d="M0,20 C40,45 90,2 140,25 C190,48 230,5 280,22 C330,40 370,8 420,28 C470,48 520,10 570,24 C620,38 660,6 710,26 C760,46 800,12 850,24 C900,36 940,4 990,22 C1040,40 1080,10 1130,26 C1160,35 1180,15 1200,22 L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
