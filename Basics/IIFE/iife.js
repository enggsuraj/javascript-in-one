//ES5
(function () {
  console.log("Inside IIFE");
})();

//ES6
{
  const a = 1;
  let b = 2;
  console.log("This will be printed");
}

(() => {
  console.log("INSIDE IIFE");
})();

//Inside IIFE
//This will be printed
//INSIDE IIFE
