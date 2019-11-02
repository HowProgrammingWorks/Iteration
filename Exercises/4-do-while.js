'use strict';

const sum = (...args) => {
  let sum = 0, i = 0;
  const len = args.length;
  if (len !== 0) do {
    sum += args[i++];
  } while (i < len);
  return sum;
};

module.exports = { sum };
