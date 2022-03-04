// Functions return if array for loop
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculate(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i];
  }
  if (total > 100) {
    console.log("Whoa! You are spending way too much.");
    return total;
  }
  console.log("You are good! You are spending less than 100.");
  return total;
}

const gasTotal = calculate(gas);
const foodTotal = calculate(food);
const randomTotal = calculate([200, 4000, 500, 1]);
// console.log("The total for gas is " + gasTotal);
// console.log("The total for food is " + foodTotal);
// console.log("The total for randam array is " + randomTotal);
// console.log("The total for randam array is " + randomTotal);
// Or a more interesting way of doing console log together
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
