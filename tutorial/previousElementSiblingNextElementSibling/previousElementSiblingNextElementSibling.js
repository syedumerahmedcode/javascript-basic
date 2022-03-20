/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * previousElementSibling
 * nextElementSibiling
 */

/**
 * since we are searching for class=first,
 * hence, we give a '.'(dot) before the
 * class name
 */
const first = document.querySelector(".first");
console.log(first);
first.nextElementSibling.style.color = "red";

/**
 * since we are searching for id=last,
 * hence, we give a '#'(hashtag) before the
 * id
 */
const last = document.querySelector("#last");
console.log(last);
last.previousElementSibling.style.color = "blue";
