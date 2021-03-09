'use strict';

const sum = (...args) => {
  let res = 0;
  for (const el of args) {
    res += el;
  }
  return res;
};

module.exports = { sum };
