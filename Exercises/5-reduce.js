'use strict';

const sum = (...args) => args.reduce((pre, curr) => (pre + curr), 0);

module.exports = { sum };
