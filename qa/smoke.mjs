import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const failures = [];
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const mainJs = fs.readFileSync(path.join(root, 'js', 'main.js'), 'utf8');

for (const ref of [...html.matchAll(/(?:src|href)=["']([^"'#?]+)["']/gi)].map((m) => m[1])) {
  if (/^(?:https?:|data:|mailto:|javascript:)/i.test(ref)) continue;
  const target = path.resolve(root, ref);
  if (target.startsWith(root + path.sep) && !fs.existsSync(target)) failures.push(`index.html: missing local resource ${ref}`);
}

for (const file of ['index.html', 'offline.html', 'manifest.json', 'service-worker.js']) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`missing required file: ${file}`);
}

try {
  JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
} catch (error) {
  failures.push(`manifest.json is invalid JSON: ${error.message}`);
}

const jsDir = path.join(root, 'js');
for (const file of fs.readdirSync(jsDir).filter((name) => name.endsWith('.js'))) {
  try {
    execFileSync(process.execPath, ['--check', path.join(jsDir, file)], { stdio: 'pipe' });
  } catch (error) {
    failures.push(`JavaScript syntax error in js/${file}: ${error.stderr?.toString().trim() || error.message}`);
  }
}

const requiredProjectMarkers = [
  'PocketPilot — Student Budget Tracker',
  'Logic Lab',
  'ECE Toolkit',
  'Microcontroller Hub',
  'Python for Students',
  'C Programming Hub',
  'Attendance Tracker'
];
for (const marker of requiredProjectMarkers) {
  if (!mainJs.includes(marker)) failures.push(`portfolio project definition missing: ${marker}`);
}

for (const url of [
  'https://shyam2010-py.github.io/StudentBudgetTracker/',
  'https://shyam2010-py.github.io/LogicLab/',
  'https://shyam2010-py.github.io/ece-toolkit/',
  'https://shyam2010-py.github.io/microcontroller-hub/',
  'https://shyam2010-py.github.io/python-for-students/',
  'https://shyam2010-py.github.io/c-programming-hub/',
  'https://shyam2010-py.github.io/Attendance-Tracker/'
]) {
  if (!mainJs.includes(url)) failures.push(`portfolio live URL missing: ${url}`);
}

if (failures.length) {
  console.error(failures.map((f) => `FAIL ${f}`).join('\n'));
  process.exit(1);
}
console.log('PASS Portfolio static QA');
