/******************* MODEL ************************/

let modelController = (() => {
  //PRIVATE
  let counterone = 1;
  let countertwo = 1;

  //PUBLIC
  return {
    counterOne: () => {
      return counterone++;
    },

    counterTwo: () => {
      return countertwo++;
    },

    getCounterOne: () => {
      counterone = 0;
      return counterone;
    },
    getCounterTwo: () => {
      countertwo = 0;

      return countertwo;
    },
  };
})();

/******************* VIEW ************************/

let UIController = (() => {
  //PUBLIC
  return {
    displayOne: (count) => {
      document.querySelector(
        "#paragraph"
      ).innerHTML = `Button-One is clicked ${count} times`;
    },
    displayTwo: (count) => {
      document.querySelector(
        "#paragraph"
      ).innerHTML = `Button-Two is clicked ${count} times`;
    },
    reset: () => {
      document.querySelector("#paragraph").innerHTML = `counter reset`;
    },
  };
})();

/******************* CONTROLLER ************************/

let Controller = ((modelCtrl, UICtrl) => {
  document.querySelector("#btn-one").addEventListener("click", () => {
    //1. Add Click to model Controller
    let count = modelCtrl.counterOne();

    //2. Display in UI
    UICtrl.displayOne(count);
  });

  document.querySelector("#btn-two").addEventListener("click", () => {
    //1. Add Click to model Controller
    let count = modelCtrl.counterTwo();

    //2. Display in UI
    UICtrl.displayTwo(count);
  });

  document.querySelector("#btn-reset").addEventListener("click", () => {
    modelCtrl.getCounterOne();
    UICtrl.reset();

    modelCtrl.getCounterTwo();
    UICtrl.reset();
  });

  //PUBLIC
  return {
    publicTest: (a, b) => {
      console.log(add(a, b));
    },
  };
})(modelController, UIController);
