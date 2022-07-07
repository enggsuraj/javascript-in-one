// PROTOTYPE

// The prototype is an object that is associated with every functions and objects by default in JavaScript,

let arr = ["a", "b"];
arr.__proto__; // Arrary.prototype
arr.__proto__.__proto__; // Object.prototype
arr.__proto__.__proto__.__proto__; //null

// This is prototype chain

let obj1 = {
  name: "suraj",
  city: "mumbai",
  print: function () {
    console.log(this.name, this.city);
  },
};

obj2 = {
  name: "john",
};

obj2.print();
// john mumbai

// obj2 doesnt find city in onject so goes to prototype obj1 and print city.
