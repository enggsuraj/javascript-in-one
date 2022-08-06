let str = "luffy is still joyboy";

function LastWordLength(str) {
  let data = str.trim().split(" ");
  let result = data[data.length - 1];
  return result.length;
}

console.log(LastWordLength(str));
