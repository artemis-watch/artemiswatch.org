import { cpSync, mkdirSync, watch } from 'fs';

function copy() {
  mkdirSync('dist', { recursive: true });
  cpSync('src/index.html', 'dist/index.html');
  cpSync('images', 'dist/images', { recursive: true });
  cpSync('favicon.ico', 'dist/favicon.ico');
  cpSync('CNAME', 'dist/CNAME');
}

copy();

if (process.argv.includes('--watch')) {
  console.log('[build] watching src/ and images/ for changes...');
  for (const dir of ['src', 'images']) {
    watch(dir, { recursive: true }, (_event, filename) => {
      console.log(`[build] changed: ${dir}/${filename} → copying`);
      copy();
    });
  }
}
