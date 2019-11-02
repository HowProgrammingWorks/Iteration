'use strict';

const max = matrix => matrix
  .reduce((arr, tt) => [...arr, ...tt], [])
  .reduce((mx, cr) => (mx > cr ? mx : cr));
module.exports = { max };
