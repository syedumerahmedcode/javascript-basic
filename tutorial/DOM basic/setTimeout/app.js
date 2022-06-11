/**
 * setTimeout - runs function once after a specific time
 *
 * - pass function reference
 * - duration in ms (1000 ms = 1 sec)
 * - default 0, will cover more extensively in async/await section
 * - returns unique identifier
 * - clearTimeout to cancel
 * - on window object
 */
function sayHello() {
  console.log("Hello John");
}

setTimeout(sayHello, 5000);

// Will not work since this is a function call, not a function reference
// hence, the method is called instantaneously.
setTimeout(sayHello(), 5000);

// alternative approach, ES6Script
// setTimeout(function () {
//   console.log("Hello John");
// }, 5000);

// pass arguments
function showScore(name, score) {
  console.log(`Hello ${name}. You score is ${score}.`);
}

const firstId = setTimeout(showScore, 2000, "John", 65);
const secondId = setTimeout(showScore, 2000, "Peter", 87);

console.log(firstId);
console.log(secondId);

clearTimeout(firstId);
