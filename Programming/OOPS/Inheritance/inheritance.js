/****************************** INHERITANCE IN ES5 ******************************/

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  return age;
};

var Athelete5 = function (name, yearOfBirth, job, medals, olymicGames) {
  //INHERIT USING
  Person5.call(this, name, yearOfBirth, job);
  this.medals = medals;
  this.olymicGames = olymicGames;
};

Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function () {
  this.medals++;
};

var john_Athelete5 = new Athelete5("blogtheorem", 1900, "swimmer", 3, 10);
john_Athelete5.calculateAge();
john_Athelete5.wonMedal();

/****************************** INHERITANCE IN ES6 ******************************/

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

class Athelete6 extends PersonES6 {
  constructor(name, yearOfBirth, job, medals, olymicGames) {
    super(name, yearOfBirth, job);
    this.medals = medals;
    this.olymicGames = olymicGames;
  }

  wonMedal() {
    this.medals++;
  }
}

var john_Athelete6 = new Athelete6("blogtheorem", 1900, "swimmer", 3, 10);
john_Athelete6.calculateAge();
john_Athelete6.wonMedal();
