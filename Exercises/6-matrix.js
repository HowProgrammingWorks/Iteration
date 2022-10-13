'use strict';

const max = (matrix) => {
  const maxs = [];
  for (const row of matrix) {
    let max = row[0];
    row.forEach((value) => {
      if (value > max) max = value;
    });
    maxs.push(max);
  }

  let result = maxs[0];
  maxs.forEach((value) => {
    if (value > result) result = value;
  });
  return result;
};

module.exports = { max };
