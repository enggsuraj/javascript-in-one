/* ******************** let & const ************************/

//ES6
{
    var str ="blogthorem"
    const id = 25
}

//console.log(str,id);
//Uncaught error: 

/* ******************** BLOCKS & IIFE ************************/

//ES5
(function(){
    console.log('Inside IIFE');
})();

//ES6
{
    const a = 1;
    let b = 2;
    console.log("This will be printed");
}

/* ******************** STRINGS ************************/

let firstName = 'blog'
let lastName = 'theorem'

//ES5
console.log("This is :"+firstName+' '+lastName);

//ES6
console.log(`This is :${firstName} ${lastName}`);

/* ******************** ARROW FUCNTIONS  ************************/

const printName = (name) =>{
    console.log(`Hello ${name}`)
}
printName('bogtheorem')

//CALLBACK
document.querySelector('add_btn').addEventListener('click',()=>{
    alert('Button clicked!!')
})

/* ******************** DESTRUCTURINGS ************************/

const [name,n] = ['blogtheorem',123]
const obj = {
    firstN:'blogtheorem',
    number:123
}

const {firstN,number} = obj