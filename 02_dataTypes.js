"use strict" // 

// alert("welcom");

const name = "umair";
let age = 20;
let isLoggedIn = false;

console.log(typeof isLoggedIn);



 let score = "33abc"

let valueInNumber = Number(score);
console.log(valueInNumber);

//---------------------------------------//


let f = 234;
let g = 234;


// console.log("f = ",f, "& b = ",g);
// console.log("f + g" , f+ g);


console.log("f++ =", f++);
console.log("f = " , f);

//----------------------------------Functions------------------------------//


function greet(name) {
  return "Hello " + name;
  
}

console.log(greet("Umair"));



function login(welcom) {
  return "your " + welcom ; 
}

console.log(login("Welcom"));



// function add_01(a, b) {
//   return a + b ;
  
// }
// let result = add(5, 3);

// console.log(result);



const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4,5));




const add = (a, b) => {
  return a / b;
};
 console.log(add(4, 3));
 



 function calculateBill(price, tax) {
  return price + (price * tax / 100);
  
}
 
let finalBill = calculateBill(1000, 18);

console.log(finalBill);



function isEven(num) {
  return num % 5 === 0;
  
}
 console.log(isEven(5));
 


 function largest(a, b) {
  return a > b ? a : b;
  
 }
 console.log(largest(23 , 56));
 

 

function reverse(uamir) {
  return "umair".split("").reverse().join("");
  
} 
console.log(reverse());


function reverse_2(password) {
  return "password".split("").reverse().join("");
  
}
console.log(reverse_2());
