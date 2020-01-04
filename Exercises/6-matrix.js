'use strict';

const max = matrix => {
  let list = [];
  for (let elem of matrix) {
    for (let inside of elem) {
      list.push(inside);
    }
  }
  // easy gggggggggggggggggggggggggggggggg
  return list.reduce((acc, x) => acc > x ? acc : x);
};


module.exports = { max };
