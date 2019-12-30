'use strict';

const sum = (...args) => args.reduce((sum, cur) => sum + cur, 0);

module.exports = { sum };
