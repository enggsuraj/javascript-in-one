"use strict";

const car = {
  color: "Red",
  getSummary() {
    return `The car is ${this.color}`;
  },
};

console.log(car.getSummary());

//OBJECT
const user = {
  
  //PROPERTY 🔥
   name: 'blogtheorem',
   ID:123,
   isCoding:true,
   
   //METHOD 🔥
   getBio(){
     return `${this.name}` 
   }
 }
 
 console.log(user.getBio())