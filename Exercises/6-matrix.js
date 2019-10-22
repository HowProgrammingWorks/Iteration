'use strict';

const max = matrix => {
  let maxValueOfMatrix = 0;
  for (const item of matrix) {
    for (const value of item) {
      if (value > maxValueOfMatrix) {
        maxValueOfMatrix = value;
      }
    }
  }

  return maxValueOfMatrix;
};

module.exports = { max };
