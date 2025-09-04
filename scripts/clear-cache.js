/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

const dirToRemove = path.resolve(__dirname, '..', 'node_modules', '.cache');
console.log('Trying to remove cache:', dirToRemove);

if (fs.existsSync(dirToRemove)) {
    fs.rmSync(dirToRemove, { recursive: true, force: true });
    console.log('CLEAR CACHE ✅');
} else {
    console.log('No cache directory found, skipping ❌');
}
