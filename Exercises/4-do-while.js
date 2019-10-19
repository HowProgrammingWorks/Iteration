'use strict';

const sum = (...args) => {
  let val = 0;
  if (args.length === 0) return 0;
  do {
    val += args.shift();
  } while (args.length > 0);
  return val;
};

module.exports = { sum };
