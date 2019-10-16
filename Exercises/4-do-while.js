'use strict';

const sum = (...args) => {
  const l = args.length;
  if (!l) return 0;
  let i = 0;
  let sum = 0;
  do {
    sum += args[i];
    i++;
  } while (i < l);
  return sum;
};

module.exports = { sum };
