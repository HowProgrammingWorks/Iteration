'use strict';

const ages = (persons) => {
  const lifes = {};
  for (const pers in persons) {
    const life = persons[pers].died - persons[pers].born;
    lifes[pers] = life;
  }
  return lifes;
};

module.exports = { ages };
