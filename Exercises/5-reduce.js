'use strict';

const sum = (...args) => args.reduce((accum, val) => accum + val, 0);

module.exports = { sum };
