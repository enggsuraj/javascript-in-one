// https://api.github.com/users

/* 

X Fetch API
X Display
X Search fn (filter) and display - full search or while searching 

*/

const container = document.querySelector(".container");
const URL = "https://api.github.com/users";
const arr = [];

// DISPLAY DATA
const displayData = (data) => {
  arr.push(data);
  console.log(data);
  container.innerHTML = "";

  data.forEach((each) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src=${each.avatar_url} alt="">
    <p id="title">${each.login}</p>`;
    container.appendChild(box);
  });
};

// FETCHDATA
const getMovieData = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
};

getMovieData(URL);

// SEARCH
let inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btn");

const filterData = (data) => {
  console.log(data, arr);
  let finalArr = arr[0].filter((each) => each.login.includes(data));
  console.log(finalArr);
  displayData(finalArr);
};

btn.addEventListener("click", (e) => {
  filterData(inputValue.value);
});
