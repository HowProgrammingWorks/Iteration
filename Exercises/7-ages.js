'use strict';

const ages = persons => {
  const lifeTime = {};
  for (const key in persons)
    lifeTime[key] = persons[key].died - persons[key].born;
  return lifeTime;
};

module.exports = { ages };
