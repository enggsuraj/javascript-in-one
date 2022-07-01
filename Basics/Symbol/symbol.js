/*

 Symbols are often used to add unique property keys to an object that won't collide 
 with keys any other code might add to the object, and which are hidden from any 
 mechanisms other code will typically use to access the object. 

*/

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
};

console.log(user.username);
