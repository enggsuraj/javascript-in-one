//VARAIBLES
var name ="blogtheorem"
var id = 25;
var isCondition = true;

var name = "suraj"
//console.log(name);

let data= 25;

function getName(){
    var nameExample = "dhiraj"
    return nameExample
}

var result = getName();

//console.log(result);


//OPERATORS

/*
==,====. !==, &&
*/

//CONDITION LOOP FIR , WHILE, FOR EACHH

const arr = []
for(var i = 0;i<5;i++){
    arr.push(i);

}
//console.log(arr);

var i=0
while(i<5){
    console.log(i);
    i++
}

const arr2= [0,1,2,3,4,5]
const arr3= [];
arr2.forEach((n)=>{
    arr3.push(n*2);
})

//console.log(arr3);

let arr4 = [9,8,7,6,5]
//arr4.unshift('name');
arr4.push(15)
arr4.slice(1,3)


//console.log(arr4)

var obj = {
    name :"sufewfraj",
    arr5:[1,2,3],
    getName:function(){
        console.log(`Hello from ${name}`)
    }
}

console.log(obj.getName())

const x =() =>{
    let name ="sdedwedfwf"
    console.log(name)
}
x();

//FUNCTIONS

//ARRAYS & PROPERTIES

//OBJECTS

//METHODS

//EVENTS

//IIFE

(function(){
    console.log("Has to be printed")
})();

//ES6

//arrow function

//strings

//destrcturing

var temp = {
    "today":25,
    "tomorrow":30
}

const { today:newtoday,tomorrow:newtomorrow } = temp

//iife

//classes

//asynchronous code

class Person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    } 

    getName(){
        return this.name
    }

    printName(){
        console.log(`Name is : ${this.name}`);
    }

    calculateID(num){
        return this.id*num;
    }

}

class Male extends Person {
    constructor(name,id,gender){
        super(name,id);
        this.gender = gender;
    }

    getGender(){
        console.log(this.gender)
    }
}

const objP = new Person('blogtheorem',10)
const resultP = objP.calculateID(10);
console.log(resultP);

objP.printName()

const objM = new Male('blog',25,'MALE')

objM.getGender()
















