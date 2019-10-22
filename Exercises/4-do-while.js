'use strict';

const sum = (...args) => {
  let result = 0;
  let i = 0;
  do {
    result += args[i++];
  } while (i < args.length);
  return result;
};

module.exports = { sum };
