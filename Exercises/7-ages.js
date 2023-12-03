'use strict';

const ages = (persons) => {
  const ages = {}; 

  for (const person in persons) { 
    const personData = persons[person]; 
    ages[person] = personData.died - personData.born; 
  }

  return ages; 
};

module.exports = { ages };
