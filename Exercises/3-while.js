'use strict';

const sum = (...args) => {
  let acc = 0;
  let i = 0;
  while (i < args.length) {
    acc += args[i];
    i++;
  }
  return acc;
};

module.exports = { sum };
