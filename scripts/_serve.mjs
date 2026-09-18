// Minimal no-cache static file server for local deck preview / rendering.
// The no-store headers end the "Chrome shows a stale slide" problem.
import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.json': 'application/json', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.ico': 'image/x-icon', '.map': 'application/json',
};

export function serve(root = process.cwd(), port = 8000, host = '127.0.0.1') {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let fp = normalize(join(root, p));
    if (!fp.startsWith(root)) { res.writeHead(403); return res.end('403'); }
    try { if (existsSync(fp) && statSync(fp).isDirectory()) fp = join(fp, 'index.html'); } catch { /* noop */ }
    if (!existsSync(fp)) { res.writeHead(404); return res.end('404 ' + p); }
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Content-Type', TYPES[extname(fp)] || 'application/octet-stream');
    createReadStream(fp).pipe(res);
  });
  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(port, host, () => resolve(server));
  });
}

// Reuse an already-running server on the port if one answers; otherwise start
// an ephemeral one. Returns { close, started } so callers clean up only what
// they started.
export async function ensureServer(port = 8000, host = '127.0.0.1', root = process.cwd()) {
  const up = await fetch(`http://${host}:${port}/`).then(() => true).catch(() => false);
  if (up) return { close() {}, started: false };
  const server = await serve(root, port, host);
  return { close() { server.close(); }, started: true };
}
