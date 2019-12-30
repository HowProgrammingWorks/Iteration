'use strict';

const sum = (...args) => {
  let i = 0, result = 0;
  do {
    if (args[i]) {
      result += args[i];
    }
    i++;
  }
  while (i < args.length);
  return result;
};

module.exports = { sum };
