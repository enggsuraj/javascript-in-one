const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
let arr = [];

btn.addEventListener("click", () => {
  arr.push(inp.value);
  getData();
});

function getData() {
  let timestamp;
  container.innerHTML = "";
  inp.value = "";
  arr.forEach((item) => {
    if (item.trim().length !== 0) {
      console.log(item);
      const box = document.createElement("div");
      box.classList.add("box");

      const para = document.createElement("p");
      para.innerText = item;

      const btn = document.createElement("button");
      btn.innerText = "X";
      btn.classList.add("btn");

      box.appendChild(para);
      box.appendChild(btn);
      container.appendChild(box);
      console.log(Math.floor(new Date().valueOf() * Math.random()));
    }
  });
}
