/**
 * select element
 * addEventListener()
 * what event, what to do
 */

// Here we are selecting the elements
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

// using addEventListener
// Here we also describe
// What event and what to do
btn.addEventListener("click", function () {
  console.log("Hey, you clicked the button.");
  heading.classList.add("red");
});
