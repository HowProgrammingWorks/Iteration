'use strict';

const sum = (...args) => args.reduce((acc, sum) => (acc += sum), 0);


module.exports = { sum };
