import { readFileSync, readdirSync } from 'node:fs';

const available = readdirSync('sections')
  .filter((f) => f.endsWith('.liquid'))
  .map((f) => f.replace(/\.liquid$/, ''));

const template = JSON.parse(readFileSync('templates/index.json', 'utf8'));
let failed = false;

for (const [id, section] of Object.entries(template.sections || {})) {
  if (!available.includes(section.type)) {
    console.error(`ThemeValidationError: section "${id}" references unknown section type "${section.type}" in templates/index.json`);
    failed = true;
  }
}

if (failed) {
  console.error('Theme validation failed. Section types must match a file in sections/.');
  process.exit(1);
}
console.log('Theme templates OK');
