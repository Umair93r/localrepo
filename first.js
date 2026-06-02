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

function init() {
  var name = "Mozilla"; 
  function displayName() {
   console.log("too inner",name); 
  }
  displayName();
}
init();

//-------------------------------------------------------------//

function outer(){
  let username = "umair";
  console.log("outer" , secret)
  function inner(){
    let secret = "my123"
    console.log("inner", username);
  }
  function innerTwo(){
    console.log("innerTwo", username);
    console.log(secret)
  }
  inner();
  innerTwo();
}
outer();