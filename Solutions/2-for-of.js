'use strict';

const sum = (...args) => {
  let value = 0;
  for (const arg of args) value += arg;
  return value;
};

module.exports = { sum };
