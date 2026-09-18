// Standalone no-cache preview server. Usage: node scripts/serve.mjs [port]
import { serve } from './_serve.mjs';

const port = Number(process.argv[2] || process.env.PORT || 8000);
try {
  await serve(process.cwd(), port);
  console.log(`Serving (no-cache) http://127.0.0.1:${port}/  —  Ctrl-C to stop`);
} catch (e) {
  if (e.code === 'EADDRINUSE') {
    console.error(`Port ${port} is busy. Free it with:  make kill-serve`);
    process.exit(1);
  }
  throw e;
}
