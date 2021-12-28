'use strict';

const sum = (...args) => {
  let a = 0;
  for (const key of args) a += key;
  return a;
};

module.exports = { sum };
