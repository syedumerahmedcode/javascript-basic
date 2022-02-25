// Assigning a function to a variable instead of its value.

function calculate(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
const firstValue = calculate(3, 4);
const secondValue = calculate(10, 36);

// function expression
const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
// How to use a function expression
const thirdValue = add(3, 4);
const fourthValue = add(10, 36);
const values = [firstValue, secondValue, thirdValue, fourthValue];

console.log(values);
