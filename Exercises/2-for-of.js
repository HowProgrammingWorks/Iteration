'use strict';

const sum = (...args) => {
  let s = 0;
  for (const i of args) s += i;
  return s;
};

module.exports = { sum };
