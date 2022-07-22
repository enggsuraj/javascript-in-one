// MAP

const nums = [1, 2, 3, 4, 5];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3 + i;
});

console.log(multiplyThree);

// [ 3, 7, 11, 15, 19 ]

////////////////////////////////////////////////////////////////

// FILTER

// take arr and apply condition, if condition is true then arr is pushed otherwise not pushed

const moreThanTwo = nums.filter((num, i, arr) => {
  return num > 2;
});

console.log(moreThanTwo);

// [ 3, 4, 5 ]

// REDUCE
// Method reduce array of value down to one value

const resultSum = nums.reduce((sum, curr) => {
  return sum + curr;
}, 0);

console.log(resultSum);
// 15
