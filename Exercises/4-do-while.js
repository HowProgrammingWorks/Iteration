'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let result = 0;
  let i = 0;
  do {
    result += args[i++];
  } while (i < args.length);
  return result;
};

module.exports = { sum };
