'use strict';

const max = (matrix) => {
  let result = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      if (item > result) {
        result = item;
      }
    }
  }

  return result;
};

// const max = (matrix) => {
//   let result = undefined;
//   for (const arr of matrix) {
//     result = arr.reduce((acc, cur) => (acc > cur ? acc : cur), result);
//   }
//   return result;
// };

module.exports = { max };
