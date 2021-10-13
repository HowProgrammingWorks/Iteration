'use strict';

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(sum(1, 2, 3));
module.exports = { sum };
