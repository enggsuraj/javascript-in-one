//FILTER
const num = [-1, 0, 5, 6, 7, 2];
const result = num.filter((n) => n > 2);
console.log(result);
//[5, 6, 7]

/************************* */

const nums = [1, 2, 3, 4, 5];
let newArr = [];

//MAP

// const result = nums.map((each) => {
//   if (each != 2) {
//     return each;
//   }
// });

// [ 1, undefined, 3, 4, 5 ]

// FILTER

// const result = nums.filter((each) => {
//   if (each != 2) {
//     return each;
//   }
// });

// console.log(result);

// // [ 1, 3, 4, 5 ]

// FOREACH

// nums.forEach((each) => {
//   if (each != 2) {
//     newArr.push(each);
//   }
// });

// console.log(newArr);

// REDUCE

// const result = nums.reduce((acc, val) => {
//   return acc + val;
// });

// console.log(result);

// const result = nums.slice(2, 4);
// console.log(result);
//  0 1 2 3 4
// [1 2 3 4 5]
