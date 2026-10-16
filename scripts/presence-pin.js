// Keep the presence pin current without letting it float.
//
// The site fetches data/presence.json from a PINNED tag of gotreasa/presence
// (netlify.toml, and the fetch:presence npm script), never a branch tip, so a
// build is reproducible and a bad export cannot change the live site by itself.
// The cost of pinning is that a forgotten bump goes unnoticed: production sat
// on v2 for two releases in Oct 2026. The presence-pin workflow runs this to
// find a newer tag and opens a PR that moves every pin at once; merging that PR
// is the approval, after looking at its Netlify deploy preview.
//
//   node scripts/presence-pin.js check <ls-remote-output-file>
//     prints `current=vN` and `latest=vM` (GITHUB_OUTPUT format)
//   node scripts/presence-pin.js apply <tag>
//     rewrites every pin in PIN_FILES to <tag>
import fs from 'node:fs';

const PIN =
  /(https:\/\/raw\.githubusercontent\.com\/gotreasa\/presence\/)(v\d+)(\/presence\.json)/g;
const TAG = /^refs\/tags\/(v\d+)$/;

// netlify.toml is what production builds from, so its pin is the current one.
// package.json carries the same URL for local development (npm run fetch:presence).
export const PIN_FILES = ['netlify.toml', 'package.json'];

const number = (tag) => Number(tag.slice(1));

export const latestTag = (lsRemote) => {
  const tags = lsRemote
    .split('\n')
    .map((line) => line.split('\t')[1] || '')
    .map((ref) => TAG.exec(ref.trim()))
    .filter(Boolean)
    .map((match) => match[1]);
  if (tags.length === 0) return null;
  return tags.reduce((a, b) => (number(b) > number(a) ? b : a));
};

export const pinsIn = (text) => [...text.matchAll(PIN)].map((m) => m[2]);

export const bump = (text, tag) => {
  const pins = pinsIn(text);
  if (pins.length === 0) throw new Error('no presence pin found');
  if (new Set(pins).size > 1) {
    throw new Error(`pins disagree: ${[...new Set(pins)].join(', ')}`);
  }
  return text.replace(PIN, `$1${tag}$3`);
};

const main = ([command, arg]) => {
  if (command === 'check') {
    const latest = latestTag(fs.readFileSync(arg, 'utf8'));
    const current = [...new Set(pinsIn(fs.readFileSync(PIN_FILES[0], 'utf8')))];
    if (current.length !== 1) {
      throw new Error(
        `${PIN_FILES[0]} pins disagree or are missing: ${current}`,
      );
    }
    console.log(`current=${current[0]}`);
    console.log(`latest=${latest ?? ''}`);
    return;
  }
  if (command === 'apply') {
    if (!/^v\d+$/.test(arg || '')) throw new Error(`not a vN tag: ${arg}`);
    for (const file of PIN_FILES) {
      fs.writeFileSync(file, bump(fs.readFileSync(file, 'utf8'), arg));
    }
    return;
  }
  throw new Error(
    'usage: presence-pin.js check <ls-remote-file> | apply <tag>',
  );
};

if (import.meta.url === `file://${process.argv[1]}`) {
  main(process.argv.slice(2));
}
