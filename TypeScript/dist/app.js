/*

tsc --init
tsc -w

JavaScript uses anything that means you can
assign anything to anything.

TypeScript uses static typing.

String Type
Number Type
Boolean Type
Any Type
Union
String Array Type
Number Array Type
Boolean Array Type
Mixed Array Type
Tuples
Object Type
Custom Types
Function Type
Void Type
Interfaces
Classes
DOM Manipulation & Type Casting
Generics
Enums

*/
//1. TYPE BASICS
var num = 45;
var str = 'TypeScript';
var isCoding = true;
var data;
var getName = function (name) {
    return "Name is " + name;
};
getName("suraj");
//2. ARRAY 
var arr_1 = [1, 2, 3, 4, 5];
arr_1.push(6);
var arr_4 = ['a', 1];
var arr_2 = ['a', 'b', 'c'];
arr_2.push('d');
var arr_3 = ['a', 1, true];
var obj = {
    name: 'Suraj',
    ID: 123
};
var getDetails = function (obj) {
    return "Name: " + obj.name + " and ID : " + obj.ID;
};
getDetails(obj);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "hi " + this.name + " " + this.age;
    };
    return Person;
}());
var user = new Person('blogtheorem', 123);
console.log(user.greet());
// TYPE CASTING AND DOM
var inputName = document.querySelector('.name');
var inputAge = document.querySelector('.age');
var greeting = document.querySelector('.greeting');
// THIS WAY OR
var form1 = document.querySelector('form');
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', function () {
});
var form2 = document.querySelector('form');
form2.addEventListener('submit', function () {
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
});
