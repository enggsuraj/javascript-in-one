const fetch = require("node-fetch");

url = "https://reqres.in/api/users";

const getData = () => {
  fetch(url)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.data[0].email);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

/********************** ASYNC ***************************** */

const getdataAW = (async = () => {
  fetch(url)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.data[0].email);
    })
    .catch((error) => {
      console.log(error);
    });
});

getdataAW();

/********************** IIFE ASYNC ***************************** */

(async () => {
  console.log("INSIDE IIFE");
})();

// *******************************  ASYNC AWAIT FETCH

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData();
