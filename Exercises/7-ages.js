'use strict';

const ages = persons => {
  const result = {};
  for (const key in persons) {
    result[key] = persons[key].died - persons[key].born;
  }
  return result; //return result
};

module.exports = { ages };
