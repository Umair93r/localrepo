function greet(name) {
  return function () {
    console.log("hello " + name);
  };
}
greet("Umair")();

//------------------------------------------//

function createCounter(counter) {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter();

//----------------------------------------------//

function bank() {
  let balance = 100000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    },

    checkBalance() {
      console.log(balance);
    },
  };
}

const account = bank();

account.deposit(5000);
account.withdraw(2000);
account.checkBalance();



function isValidScheama(obj) {
  return obj;
}