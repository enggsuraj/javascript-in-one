// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log("err");
      } else {
        console.log(data);
      }
    });
  }
});

// Promise
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return "this is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise
const run = () =>
  new Promise((resolve, reject) => {
    resolve(setTimeout(1000));
  });

run()
  .then(() => {
    console.log("log after 1000 ms");
  })
  .catch((err) => {
    console.log(err);
  });

/******************************* */

// PROMISES

/*

let myPromise = new Promise((resolve, reject) => {
  let a = 1;
  if (a === 1) {
    resolve("success");
  } else {
    reject("failed");
  }
});

myPromise.then((message) => {
  console.log("Promise: " + message);
});
myPromise.catch((message) => {
  console.log("Error: " + message);
});

*/

let printName = (name) => {
  console.log(name);
};

printName("blogtheorem");
