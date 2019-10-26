'use strict';
const sum = (...args) => args.reduce((accum, cVal) => accum + cVal, 0);
module.exports = { sum };
