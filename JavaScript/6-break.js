'use strict';

const flag = false;

label1: {
  console.log('Hello');
  if (flag) break label1;
  console.log('World');
  label2: {
    console.log('There');
    break label2;
    console.log('Bye');
  }
  console.log('End');
}
