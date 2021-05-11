const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector(".submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    username: username.value,
    password: password.value,
  };
  //console.log(obj);

  localStorage.setItem("cred", JSON.stringify(obj));
  sessionStorage.setItem("cred", JSON.stringify(obj));
  document.cookie = `onj=obj`;

  console.log(document.cookie);
});
