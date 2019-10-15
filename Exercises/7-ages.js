'use strict';

const ages = persons => {
  const ages = {};
  for (const element in persons) {
    ages[element] = persons[element]['died'] - persons[element]['born'];
  }
  return ages;
};

module.exports = { ages };
