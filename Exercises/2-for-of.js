'use strict';

const sum = (...args) => {
  let res = 0;
  for (const arg of args) {
    res += arg;
  }
  return res;
};

module.exports = { sum };
