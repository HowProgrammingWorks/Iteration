'use strict';

const sum = (...args) => args.reduce((a, b) => (a + b), 0);;
console.log(sum(1,2,3,4,5,6));


module.exports = { sum };
