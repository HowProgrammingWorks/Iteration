'use strict';

const max = matrix => {
  let value = matrix[0][0];
  for (const index in matrix) {
    const line = matrix[index];
    for (const index2 in line) {
      const colum = line[index2];
      if (colum > value) value = colum;
    }
  }
  return value;
};

/*const max = matrix => {
  let value = matrix[0][0];
  for (const arr of matrix) {
    for (const i of arr) {
      if (i > value) value = i;
    }
  }
  return value;
};*/

/*const max = matrix => {
  const modeMatrix = matrix
    .map(arr => arr.reduce((a, b) => (a > b ? a : b)))
    .reduce((a, b) => (a > b ? a : b));
  return modeMatrix;
};*/

module.exports = { max };
