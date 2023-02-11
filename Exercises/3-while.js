'use strict';

const sum = (...args) => {
  let idx = 0;
  let res = 0;
  while (idx < args.length) {
    res += args[idx];
    idx++;
  }
  return res;
};

module.exports = { sum };
