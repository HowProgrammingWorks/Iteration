'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let res = 0;
  do {
    res += args.pop();
  } while (args.length > 0);
  return res;
};

module.exports = { sum };
