'use strict';


module.exports = function (first, last, ratio) {
  if (!(0 < first && 0 < last && 0 < ratio)) {
    throw Error('logrange(' + [].slice.call(arguments) + '):' +
                ' arguments must be positive.');
  }

  var beforeLast = ratio < 1
        ? function (x) { return x > last }
        : function (x) { return x < last };

  var seq = [];

  for (var x = first; beforeLast(x); x *= ratio) {
    seq.push(x);
  }

  return seq;
};
