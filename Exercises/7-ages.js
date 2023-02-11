'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const { died, born } = persons[name];
    const age = died - born;
    result[name] = age;
  }
  return result;
};

module.exports = { ages };
