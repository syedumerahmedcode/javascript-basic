// Arrays, Functions and objects
// Functions - declare, invoke
// return
// default undefined, shortcuts, ignores after...
// 1 inch = 2.54 cm
const wallHeight = 80;
const wallWidth = 100;

/**
 * NOTE: Please note that if a method does not have a return type specified, then all functions by default in javascript return undefined.
 * @param {Some value, in our case it is a int specifying inches.} value
 */
function calculate(value) {
  // If string is returned, the the console log for dimensions will contain the string specified in the return statement
  // return "Hello world";
  // Now the function is returned as a decimal number.
  return value * 2.54;
}
const width = calculate(wallWidth);
const height = calculate(wallHeight);
const dimensions = [width, height];
console.log(dimensions);
