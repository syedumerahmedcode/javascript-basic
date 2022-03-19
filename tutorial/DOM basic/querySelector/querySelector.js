/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * querySelector('any css'): selects single
 * querySelectorAll('any css'): selects all
 */
// here # refers to a css object
const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const items = document.querySelectorAll(".special");
items.forEach(function (item) {
  console.log("Inside for each: " + item);
});
// console.log(items);

const lastItem = document.querySelector("li:last-child");
console.log(lastItem);
