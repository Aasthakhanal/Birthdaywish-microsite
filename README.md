# hey, birthday girl ♡

A one-page, interactive birthday microsite. Scrapbook / Y2K / soft-romantic aesthetic,
built with React + Vite + Tailwind CSS v4 + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build a static production version:

```bash
npm run build
```

## Project structure

```
src/
  components/   shared UI: Polaroid, Sticker, Tape/nav, chat bubble, confetti, etc.
  sections/     one file per chapter of the site (Timeline, MemoryWall, ...)
  data/
    birthdayData.js   <-- edit this for content
  assets/
    photos/      drop local images here if you don't want to use URLs
    stickers/    optional custom decorative SVGs
  App.jsx        composes all sections in order
  index.css      color/type tokens (Tailwind v4 @theme) + global styles
```

fers-reduced-motion` for anyone with that OS setting on.
# Birthdaywish-microsite
