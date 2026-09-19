// One-off: externalize a deck's per-section text for i18n.
//   node scripts/i18n-extract.mjs <deck>
// - Reads talks/<deck>/index.html
// - For each top-level <section>: captures innerHTML (DOM order), and if the
//   section carried data-takeaway, appends a .takeaway element to that HTML so
//   the takeaway travels with (and gets translated alongside) the content.
// - Writes talks/<deck>/i18n/de.js (lead) and en.js (copy, to be translated).
// - Rewrites index.html so each <section> keeps its attributes but has EMPTY
//   content; data-takeaway="…" becomes a bare data-tk flag (drives CSS reserve).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const [, , deck] = process.argv;
if (!deck) { console.error('Usage: node scripts/i18n-extract.mjs <deck>'); process.exit(1); }
const path = `talks/${deck}/index.html`;
let html = readFileSync(path, 'utf8');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const de = [];
let i = 0;
const re = /(<section\b[^>]*>)([\s\S]*?)(<\/section>)/g;
html = html.replace(re, (m, open, inner, close) => {
  const idx = i++;
  // pull data-takeaway text, then convert attr -> bare data-tk flag
  let takeaway = null;
  const tkMatch = open.match(/\s+data-takeaway="([^"]*)"/);
  if (tkMatch) { takeaway = tkMatch[1]; open = open.replace(/\s+data-takeaway="[^"]*"/, ' data-tk'); }
  let content = inner.trim();
  if (takeaway) content += `\n          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">${takeaway}</span></div>`;
  de.push(content);
  return `${open}<!--i18n:${idx}--></section>`;
});

mkdirSync(`talks/${deck}/i18n`, { recursive: true });
const emit = (lang, arr) =>
  `// ${lang === 'de' ? 'German (lead language)' : 'English'} — one entry per <section>, DOM order.\n` +
  `// Auto-extracted; edit text only, keep the HTML structure aligned with index.html.\n` +
  `window.I18N = window.I18N || {};\nwindow.I18N.${lang} = [\n` +
  arr.map((s, n) => `/* ${n} */ \`${esc(s)}\``).join(',\n\n') +
  `\n];\n`;

writeFileSync(`talks/${deck}/i18n/de.js`, emit('de', de));
writeFileSync(`talks/${deck}/i18n/en.js`, emit('en', de)); // en starts as a DE copy
writeFileSync(path, html);
console.log(`Extracted ${de.length} sections -> talks/${deck}/i18n/{de,en}.js and blanked index.html`);
