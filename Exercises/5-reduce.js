'use strict';

const sum = (...args) => args.reduce((sum, value) => sum + value, 0);

module.exports = { sum };
