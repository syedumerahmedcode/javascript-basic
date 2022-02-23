// Arrays, Functions and objects
// Functions - declare, invoke
// params - when declare/define placeholders, local vars
// arguments -when invole/call/run use var/values, multiple params, undefined

/**
 * This is function declaration.
 */
function hello(personName) {
  // logic
  console.log("Hello there, " + personName);
}
/**
 * This is function invocation
 */
// greet Bob
hello("Bob");
// greet Anna
hello("Anna");
// greet Susy
hello("Susy");
// The following thing prints undefined in console log if no argument is passed.
hello();
