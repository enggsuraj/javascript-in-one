//OBJECT
let obj = {
  name: "corona",
  id: 19,
  precautions: ["🙏", "🧼", "😷"],
  isPandemic: true,
  message: function () {
    console.log(`Stay Safe`);
  },
};

obj.message();

//OBJECT REFERENCES
// Both logs print  things
let myAccount = {
  name: "John Dev",
  expenses: 0,
  income: 0,
};
let addExpense = function (account, amount) {
  account = {};
  account.age = 1;
  console.log(account);
};
addExpense(myAccount, 2000);
console.log(myAccount);
