// Javscript

//fetch call
/*

* fn() and call
* fetch(url)
* response.json()
* data
*/

const fetch = require("node-fetch");
const url = `https://reqres.in/api/users`;
const getData = (url) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .caztch((err) => console.log(err));
};

let result = getData(url);
console.log(result);

//
