let num = 103.941;

console.log(num.toFixed(2)); //103.94

console.log(Math.round(num)); //104
console.log(Math.floor(num)); //103
console.log(Math.ceil(num)); //104

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// 1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNum;
};

console.log(makeGuess(1)); //false
