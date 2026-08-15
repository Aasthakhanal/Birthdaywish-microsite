const paths = {
  heart: (
    <path d="M12 21s-7.5-4.7-10-9.3C.4 8.4 2 4.5 5.7 4C8 3.7 10 5 12 7.5C14 5 16 3.7 18.3 4C22 4.5 23.6 8.4 22 11.7C19.5 16.3 12 21 12 21z" />
  ),
  star: (
    <path d="M12 2l2.6 6.9L22 9.6l-5.6 4.8L18.2 22 12 17.9 5.8 22l1.8-7.6L2 9.6l7.4-.7L12 2z" />
  ),
  sparkle: (
    <path d="M12 2c.6 4.2 1.7 5.3 5.9 5.9-4.2.6-5.3 1.7-5.9 5.9-.6-4.2-1.7-5.3-5.9-5.9C10.3 7.3 11.4 6.2 12 2z" />
  ),
};

const strokePaths = {
  swirl: (
    <path
      d="M3 12c0-4 3-7 7-7s6 2.5 6 5.5-2 5-5 5-4-1.5-4-3.5 1.5-3 3-3 2 .8 2 2"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  arrow: (
    <path
      d="M3 12c5-1 9-3 12-7M15 5l3-.3-.3 3"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  underline: (
    <path d="M2 13c4-2.5 16-2.5 20 0" fill="none" strokeWidth="2" strokeLinecap="round" />
  ),
  stampCircle: (
    <circle cx="12" cy="12" r="9" fill="none" strokeWidth="1.4" strokeDasharray="2.2 2.4" />
  ),
  doodleHeart: (
    <path
      d="M12 19.5S4 14.8 4 9.3C4 6.4 6.2 4.5 8.7 4.5c1.6 0 3 .9 3.3 2.4.3-1.5 1.7-2.4 3.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 5.5-8 10.2-8 10.2z"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
};

export default function Sticker({
  type = "heart",
  size = 20,
  color = "currentColor",
  rotate = 0,
  className = "",
}) {
  if (strokePaths[type]) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke={color}
        fill="none"
        className={className}
        style={{ transform: `rotate(${rotate}deg)` }}
        aria-hidden="true"
      >
        {strokePaths[type]}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      {paths[type] || paths.heart}
    </svg>
  );
}
