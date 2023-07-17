'use strict';

const sum = (...args) => {
  let result = 0;
  let i = 0;
  do {
    result += args[i] || 0;
    i++;
  } while (i < args.length);
  return result;
};

module.exports = { sum };
