// variable lookup
// {} - code look up

const globalNumber = 5;

function add(num1, num2) {
  /**
   * The way JS works is that it looks up a variable in the
   * local scope first, then in the global scope. That means
   * if const globalNumber = 20;is commented in, it is
   * given precedence by JS
   */
  //const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
