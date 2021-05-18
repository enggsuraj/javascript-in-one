/*

JavaScript uses anything that means you can
assign anything to anything.

TypeScript uses static typing.

05:17 - String Type
06:22 - Number Type
06:52 - Boolean Type
07:30 - Any Type
08:19 - Union
09:16 - String Array Type
10:10 - Number Array Type
10:49 - Boolean Array Type
11:37 - Mixed Array Type
13:09 - Tuples
14:40 - Object Type
15:56 - Custom Types
16:53 - Function Type
20:40 - Void Type
21:08 - Interfaces
22:57 - Classes
27:04 - DOM Manipulation & Type Casting
35:08 - Generics
39:19 - Enums

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
var age = document.querySelector('.age');
// THIS WAY OR
var form1 = document.querySelector('form');
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', function () {
});
var form2 = document.querySelector('form');
form2.addEventListener('submit', function () {
    var person = new Person(inputName.value, inputAge.valueAsNumber);
});
