
//Variables versus Constants
const PI = 3.14; 
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

//Type Coersion
const one = 1;
const two = '2';

let result = one * two;
console.log(result);


result = one * Number(two);
console.log(result);

//Scope
let global = "I am global";

function exampleFunction() {

    let block = "I am block level or local";
    console.log(block);
    console.log(global);

}

// console.log(block;) ---> This line would cast an error since the variable "block" is local to the function
exampleFunction();

