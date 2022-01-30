'use strict';

const ages = (persons) => {
  const result = {};
  for (const person in persons) {
    const { born, died } = persons[person];
    result[person] = died - born;
  }
  return result;
};

module.exports = { ages };
