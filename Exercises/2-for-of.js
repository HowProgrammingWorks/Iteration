'use strict';

const sum = (...args) => {
  let result = 0;
  for (const value of args) result += value;
  return result;
};

module.exports = { sum };
