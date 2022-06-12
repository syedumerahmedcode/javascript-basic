/**
 * innerWidth - The read-only Windows property
 * The interior width of the Windows in pixels
 *
 * innerHeight - The read-only property of the Windows interface.
 * Returns the interior height of the Windows in pixels.
 *
 * The Element.getBoundingClientRect() method returns a DOMRect opbject
 * providing information about the size of an element and its position
 * relative to the viewport.
 *
 */

console.log("Height: " + window.innerHeight);
console.log("Width: " + window.innerWidth);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});
