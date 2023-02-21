'use strict';

const sum = (...args) => {
  let i = 0;
  let result = 0;

  while (i < args.length) {
    result += args[i];
    i++;
  }

  return result;
};

module.exports = { sum };
