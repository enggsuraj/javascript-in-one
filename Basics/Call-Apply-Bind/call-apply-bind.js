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

function getName(designation, ID) {
  console.log(this.name, designation, ID);
}

//OR

// const getName = function (designation, ID) {
//   console.log(this.name, designation, ID);
// };

getName.call(obj4, "developer", 123);
getName.apply(obj4, ["developer", 123]);

let myName = getName.bind(obj4);
myName("dev", 123);
