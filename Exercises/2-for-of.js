'use strict';

const sum = (...args) => {
  let res = 0;
  for (const elem of args) {
    res += elem;
  }
  return res;
};

module.exports = { sum };
