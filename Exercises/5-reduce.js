'use strict';

const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);

module.exports = { sum };
