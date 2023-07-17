'use strict';

const max = (matrix) => {
  let value = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (value < cell) value = cell;
    }
  }
  return value;
};

/* one-line solution
const max = matrix =>  Math.max(...matrix.flat())
*/

module.exports = { max };
