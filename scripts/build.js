const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('[build] Starting production build with NODE_ENV=production...');

const env = {
  ...process.env,
  NODE_ENV: 'production',
};

const nextBin = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
const buildResult = spawnSync(process.execPath, [nextBin, 'build'], {
  stdio: 'inherit',
  env,
});

if (buildResult.status !== 0) {
  console.error('[build] next build failed with exit code', buildResult.status);
  process.exit(buildResult.status || 1);
}

console.log('[build] next build completed successfully.');

// Now run prepare-dist to ensure dist/ contains complete artifacts
require('./prepare-dist.js');

console.log('[build] All build artifacts prepared in dist/. Build complete.');
