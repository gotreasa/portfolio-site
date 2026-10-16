import { test } from 'node:test';
import assert from 'node:assert/strict';
import { latestTag, pinsIn, bump } from './presence-pin.js';

const URL = 'https://raw.githubusercontent.com/gotreasa/presence/';

test('latestTag picks the highest vN, numerically', () => {
  const lsRemote = [
    'aaa\trefs/tags/v2',
    'bbb\trefs/tags/v10',
    'ccc\trefs/tags/v9',
    'ddd\trefs/tags/latest',
    'eee\trefs/tags/v3.1',
  ].join('\n');
  assert.equal(latestTag(lsRemote), 'v10');
});

test('latestTag returns null when there is no vN tag', () => {
  assert.equal(latestTag('aaa\trefs/tags/latest\n'), null);
});

test('pinsIn finds every presence pin in a file', () => {
  const text = `a ${URL}v5/presence.json b\nc ${URL}v5/presence.json d\n`;
  assert.deepEqual(pinsIn(text), ['v5', 'v5']);
});

test('bump moves every pin and leaves the rest of the text alone', () => {
  const text = `curl -o x ${URL}v5/presence.json && hugo\n# keep ${URL}\n`;
  assert.equal(
    bump(text, 'v6'),
    `curl -o x ${URL}v6/presence.json && hugo\n# keep ${URL}\n`,
  );
});

test('bump refuses a file whose pins disagree', () => {
  const text = `${URL}v2/presence.json\n${URL}v5/presence.json\n`;
  assert.throws(() => bump(text, 'v6'), /disagree/);
});

test('bump refuses a file with no pin', () => {
  assert.throws(() => bump('nothing here\n', 'v6'), /no presence pin/);
});
