'use strict';

const sum = (...args) => args.reduce((acc, x) => acc + x, 0);


module.exports = { sum };
