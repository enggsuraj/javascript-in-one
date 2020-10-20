/*

OBJECT ORIENTED PROGRAMMING.

🚗 WE COMBINE GROUP  OF REALATED VARIABLES AND FUNCTIONS INTO A UNIT , AND WE CALL THIS UNIT AS OBJECT.
WE CALL THESE VARIABLES AS PROPERTIES AND FUNCTIONS AS METHODS.

4 PILLARS PF OOPS.

📦 ENCAPSULATION : WE GROUP RELATED VARIABLE AND FUNCTIONS. REDUCE COMPLEXITY & INCREASE REUSABILITY
ABSTRACTION : HIDING THE COMPLEXITY & DETAILS AND GIVE SIMPLE INTERFACE.
INHERITANCE : ALLOW ELEMENT REDUNDANT CODE.
POLYMORPHISM : MANY FORMS, ALLOW YOU GET WAY FROM (REFACTOR) LONG IF-ELSE OR SWITCH STATEMENT. 

*/

// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  updateGrade(change) {
    this.grade += change;
  }
  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing";
    return `${this.firstName} is ${status} the class.`;
  }
}
Dev;
const me = new Employee("John", "Dev", 27, "Developer", []);
me.fullName = "Mark Twik ";
console.log(me.getBio());
