let name = "  John Dev ";

// Length property
console.log(name.length); //11

// Convert to upper case
console.log(name.toUpperCase()); //JOHN DEV

// Convert to lower case
console.log(name.toLowerCase()); //john dev

// Includes method
let password = "abc123asdf098";
console.log(password.includes("password")); //false

// Trim
console.log(name.trim()); //John Dev

// isValidPassword
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp")); //false
console.log(isValidPassword("abc123!@#$%^&")); //true
console.log(isValidPassword("asdfpasdfpoijpassword")); //false
