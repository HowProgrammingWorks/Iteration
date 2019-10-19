'use strict';

const sum = (...args) => args.reduce((a, v) => (a + v), 0);


module.exports = { sum };
