'use strict';

const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

module.exports = { sum };
