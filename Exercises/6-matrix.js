'use strict';

const max = matrix => {
  const arrOfNum = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      arrOfNum.push(Math.max.apply(null, row));
    }
  }

  return Math.max.apply(null, arrOfNum);
};

module.exports = { max };
