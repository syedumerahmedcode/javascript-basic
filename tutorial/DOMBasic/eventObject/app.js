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
const link = document.getElementById("link");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (event) {
  console.log(event.currentTarget);
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

function somefunc(e) {
  e.preventDefault();
}

link.addEventListener("click", somefunc);
