"use strict";
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
var y = undefined;
var z = null;
var data;
var getName = function (name) {
    return "Name is ".concat(name);
};
getName("suraj");
//2. ARRAY 
var arr_1 = [1, 2, 3, 4, 5];
arr_1.push(6);
var arr_4 = ['a', 1];
var arr_2 = ['a', 'b', 'c'];
arr_2.push('d');
var arr_3 = ['a', 1, true];
// TUPLES
/*
A tuple is a typed array with a pre-defined length and types for each index.
*/
var ourTuple = [5, false, 'Coding'];
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
var graph = [55.2, 41.3];
var p = graph[0], q = graph[1];
// 3. OBJECTS
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
var obj = {
    name: 'Suraj',
    ID: 123
};
var getDetails = function (obj) {
    return "Name: ".concat(obj.name, " and ID : ").concat(obj.ID);
};
getDetails(obj);
var val = 'Data';
var rectangle = {
    height: 20,
    width: 10
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "hi ".concat(this.name, " ").concat(this.age);
    };
    return Person;
}());
var user = new Person('blogtheorem', 123);
console.log(user.greet());
// TYPE CASTING AND DOM
var inputName = document.querySelector('.name');
var inputAge = document.querySelector('.age');
var greeting = document.querySelector('.greeting');
var ID = document.querySelector('.id');
// THIS WAY OR
var form1 = document.querySelector('form');
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', function () {
});
var form2 = document.querySelector('form');
form2.addEventListener('submit', function () {
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
});
// FUNCTIONS
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
// CLASSES
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person = new Person1("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
// GENERICS
/*
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
Generics makes it easier to write reusable code.
*/
function doSomething(args) {
    return args;
}
doSomething(5);
doSomething("5");
doSomething(true);
var abook = {
    id: 1,
    name: "Title",
    data: "1"
};
var bbook = {
    id: 1,
    name: "Title",
    data: ['Review1', "Review 2"]
};
