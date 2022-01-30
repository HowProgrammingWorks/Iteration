'use strict';

const sum = (...args) => args.reduce((acc, value) => acc + value);
// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

module.exports = { sum };
