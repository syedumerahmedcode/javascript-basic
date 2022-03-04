/**
 *Null and undefined
 Both represent 'no value'

 undefined - javascript cannot find a value for this
Where can null happen?
 variable without value
 missing function arguments
 missing object properties

 null - developer sets the value
 */
let number = 20 + null; //20 + 0;
console.log(number); //20
let number2 = 20 + undefined; //20 + javascript cannot find the value;
console.log(number2); //NaN
