/**
 * Local scope
 * cannot access from outside code block
 * if - NOT VAR
 */
let name = "bobo";

function calculate() {
  const name = "John";
  const age = 25;
  test = "global visible text";
}
calculate();
// age is not found as it test is a  is a s a local variable and
//hence it is out of scope here which results in an exception
console.log(age);
// Even though 'test' is defined within the function(),
// it does not have let or const in front of it
// Javascript interprets this as a global variable
// Strange,I know! but this is how JS works
console.log(test);

if (true) {
  const name = "John";
}
console.log(`My name is ${name}`);
