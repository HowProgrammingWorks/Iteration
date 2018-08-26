'use strict';

const flag = false;

label1: {
  console.log(1); // 1
  label2: {
    console.log(2); // 2
    break label1;
    console.log(3); // no output
  }
  console.log(4); // no output
}
console.log(5); // 5
