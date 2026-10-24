const fs = require('fs')

// Keep Node's interpretation aligned with each TypeScript output format.
fs.writeFileSync('dist/package.json', JSON.stringify({ type: 'commonjs' }) + '\n')
fs.writeFileSync('dist/esm/package.json', JSON.stringify({ type: 'module' }) + '\n')
