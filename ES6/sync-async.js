

//SYNCHRONOUS CODE

let third = ()=>{
    console.log('Third');
}

let second = ()=>{
    console.log('second');
}

let first = ()=>{
    console.log('first');
    second();
    third();
}

//first();

/*

first
second
Third

*/

//ASYNCHRONOUS

let thirdA = ()=>{
    setTimeout(()=>{
        console.log('third');
    },5000);
}

let secondA = ()=>{
    setTimeout(()=>{
        console.log('second');
    },5000);
}

let firstA = ()=>{
    console.log('first');
    secondA();
    console.log('Hello');
    thirdA();
}

firstA();
console.log('End');


/*
first
Hello
End
second //after 5 sec
third //after 5 sec

*/

