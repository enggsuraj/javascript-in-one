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
let y: undefined = undefined;
let z: null = null;

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

// TUPLES
/*
A tuple is a typed array with a pre-defined length and types for each index.
*/

let ourTuple: [number, boolean, string] = [5, false, 'Coding'];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');

const graph: [number, number] = [55.2, 41.3];
const [p, q] = graph;

// 3. OBJECTS

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

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

// ALIASES

type StringAndNum = string | number;
let val :StringAndNum = 'Data'

//Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };


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
const ID = document.querySelector('.id') as HTMLDivElement

// THIS WAY OR
const form1 = document.querySelector('form');
form1?.addEventListener('submit', ()=> {

})

const form2 = document.querySelector('form')!;
form2.addEventListener('submit', ()=> {

    const person = new Person (inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
})

// FUNCTIONS
// the `: number` here specifies that this function returns a number
function getTime(): number {
return new Date().getTime();
}

function printHello(): void {
console.log('Hello!');
}

function multiply(a: number, b: number) {
return a * b;
}

// CLASSES
class Person1 {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person1("Jane");
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

// GENERICS
/*
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
Generics makes it easier to write reusable code.
*/

function doSomething<T>(args :T):T{
    return args
}

doSomething(5)
doSomething("5")
doSomething(true)

interface book<T> {
    id:number;
    name:string
    data:T
}

const abook: book<string>  = {
    id:1,
    name: "Title",
    data: "1"
}


const bbook: book<string[]>  = {
    id:1,
    name: "Title",
    data: ['Review1', "Review 2"]
}

