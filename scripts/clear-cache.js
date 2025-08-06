/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const fs = require('fs')

const dirToRemove = path.resolve(__dirname, '..','node_modules', '.cache')

fs.rmSync(dirToRemove, { recursive: true });

console.log('CLEAR CACHE');
