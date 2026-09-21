# Presentations repo — working notes

reveal.js decks. Each talk is `talks/<name>/index.html` (self-contained HTML +
inline `<style>`), using the shared EPAM theme `templates/themes/epam.css`.
Canvas is **16:9, 1280×720**, `Reveal.initialize({ center:false })`. Section
markers (`0X / N`) and the three-part footer are injected by the deck's own
`<script>` from each `<section data-marker="…">` — sections without
`data-marker` (cover, breakers, recaps) get neither.

## Preview
- `make serve-nc` — **no-cache** static server on `127.0.0.1:8000`. Use this.
  Plain `make serve` opens a browser and its cache serves **stale slides** after
  edits (this has caused real confusion). `make kill-serve` frees the port.
- Open `http://127.0.0.1:8000/talks/<name>/`.

## QA screenshots
- `make shot NAME=<deck> SLIDES="0 2:1 5"` → PNGs in `tmp/shots/`.
  A slide spec is an index (`5`) or `index:fragmentSteps` (`2:1` = slide 2 after
  one advance — needed for fragment/animation slides like a chaos→order morph).
- Self-serves: if no server is up it starts a temporary no-cache one.
- `SCALE=2 make shot …` for hi-dpi.

## PDF
- `make pdf-chrome NAME=<deck>` → `build/<deck>.pdf` (prints page count).
- **Do NOT use `make pdf`** (decktape): it hangs on `waitUntil networkidle`
  because the theme `@import`s Google Fonts over the network. `pdf-chrome` uses
  Reveal's `?print-pdf` mode via headless Chrome and works offline-ish.
- Fragment slides export as one page per step (e.g. a morph = 2 pages).

## Tooling
- `scripts/*.mjs` are the reusable renderers (`shot.mjs`, `pdf.mjs`,
  `serve.mjs`); `_chrome.mjs` auto-discovers the newest Chrome-for-Testing from
  `~/.cache/puppeteer` (falls back to system Chrome). No hardcoded paths.
- `build/` and `tmp/` are gitignored.

## Conventions
- German slide text is verbatim per the deck spec; English only in code comments
  / placeholder tags (`[CONFIRM: …]` red, `[Stefan: …]` owed artifact, etc.).
- Commit deck changes with a focused message; only stage the deck being edited.
