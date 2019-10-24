/* eslint-disable quotes */
"use strict";

const sum = (...args) => {
  let add = 0;
  for (const i of args) {
    add += i;
  }
  return add;
};


module.exports = { sum };
