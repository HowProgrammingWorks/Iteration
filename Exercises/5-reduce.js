'use strict';

const sum = (...args) => args.reduce((s, c) => s += c, 0);

module.exports = { sum };

// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
