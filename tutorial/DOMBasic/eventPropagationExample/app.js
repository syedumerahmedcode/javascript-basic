/**
 * allows select dynamic events
 * event propogation - order the elements are fired
 * event bubbling - clicked element first then bubbles up -- default
 */

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const heading = document.querySelector(".heading");

function sayHello() {
  console.log("Hello there.");
}

const click = "click";
btn.addEventListener(click, function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = "This is coming from heading";
  container.appendChild(element);
});

heading.addEventListener(click, sayHello);
