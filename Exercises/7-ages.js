'use strict';

const ages = (persons) => {
  const ages = {};

  for (const person in persons) {
    const current = persons[person];
    ages[person] = current.died - current.born;
  }

  return ages;
};

module.exports = { ages };
