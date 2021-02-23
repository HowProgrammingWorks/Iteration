'use strict';

const sum = (...args) => {
 let res = 0;
 if (args) {
   for (const value of args) res += value;
 }
 return res;
};

module.exports = { sum };
