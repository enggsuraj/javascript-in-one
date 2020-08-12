//! USER OBJECT
const user = {
  name: "blogtheorem",
  ID: 123,
  isCoding: true,
};

//! CRUD OPERATION
//1. CREATE
const userJSON = JSON.stringify(user);
localStorage.setItem("user", userJSON);

//! 2. READ
const userString = localStorage.getItem("user");
const userJSONdata = JSON.parse(userString);
console.log(`Created: ${userJSONdata.name} ${userJSONdata.ID}`);

//! 3. UPDATE
userJSONdata.name = "blog";
userJSONdata.ID = "321";
const updateuserJSON = JSON.stringify(userJSONdata);
localStorage.setItem("user", updateuserJSON);
console.log(`Updated : ${userJSONdata.name} ${userJSONdata.ID}`);

//! 4. DELETE
//localStorage.removeItem("user");

//! CLEAR
//localStorage.clear();
