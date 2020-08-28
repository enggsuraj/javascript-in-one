const printName = (name) => {
  console.log(`Hello ${name}`);
};
printName("blogtheorem");

//CALLBACK
document.querySelector("add_btn").addEventListener("click", () => {
  alert("Button clicked!!");
});
