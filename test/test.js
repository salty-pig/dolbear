'use strict';

const test = require('node:test');
const assert = require('node:assert');

const dolbear = require('../');

test('testing Dolbears law', (t) => {
  const cricketChirpsIn15Seconds = 5;

  assert.deepStrictEqual(dolbear(cricketChirpsIn15Seconds), 45, 'Should be equal');
});

