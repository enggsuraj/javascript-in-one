// STRING USEFUl

/*

trim()
split()
replace(/\s+/g, " ")

*/

let str = "   luffy   is   still joyboy  ";

function LastWordLength(str) {
  let data1 = str.trim();
  console.log(data1);
  //luffy   is   still joyboy

  let data2 = str.split("");
  console.log(data2);
  //[' ', ' ', ' ', 'l', 'u', 'f', 'f', 'y', ' ', ' ', ' ', 'i', 's', ' ', ' ', ' ', 's', 't', 'i', 'l', 'l', ' ', 'j', 'o', 'y', 'b', 'o', 'y', ' ', ' ']

  let data3 = str.trim().split(" ");
  console.log(data3);
  // ['luffy', '', '', 'is', '', '', 'still', 'joyboy']

  let data4 = str.replace(/\s+/g, " ").trim();
  console.log(data4);
  //luffy is still joyboy

  let data5 = str.replace(/\s+/g, " ").trim().split(" ");
  console.log(data5);
  //(4) ['luffy', 'is', 'still', 'joyboy']
}

LastWordLength(str);
