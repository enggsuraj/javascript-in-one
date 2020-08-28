/* CONSTRUCTORS */

//ES5

function Employee(firstName, lastName, ID) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ID = ID;
}
//PROTOTYPE
Employee.prototype.designation = "Manager";
Employee.prototype.getID = function () {
  console.log(`ID: ${this.ID}`);
};
