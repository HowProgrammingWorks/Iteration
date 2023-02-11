'use strict';

const sum = (...args) => {
  let result = 0;
  if (!args.length) return result;
  do {
    result += args.pop();
  } while (args.length);
  return result;
};

module.exports = { sum };
