let user = {
  username: "suraj",
  fn1: () => {
    console.log(this.username);
  },
  fn2() {
    console.log(this.username);
  },
};

user.fn1(); // undefined
user.fn2(); // suraj
