import { cpSync, mkdirSync } from 'fs';

mkdirSync('dist', { recursive: true });

cpSync('src/index.html', 'dist/index.html');
cpSync('images', 'dist/images', { recursive: true });
cpSync('favicon.ico', 'dist/favicon.ico');
cpSync('CNAME', 'dist/CNAME');
