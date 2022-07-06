let counter = 0;
const getData = () => {
  console.log("Fetching...", counter++);
};

/* 

Call getData
key pressed between two event > 300

*/

// DEBOUNCE FN
// only make call if difference between time interval between two fucntion call is grater than 300 ms.

const doSomeMagic = function (fn, d) {
  return function () {
    let timer;
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300);
