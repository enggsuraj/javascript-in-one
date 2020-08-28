/* CONSTRUCTORS */

//ES5
function Employee(firstName, lastName, ID) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ID = ID;
}
//PROTOTYPE
Employee.prototype.designation = "Manager";
Employee.prototype.getDetails = function () {
  return {
    firstname: this.firstName,
    lastName: this.lastName,
    ID: this.ID,
    Designation: this.designation,
  };
};

//NEW OBEJCT
let emp = new Employee("John", "Dev", 123);
let result = emp.getDetails();
console.log(result);
//{ firstname: 'John', lastName: 'Dev', ID: 123, Designation: 'Manager' }
