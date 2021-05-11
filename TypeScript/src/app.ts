//1. TYPE BASICS
let num:number = 45;
let str:string = 'TypeScript';
let isCoding:boolean = true;

const getName = (name:string) => {
    return `Name is ${name}`;
}
getName("suraj")

//2. ARRAY 

let arr_1:number[] = [1,2,3,4,5]
arr_1.push(6);

let arr_2: string[] = ['a','b','c'];
arr_2.push('d');

let arr_3: (string | number | boolean)[] = []

// 3. OBJECTS

interface objInterface {
    name:string,
    ID:number
}

let obj = {
    name:'Suraj',
    ID:123
}

const getDetails = (obj: objInterface) => {
    return `Name: ${obj.name} and ID : ${obj.ID}`
}

getDetails(obj)







//2. 
const getData = async() => {
    const response = await fetch('https://testimonialapi.toolcarton.com/api/1');
    const data = response.json();
    return data;
}

getData()
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})
