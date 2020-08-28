var name = "John"; //var is function scoped.
let str = "This is a string"; //let and const are blocked scoped.
const ID = 25;

//SCOPE

// Global scope (name, getName)
// Local scope (age)
// Local scope (location)
// Local scope (height)

let name = "John";
let getName = function () {
  console.log(name);
  let age = 35;
  if (2 > 0) {
    console.log(name);
    console.log(age);
    let location = "New York";
  }
};

getName();
console.log(age);
if (1 < 2) {
  console.log(name);
  let height = 72;
  getName();
}
score;
