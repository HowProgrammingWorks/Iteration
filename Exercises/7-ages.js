'use strict';

const ages = persons => {
  const value = {};
  for (const inf in persons) {
    const chelovek = persons[inf];
    value[inf] = chelovek.died - chelovek.born;
  }
  return value;
};

module.exports = { ages };
