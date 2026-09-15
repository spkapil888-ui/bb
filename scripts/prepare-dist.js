const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const rootDir = process.cwd();
const nextDir = path.join(rootDir, '.next');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

console.log('[prepare-dist] Preparing dist directory for artifact upload...');

// Clean and create dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy all .next build artifacts into dist
if (fs.existsSync(nextDir)) {
  copyDir(nextDir, distDir);
}

// Ensure static files are accessible at both /static and /_next/static in dist
const nextStaticDir = path.join(nextDir, 'static');
if (fs.existsSync(nextStaticDir)) {
  copyDir(nextStaticDir, path.join(distDir, 'static'));
  copyDir(nextStaticDir, path.join(distDir, '_next', 'static'));
}

// Copy public assets into dist root
if (fs.existsSync(publicDir)) {
  copyDir(publicDir, distDir);
}

// Copy prerendered HTML entry points to root of dist for static hosting
const appIndexPath = path.join(nextDir, 'server', 'app', 'index.html');
if (fs.existsSync(appIndexPath)) {
  fs.copyFileSync(appIndexPath, path.join(distDir, 'index.html'));
  console.log('[prepare-dist] Generated dist/index.html');
}

const notFoundPath = path.join(nextDir, 'server', 'app', '_not-found.html');
const pagesNotFoundPath = path.join(nextDir, 'server', 'pages', '404.html');
if (fs.existsSync(notFoundPath)) {
  fs.copyFileSync(notFoundPath, path.join(distDir, '404.html'));
  console.log('[prepare-dist] Generated dist/404.html from _not-found.html');
} else if (fs.existsSync(pagesNotFoundPath)) {
  fs.copyFileSync(pagesNotFoundPath, path.join(distDir, '404.html'));
  console.log('[prepare-dist] Generated dist/404.html from 404.html');
}

// Create fallback unhashed chunk aliases so dev/fallback requests never 404
const standaloneDir = path.join(nextDir, 'standalone');
const standaloneNextDir = path.join(standaloneDir, '.next');
const standaloneStaticDir = path.join(standaloneNextDir, 'static');
const standalonePublicDir = path.join(standaloneDir, 'public');

if (fs.existsSync(standaloneDir)) {
  console.log('[prepare-dist] Populating standalone directory assets...');
  if (fs.existsSync(nextStaticDir)) {
    copyDir(nextStaticDir, standaloneStaticDir);
  }
  if (fs.existsSync(publicDir)) {
    copyDir(publicDir, standalonePublicDir);
  }
}

const appChunksDirs = [
  path.join(distDir, '_next', 'static', 'chunks', 'app'),
  path.join(distDir, 'static', 'chunks', 'app'),
  path.join(nextDir, 'static', 'chunks', 'app'),
  path.join(standaloneStaticDir, 'chunks', 'app'),
];

for (const dir of appChunksDirs) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.startsWith('error-') && file.endsWith('.js')) {
        fs.copyFileSync(path.join(dir, file), path.join(dir, 'error.js'));
      }
      if (file.startsWith('global-error-') && file.endsWith('.js')) {
        fs.copyFileSync(path.join(dir, file), path.join(dir, 'global-error.js'));
      }
      if (file.startsWith('not-found-') && file.endsWith('.js')) {
        fs.copyFileSync(path.join(dir, file), path.join(dir, 'not-found.js'));
      }
    }
  }
}

console.log('[prepare-dist] dist directory successfully populated with build artifacts.');
