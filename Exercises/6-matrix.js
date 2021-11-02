'use strict';

const max = matrix => {
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

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
module.exports = { max };
