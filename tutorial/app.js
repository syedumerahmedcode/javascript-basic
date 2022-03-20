/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * previousSibling
 * nextSibiling
 * return whitespace
 */

/**
 * since we are searching for class=first,
 * hence, we give a '.'(dot) before the
 * class name
 */
const first = document.querySelector(".first");
console.log(first);
const whitespace = first.nextSibling;
console.log(whitespace);
const second = (first.nextSibling.nextSibling.style.color = "red");
console.log(second);

/**
 * since we are searching for id=last,
 * hence, we give a '#'(hashtag) before the
 * id
 */
const last = document.querySelector("#last");
console.log(last);
const anotherWhitespace = last.previousSibling;
console.log(anotherWhitespace);
const secondLast = (last.previousSibling.previousSibling.style.color = "blue");
console.log(secondLast);
