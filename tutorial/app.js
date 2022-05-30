/**
 * select element
 * addEventListener()
 * what event, what to do
 */

// Here we are selecting the elements
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

// define what to do
function changeColors() {
  console.log("hello");
  // Inthis method, we implement toggling functionality
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

// using addEventListener
// Here we also describe
// What event
btn.addEventListener("click", changeColors);
