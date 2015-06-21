'use strict';

var mathops = require('mathops');


module.exports = function (opts, first, last, ratio) {
  if (!opts || typeof opts != 'object') {
    ratio = last;
    last = first;
    first = opts;
    opts = {};
  }

  if (!(0 < first && 0 < last && 0 < ratio)) {
    throw Error('logrange(' + [].slice.call(arguments) + '):' +
                ' arguments must be positive.');
  }

  var beforeLast = mathops[['gt', 'lt', 'ge', 'le']
                           [!!opts.inclusive * 2 + (ratio < 1)]]
        .bind(null, last);

  var seq = [];

  for (var x = first; beforeLast(x); x *= ratio) {
    seq.push(x);
  }

  return seq;
};
