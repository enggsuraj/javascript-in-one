/******************************* ASYNC ****************************************/

//1.
async function getData() {
  console.log("Async getData log");
}
getData();

//2.
const getDataAW = (async = () => {
  console.log("Arrow Function Async");
});
getDataAW();

//3.
(async () => {
  console.log("INSIDE IIFE");
})();

//4.
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  data = await getDataPromise(data);
  return data;
};

processData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
