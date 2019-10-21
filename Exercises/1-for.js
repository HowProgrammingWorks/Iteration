'use strict';

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; args[i]; i++) {
    sum += args[i];
  }
  return sum;
};
module.exports = { sum };
