function greet(name) {
  return function(){
   console.log("hello " + name);
   
  }
    
  };
  greet("Umair")();

  //------------------------------------------//

  function createCounter(counter) {
    let count = 0;

    return function(){
       count++;
       console.log(count);
       
    };
  }

  const counter = createCounter();

  counter();