/**
 * Reference vs value
 * Primitive data types
 * String, Number, Symbol, Boolean, Undefined, Null
 * Arrays, Functions, Objects = objects
 * typeof
 *
 * when assigning primitive data type to a variable,
 * any changes are made directly to that value,
 * without affecting original value.
 *
 * when assigning non-primitive data type to a variable,
 * is done by reference so any changes will affect all the references.
 *
 */
const number = 1;
let number2 = number;
number2 = 7;
console.log(`The first number is ${number}`);
console.log(`The second number is ${number2}`);
