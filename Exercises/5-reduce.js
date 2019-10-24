'use strict';

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

module.exports = { sum };
