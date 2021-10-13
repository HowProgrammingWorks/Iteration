'use strict';

const sum = (...args) => args.reduce((prev, cur) => prev + cur, 0);
console.log(sum(0, 3, -5));
module.exports = { sum };
