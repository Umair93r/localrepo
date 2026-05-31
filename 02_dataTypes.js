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



function greetUser(name) {
  return "Hello " + name + " how was your day!";
}

console.log(greetUser("umair"));






// 1. Declaring the function (Teaching JS how to do it)
function cookPizza(topping) {
  return "A delicious " + topping + " pizza is ready!";
}

// 2. Calling the function (Actually making the pizza)
let myDinner = cookPizza("pepperoni"); 

console.log(myDinner); // Output: A delicious pepperoni pizza is ready!


function myFunc(theObject) {
  theObject.make = "Toyota";
}
const myCar = {
  make : "honda",
  model : "Accord",
  year : 1999,
};

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);


//-------------------------------------Array-----------------------------//


let marks = [98, 76, 76, 93, 89, 23, 45,];

console.log(marks);

let heroes = ["umair", "umair2", "zaid", "zaid2"]
heroes [1];

// console.log(heroes);

let square = num => num * num;

console.log(square(5));


let timerId = setTimeout(() => {
  console.log("wake up to reality");
  
}, 5000);

setInterval(() => {
  console.log(`wake up to reality - ${new Date()}`);
}, 5000);