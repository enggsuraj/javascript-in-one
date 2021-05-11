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

/************************************ */
let modelController = (() => {
  //PRIVATE
  let counterone = 1;
  let countertwo = 1;

  //PUBLIC
  return {
    counterOne: () => {
      return counterone++;
    },

    counterTwo: () => {
      return countertwo++;
    },

    getCounterOne: () => {
      counterone = 0;
      return counterone;
    },
    getCounterTwo: () => {
      countertwo = 0;

      return countertwo;
    },
  };
})();
