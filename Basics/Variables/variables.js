//var is function scoped, let const are block scoped

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

console.log(getDetails());
