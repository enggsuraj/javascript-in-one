//var is function scoped, let const are block scoped
// Scope - region on program where certain varibale can be recognised.

//GLOBAL
var person1 = "Mike";
let person2 = "Victor";
const heightincm = 180;

let getDetails = function () {
  //LOCAL
  let hairColor = "black";
  return {
    person1: person1,
    person2: person2,
    heightincm: heightincm,
    haircolor: hairColor,
  };
};

// console.log(getDetails());

// var vs let vs const
// 1.

{
  var a = 5;
  let b = 5;
}

console.log(a, b);

// var c;
// var c;

// It is valid

/*
let d;
let d;

invalid 
*/
