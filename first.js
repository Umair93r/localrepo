// function bankAccount() {
//   let balance = 1000;

// return{
//   deposit(amount){
//     balance += amount;
//     console.log(balance);
//   },

//   getBalance() {
//     console.log(balance);
//   }
  
// };

// }

// const amount = bankAccount();
// console.log(account.balance)

//----------------------------------------------------------------------//

// function init() {
//   var name = "Mozilla"; 
//   function displayName() {
//    console.log("too inner",name); 
//   }
//   displayName();
// }
// init();

// //-------------------------------------------------------------//

// function outer(){
//   let username = "umair"
//   console.log("outer" , secret)
//   function inner(){
//     let secret = "my123"
//     console.log("inner", username);
//   }
//   function innerTwo(){
//     console.log("innerTwo", username);
//     console.log(secret)
//   }
//   inner();
//   innerTwo();
// }
// outer();



//------------------------------------//

function adder(num) {
  function add(b) {
    console.log(num + b);
    
  }
  return add;
}

const addTo5 = adder (5);
const addTo10 = adder (10)

addTo5(2);
addTo10(10);

//-------------------------------------------------------------//


let username = "Umair" // global variable
let country = "india";

function outer(){
  let score = 10  // outer variable

  function inner (){
    console.log(score);
    console.log(username);
    
  }

  inner();
}

outer();

//------------------------------//



function outer() {

  let city = "pune";

  function inner() {
    console.log(country);
    console.log(city);
    
    
  }
  
  inner();
}

outer();