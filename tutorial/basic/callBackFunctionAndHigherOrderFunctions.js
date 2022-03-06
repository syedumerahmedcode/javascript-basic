function morning(name) {
  return `Good morning ${name}`;
}

/**
 * This is a callback function.
 * @param {String name of the person} name
 * @returns
 */
function evening(name) {
  return `Good evening ${name}`;
}
/**
 * This is an example of a higher order function.
 * One can made their code mroe flexible by using
 * higher order functions.
 * @param {String} name
 * @param {CallBackFunction} cbTimeOfDay
 */
function greet(name, cbTimeOfDay) {
  cbTimeOfDay();
  const myName = "John";
  console.log(`${cbTimeOfDay(name)}. My name is ${myName}`);
}
/**
 * We just pass the callback function in a higher order function
 * WITHOUT invoking them. Otherwise, it will be just like a
 * normal function call.
 */
greet("Bobo", morning);
greet("peter", evening);
/**
 * Callback functions, higher order functions, Functions as first
 * class objects/citizens
 *
 * Functions are first class objects - stored in a variable
 * (expression), passed as an argument to another function,
 * return from a function (closure)
 *
 * Higher order functions - accepts another function as an
 * argument or returns another function as a result
 *
 * Callback functions - passed to another function as an
 * argument and executed inside that function
 *
 */
