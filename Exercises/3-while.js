'use strict';

const sum = (...args) => {
  let res = 0;
  while (args.length > 0) {
    res += args.pop();
  }
  return res;
};

module.exports = { sum };
