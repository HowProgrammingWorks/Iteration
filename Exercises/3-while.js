'use strict';

const sum = (...args) => {
  let accum = 0, i = 0;
  while (i < args.length) {
    accum += args[i];
    i++;
  }
  return accum;
};

module.exports = { sum };
