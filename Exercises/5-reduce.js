'use strict';

const sum = (...args) => args.reduce((acc, value) => acc + value, 0);

module.exports = { sum };
