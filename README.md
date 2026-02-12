# Our Year Wrapped

Multi-slide React app (Spotify Wrapped-style) built with Vite + React + Tailwind + Framer Motion.

## Develop

```bash
npm install
npm run dev
```

## Photos

Placeholder images live in `public/images/photo1.jpg` ... `public/images/photo25.jpg`.

Replace them with real photos using the same filenames.

## Controls

- Swipe (touch / trackpad drag) to navigate
- Keyboard: `→` next, `←` previous, `Esc` restart
- `Space` tap = next
- `Space` hold = auto-advance (stops on release)
- `D` toggles debug (shows slide index + jump)

## Deploy (GitHub Pages)

1. Ensure your repo name matches the default base path: `our-year-wrapped`
2. Run:

```bash
npm run deploy
```

If your repo name is different, set `VITE_BASE` for production builds (example):

```bash
VITE_BASE=/my-repo-name/ npm run deploy
```

