'use strict';

var logrange = require('..');

var test = require('tape');


test(function (t) {
  t.deepEqual(logrange(4, 2, 2), []);
  t.deepEqual(logrange(4, 4, 2), []);
  t.deepEqual(logrange(4, 4, 1), []);
  t.deepEqual(logrange(4, 4, 0.1), []);
  t.deepEqual(logrange(4, 4.1, 2), [4]);
  t.deepEqual(logrange(4, 8, 2), [4]);
  t.deepEqual(logrange(4, 9, 2), [4, 8]);
  t.deepEqual(logrange(4, 1000, 2), [4, 8, 16, 32, 64, 128, 256, 512]);
  t.deepEqual(logrange(4, 0.1, 0.5), [4, 2, 1, 0.5, 0.25, 0.125]);

  t.deepEqual(logrange({ inclusive: true }, 4, 8, 2), [4, 8]);
  t.deepEqual(logrange({ inclusive: true }, 16, 1, 0.5), [16, 8, 4, 2, 1]);

  t.throws(logrange.bind(null, 4, -4, 2));
  t.throws(logrange.bind(null, 4, 4, -2));
  t.throws(logrange.bind(null, 0, 4, 2));
  t.throws(logrange.bind(null, 4, 4, 0));
  t.throws(logrange.bind(null, { inclusive: true }, 2, 0, 0.5));

  t.end();
});
