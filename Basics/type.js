/*

1. VALUE TYPES 

NUMBER 
STRING 
BOOLEAN
SYMBOL
UNDEFINED
NULL

*/

const number = 1;
const newNum = number;
console.log(newNum);

// newNum will have value 1 which is copied from number. So newNum and number are two different allocated in memeory allocation.

/*
2. REFERENCE TYPES
OBJECT
FUCNTION
ARRAY

*/

const person = {
  name: "John",
};

const newPerson = person;
console.log(newPerson);

/*

[object Object]{
    name : 'John'
}

person object is store in a memory and when we assign newPerson to person the pointer to person is copied to newPerson

*/