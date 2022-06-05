/**
 * event object argument e,evt
 * info about triggered event
 * event.type
 * event.currentTarget
 * this keyword
 * preventDefault() - prevents default behavior
 */

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});
