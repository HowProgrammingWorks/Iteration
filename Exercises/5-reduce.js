'use strict';

const sum = (...args) => args.reduce((result, val) => result + val, 0);

module.exports = { sum };
