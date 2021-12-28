'use strict';

const max = matrix => {
  let r = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const bide = matrix[i];
    for (let k = 0; k < bide.length; k++) {
      const c = bide[k];
      if (r < c) r = c;
    }
  }
  return r;
};

module.exports = { max }; 