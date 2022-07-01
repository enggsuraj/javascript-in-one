//REDUCE
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);
//6

// SECOND EXAMPLE
const array = [1, 2, 3, 4];
const total = 0;
const result = array.reduce((total, current) => {
  total = total + current;
  return total;
});
console.log(result);
