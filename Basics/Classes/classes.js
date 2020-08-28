/* ******************** CLASSES & SUBCLASSES ************************/

//ES5

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  return age;
};

var Obj = new Person("blogtheorem", 1900, "swimmer");
Obj.calculateAge();

//ES6

class PersonES6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    return age;
  };
  static greeting() {
    console.log("Hello!!");
  }
}

var Obj = new PersonES6("blogtheorem", 1900, "swimmer");
Obj.calculateAge();
