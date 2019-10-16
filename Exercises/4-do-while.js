'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let result = 0;
  do {
    result += args.pop();
  } while (args.length > 0);
  return result;
};

module.exports = { sum };
