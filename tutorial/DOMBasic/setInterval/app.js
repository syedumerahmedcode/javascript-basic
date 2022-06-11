/**
 * setInterval - runs function repeatedly, after specific time intervals
 *
 * - pass function reference
 * - duration in ms (1000 ms = 1 sec)
 * - default 0, will cover more extensively in async/await section
 * - returns unique identifier
 * - clearInterval to cancel
 */

// pass arguments
function showScore(name, score) {
  console.log(`Hello ${name}. You score is ${score}.`);
}

const firstId = setInterval(showScore, 2000, "John", 65);
const secondId = setInterval(showScore, 2000, "Peter", 87);

console.log(firstId);
console.log(secondId);

clearInterval(firstId);
clearInterval(secondId);
