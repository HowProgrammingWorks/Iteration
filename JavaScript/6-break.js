'use strict';

const flag = false;

label1: for (let i = 0; i < 10; i++) {
  console.log('Hello');
  if (flag) break label1;
  console.log('World');
  label2: for (let j = 0; j < 10; j++) {
    console.log('There');
    break label1;
    console.log('Bye');
  }
  console.log('End');
}
