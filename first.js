function bankAccount() {
  let balance = 1000;

return{
  deposit(amount){
    balance += amount;
    console.log(balance);
  },

  getBalance() {
    console.log(balance);
  }
  
};

}

const amount = bankAccount();
console.log(account.balance)

//----------------------------------------------------------------------//

function init() {
  var name = "Mozilla"; 
  function displayName() {
   
    console.log(name); 
  }
  displayName();
}
init();