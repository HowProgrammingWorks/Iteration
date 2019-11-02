'use strict';
const sum = (...args) => args.reduce((s, c) => s + c, 0);
module.exports = { sum };
