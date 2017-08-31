'use strict';

const flag = true;

label1: {
  console.log('Hello');
  if (flag) break label1;
  console.log('World');
  label2: {
    console.log('There');
    break label2;
  }
}

