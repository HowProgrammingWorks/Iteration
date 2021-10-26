'use strict';

const sum = (...args) => args.reduce((ac, val) => (ac += val), 0);

module.exports = { sum };
