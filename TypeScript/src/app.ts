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
let num:number = 45;
let str:string = 'TypeScript';
let isCoding:boolean = true;

let data: string | number;

const getName = (name:string) => {
    return `Name is ${name}`;
}
getName("suraj")

//2. ARRAY 

let arr_1:number[] = [1,2,3,4,5]
arr_1.push(6);

let arr_4:[string, number] = ['a', 1];

let arr_2: string[] = ['a','b','c'];
arr_2.push('d');

let arr_3: (string | number | boolean)[] = ['a', 1, true]

// 3. OBJECTS

interface objInterface {
    name:string, 
    ID:number
}

let obj = {
    name:'Suraj',
    ID:123
}

const getDetails = (obj: objInterface) => {
    return `Name: ${obj.name} and ID : ${obj.ID}`
}

getDetails(obj)

// CLASS

interface PersonInterface {
    name:string;
    age: number;
}

class Person implements PersonInterface{

    name: string;
    age: number;

    constructor( name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `hi ${this.name} ${this.age}`
    }
}

let user = new Person('blogtheorem', 123)
console.log(user.greet())

// TYPE CASTING AND DOM

const inputName = document.querySelector('.name') as HTMLInputElement
const inputAge = document.querySelector('.age') as HTMLInputElement
const greeting = document.querySelector('.greeting') as HTMLDivElement


// THIS WAY OR
const form1 = document.querySelector('form');
form1?.addEventListener('submit', ()=> {

})

const form2 = document.querySelector('form')!;
form2.addEventListener('submit', ()=> {

    const person = new Person (inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
})


