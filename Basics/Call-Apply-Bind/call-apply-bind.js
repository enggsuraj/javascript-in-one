// Function borrowing
// Call -

const obj4 = {
  name: "suraj",
  ID: "123",
  //   getName: function () {
  //     console.log(this.name);
  //   },
};

const obj5 = {
  name: "john",
  ID: "456",
  //   getName: function () {
  //     console.log(this.name);
  //   },
};

const obj6 = {
  name: "sam",
  ID: "3",
  //   getName: function () {
  //     console.log(this.name);
  //   },
};

function getName(designation) {
  console.log(this.name, this.ID, designation);
}
//

//OR

// const getName = function (designation, ID) {
//   console.log(this.name, designation, ID);
// };

getName.apply(obj4, ["developer"]);
getName.call(obj6, "developer");
//sam 3 developer

let myName = getName.bind(obj4);
myName("dev", 123);

/*********************************************** */

//2.

// call - use to invoke function directly by passing reference which point to this variable inside variable.
// apply - exactly same, only difference is takes second argument as array list of the parameter which need to be passed.
// bind - doesnot directly invoke the method but gives copy of exactly name methos which can be invole later on.

/*

let obj = {
  name: "blogtheorem",
  ID: 123,
  isCoding: true,
};

let getName = function (channel, passion) {
  console.log(this.name, channel, passion);
};

let getID = function () {
  console.log(this.ID);
};

// call
getName.call(obj, "instagram", "webdeveloper");

// apply
getName.call(obj, ["instagram", "webdeveloper"]);

// bind
let getMyName = getName.bind(obj, "instagram", "webdeveloper");
console.log(getMyName);
getMyName();


*/

// 3.

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonName.call(pokemon, "sushi", "algorithms"); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms

// 4.

let obj1 = {
  firstName: "Suraj",
  lastName: "Gehlot",
};

let obj2 = {
  firstName: "Dhiraj",
  lastName: "Gehlot",
};

function getFullName(home, designation) {
  console.log(this.firstName, this.lastName, home, designation);
}

getFullName.call(obj1, "Mumbai", "Developer");
getFullName.apply(obj2, ["Delhi", "Designer"]);

let printFullName = getFullName.bind(obj1, "Mumbai", "Developer");
printFullName(); //can be invoke anywhere
