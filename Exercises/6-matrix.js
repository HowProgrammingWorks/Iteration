'use strict';

const max = matrix => {
  let list = [];
  for (let elem of matrix) {
    for (let inside of elem) {
      list.push(inside);
    }
  }
  // find max value in list of all elements with reduce
  return list.reduce((acc, x) => acc > x ? acc : x);
};


module.exports = { max };
