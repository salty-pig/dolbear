'use strict';

const test = require('node:test');
const assert = require('node:assert');

const dolbear = require('../');

test('testing Dolbears law - Fahrenheit', (t) => {
  const cricketChirpsIn15Seconds = 5;

  assert.deepStrictEqual(dolbear.Fahrenheit(cricketChirpsIn15Seconds), 45, 'Should be equal');
});

test('testing Dolbears law - Celcius', (t) => {
  const cricketChirpsIn8Seconds = 5;

  assert.deepStrictEqual(dolbear.Celcius(cricketChirpsIn8Seconds), 10, 'Should be equal');
});
