// Screenshot deck slides for visual QA.
//   node scripts/shot.mjs <deck> <spec...>
//   spec = slide index, or index:fragmentSteps (e.g. "2:1" = slide 2 after 1 advance)
//   env: PORT (default 8000), SCALE (deviceScaleFactor, default 1)
// Writes PNGs to tmp/shots/<deck>_<spec>.png. Self-serves if no server is up.
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { chromePath } from './_chrome.mjs';
import { ensureServer } from './_serve.mjs';

const [, , deck, ...specs] = process.argv;
if (!deck) { console.error('Usage: node scripts/shot.mjs <deck> <slideSpec...>'); process.exit(1); }
const port = Number(process.env.PORT || 8000);
const scale = Number(process.env.SCALE || 1);
const outDir = 'tmp/shots';
mkdirSync(outDir, { recursive: true });

const srv = await ensureServer(port);
const browser = await puppeteer.launch({ executablePath: chromePath(), headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setCacheEnabled(false);
await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: scale });

for (const spec of (specs.length ? specs : ['0'])) {
  const [idx, frags] = spec.split(':');
  const langQ = process.env.DECKLANG ? `&lang=${process.env.DECKLANG}` : '';
  await page.goto(`http://127.0.0.1:${port}/talks/${deck}/?t=${Date.now()}${langQ}#/${idx}`, { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 900));
  for (let i = 0; i < (Number(frags) || 0); i++) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 900));
  }
  await new Promise((r) => setTimeout(r, 400));
  const file = `${outDir}/${deck}_${spec.replace(':', '_')}.png`;
  await page.screenshot({ path: file });
  console.log(file);
}

await browser.close();
srv.close();
