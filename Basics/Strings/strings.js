let user ={
    firstName = "blog",
    lastName = "theorem",
    ID:123,
    isCoding:true
}

//ES5
console.log("This is :" + user.firstName + " " + user.lastName);

//ES6 - TEMPLATE STRINGS
console.log(`This is :${user.firstName} ${user.lastName}`);
