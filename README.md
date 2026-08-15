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

The output goes to `dist/` — you can upload that folder to any static host
(Netlify, Vercel, GitHub Pages, etc.) or open `dist/index.html` directly.

## Where to edit everything

Almost all the content lives in **`src/data/birthdayData.js`** — one file with
plain objects/arrays for every section: the landing screen, the timeline years,
memory-wall photos + captions, the "things I love about you" notes, the
soundtrack list, the chaos-archive checklist, the "open when..." letters,
the fake chat thread, and the final letter. Swap the text and photo URLs there;
you shouldn't need to touch component code for normal edits.

- **Photos**: each entry has a `photo:` field with an Unsplash placeholder URL.
  Replace with your own URL, or drop a file into `src/assets/photos/` and
  `import` it at the top of `birthdayData.js`, then reference the imported
  variable instead of a string.
- **Songs**: `soundtrack` entries have an `audioSrc` field (currently `null`,
  so the player is visual-only). Add real mp3 files under `public/audio/` and
  set `audioSrc: "/audio/your-file.mp3"` to enable playback. Don't use
  copyrighted audio you don't have rights to distribute.
- **Friend's name**: set in `site.friendName` at the top of the data file —
  it's used automatically in the final reveal headline.
- **Secret page**: `secretPage.unlockClicks` controls how many taps on the
  small star (bottom-left corner) reveal the hidden page.
- **Section order / nav labels**: edit the `sections` array at the bottom of
  the data file — this also drives the floating tape navigation.

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

## Notes

- Placeholder photos are from Unsplash (royalty-free) — swap them for real
  photos of the two of you before sending.
- No celebrity or copyrighted images are used anywhere.
- Autoplay audio is intentionally avoided (mobile browsers block it) —
  the music player requires a tap, per the brief.
- Respects `prefers-reduced-motion` for anyone with that OS setting on.
# Birthdaywish-microsite
