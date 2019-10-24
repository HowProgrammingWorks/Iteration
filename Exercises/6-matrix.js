'use strict';

const max = matrix =>
  []
    .concat(
      Array.isArray(matrix) ?
        matrix.reduce((acc, cur) => acc.concat(max(cur)), []) :
        matrix
    )
    .sort((a, b) => b - a)[0];

module.exports = { max };
