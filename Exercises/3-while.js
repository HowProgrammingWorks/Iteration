'use strict';

const sum = (...args) => {
  let res = 0;
  let c = 0;
  while (c < args.length) {
    res += args[c];
    c++;
  }
  return res;
};

module.exports = { sum };
