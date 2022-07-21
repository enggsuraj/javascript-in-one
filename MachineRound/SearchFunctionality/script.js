// https://fakestoreapi.com/products

/* 

X Fetch API
X Display
X Search fn (filter) and display - full search & while searching 

*/

const container = document.querySelector(".container");
const URL = "https://fakestoreapi.com/products";
const arr = [];

// SEARCH
let inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btn");
let mensclothing_btn = document.getElementById("mensclothing");
let electronics_btn = document.getElementById("electronics");
let jewelery_btn = document.getElementById("jewelery");

// FETCHDATA
{
  if (arr.length === 0) {
    container.innerHTML = "Loading...";
  }
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

// DISPLAY DATA
const displayData = (data) => {
  arr.push(data);
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = "No Item :(";
  }

  data.forEach((each) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src=${each.image} alt="">
    <p id="title">${each.title}</p>`;
    container.appendChild(box);
  });
};

// FILTER DATA
const filterData = (data) => {
  let finalArr = arr[0].filter((each) =>
    each.title.toLowerCase().includes(data)
  );
  displayData(finalArr);
};

btn.addEventListener("click", () => {
  filterData(inputValue.value);
});

// MENS CLOTHING
const filterDataClothing = (data) => {
  let finalArr = arr[0].filter((each) =>
    each.category.toLowerCase().includes(data)
  );
  displayData(finalArr);
};

mensclothing_btn.addEventListener("click", () => {
  filterDataClothing(`men's clothing`);
});

// ELECTRONICS
const filterDataElectronics = (data) => {
  let finalArr = arr[0].filter((each) =>
    each.category.toLowerCase().includes(data)
  );
  displayData(finalArr);
};

electronics_btn.addEventListener("click", () => {
  filterDataElectronics(`electronics`);
});

// ELECTRONICS
const filterDataJewelery = (data) => {
  let finalArr = arr[0].filter((each) =>
    each.category.toLowerCase().includes(data)
  );
  displayData(finalArr);
};

jewelery_btn.addEventListener("click", () => {
  filterDataJewelery(`jewelery`);
});
