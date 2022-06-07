/**
 * allows select dynamic events
 * event propogation - order the elements are fired
 * event bubbling - clicked element first then bubbles up -- default
 * event capturing - fires at the root and fires until reaches target
 */
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  //   console.log("Target", e.target);
  //   if (e.target.classList.contains("link")) {
  //     console.log("You clicked on the link");
  //   }
}

function stopPropagation(e) {
  console.log("You clicked the link");
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
