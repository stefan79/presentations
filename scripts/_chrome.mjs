// Resolve a Chrome/Chromium executable for headless rendering.
// Prefers the newest Chrome-for-Testing from the puppeteer cache, then falls
// back to a system Chrome/Chromium. Throws with an actionable message if none.
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

export function chromePath() {
  const base = join(homedir(), '.cache/puppeteer/chrome');
  try {
    const dirs = readdirSync(base)
      .filter((d) => /^(mac|linux|win)/.test(d))
      .sort(); // version strings sort ascending; take newest last
    for (const d of dirs.reverse()) {
      const candidates = [
        join(base, d, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
        join(base, d, 'chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
        join(base, d, 'chrome-linux64/chrome'),
        join(base, d, 'chrome-win64/chrome.exe'),
      ];
      for (const c of candidates) if (existsSync(c)) return c;
    }
  } catch { /* cache dir absent — fall through */ }

  for (const f of [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ]) if (existsSync(f)) return f;

  throw new Error(
    'No Chrome found. Install one with:  npx puppeteer browsers install chrome'
  );
}
