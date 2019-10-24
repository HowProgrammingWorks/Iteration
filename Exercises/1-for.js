/* eslint-disable quotes */
"use strict";

const sum = args => {
  let add = 0;
  for (let i = 0; i < args.length; i++) {
    add += Number(args[i]);
  }
  return add;
};

module.exports = { sum };
