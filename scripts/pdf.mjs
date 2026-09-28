// Export a deck to PDF via Reveal's print-pdf mode in headless Chrome.
// Use this instead of `make pdf` (decktape), which hangs on the theme's
// Google-Fonts @import (waitUntil networkidle never settles).
//   node scripts/pdf.mjs <deck>     ->  build/<deck>.pdf
//   env: PORT (default 8000)
import puppeteer from 'puppeteer-core';
import { mkdirSync, readFileSync } from 'node:fs';
import { chromePath } from './_chrome.mjs';
import { ensureServer } from './_serve.mjs';

const [, , deck] = process.argv;
if (!deck) { console.error('Usage: node scripts/pdf.mjs <deck>'); process.exit(1); }
const port = Number(process.env.PORT || 8000);
const lang = process.env.DECK_LANG;   // optional: e.g. DECK_LANG=en for i18n decks
mkdirSync('build', { recursive: true });

const srv = await ensureServer(port);
const browser = await puppeteer.launch({ executablePath: chromePath(), headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setCacheEnabled(false);
await page.goto(`http://127.0.0.1:${port}/talks/${deck}/?print-pdf${lang ? `&lang=${lang}` : ''}&t=${Date.now()}`, { waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
await new Promise((r) => setTimeout(r, 3500));

const out = `build/${deck}${lang ? `-${lang}` : ''}.pdf`;
await page.pdf({ path: out, width: '13.33in', height: '7.5in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
srv.close();

const pages = (readFileSync(out).toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`${out}  (${pages} pages)`);
