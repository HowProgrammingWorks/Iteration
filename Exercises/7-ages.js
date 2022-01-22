'use strict';

const ages = persons => {
  const resultObj = {};
  for (let key in persons) {
    resultObj[key] = persons[key].died - persons[key].born;
  }
  return resultObj;
};
module.exports = { ages };
