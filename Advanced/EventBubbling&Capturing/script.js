document.querySelector(".grandparent1").addEventListener("click", () => {
  console.log("GrandParent 1");
});

document.querySelector(".parent1").addEventListener("click", () => {
  console.log("Parent 1");
});

document.querySelector(".child1").addEventListener("click", () => {
  console.log("Child 1");
});

// CAPTURING EVENT
// true - capturing, false - bubbling

document.querySelector(".grandparent2").addEventListener(
  "click",
  () => {
    console.log("GrandParent 2");
  },
  true
);

document.querySelector(".parent2").addEventListener(
  "click",
  () => {
    console.log("Parent 2");
  },
  true
);

document.querySelector(".child2").addEventListener(
  "click",
  () => {
    console.log("Child 2");
  },
  true
);

// STOP PROPOGATION

document.querySelector(".grandparent3").addEventListener(
  "click",
  () => {
    console.log("GrandParent 3");
  },
  false
);

document.querySelector(".parent3").addEventListener(
  "click",
  () => {
    console.log("Parent 3");
  },
  false
);

document.querySelector(".child3").addEventListener(
  "click",
  (e) => {
    console.log("Child 3");
    e.stopPropagation();
  },
  false
);
