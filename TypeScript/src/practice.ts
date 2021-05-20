let numValue: number = 45;
let stringValue:string = 'Hello';

let newArr: number[] = [1,2,3]

interface myObjInterface {
    name: string;
    ID: number;
}


let myObj = {
    name: 'blogtheorem',
    ID:123
}

const getObjData = (myObj: myObjInterface) => {
    console.log(`${myObj.name} and ${myObj.ID}`)
}

getObjData(myObj);



// HEIGHT AND WIDTH OF IMAGE 
/* let img = new Image();
img.onload = function(){
    console.log(this.width, this.height)
} */

// SYNC HTTPS REQ - XMLHttpRequest

/* function httpGet(url){
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open();
    xmlHttpReq.send();

} */

/* let width = window.innerWidth;
let height = window.innerHeight; */

let d = true;
console.log(d? "Yes" : "No");

/* (function(){

})();

const objD = {
    prop: 100;
  };

  objD.freeze(objD)
   */

/* let strA = 'javascript typescript html css';

let x = strA.split(' ');
console.log(x);

x.forEach(each=>{
    let z = each.charAt(0).toUpperCase();
    console.log(z);

})
 */


