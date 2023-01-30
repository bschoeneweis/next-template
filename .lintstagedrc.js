const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    "bash -c 'tsc --project ./tsconfig.json --noEmit --pretty'",
    buildEslintCommand,
    "bash -c 'npx prettier --write .'",
  ],
};
