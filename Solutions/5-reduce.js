'use strict';

const sum = (...args) => args.reduce((a, b) => (a + b), 0);

module.exports = { sum };
