'use strict';
const max = matrix => {      
    const newarr = [];
    const mx = (nar) => Math.max.apply(null, nar);     
         for(let arr of matrix){
               for (let na of arr){
                  newarr.push(na);
             }
           } 
           const z = mx(newarr);
           return z;
   };

module.exports = { max };
