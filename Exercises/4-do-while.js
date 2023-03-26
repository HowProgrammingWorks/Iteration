'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let accum = 0, i = 0;
  do {
    accum += args[i];
    i++;
  } while (i < args.length);
  return accum;
};

module.exports = { sum };
