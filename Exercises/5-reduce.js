'use strict';

const sum = (...args) => {
    return args.reduce((total, current) => total + current, 0);
  };

module.exports = { sum };
