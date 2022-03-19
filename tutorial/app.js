/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * childNodes - returns all child nodes including whitespace
 * which is treated as a text node
 *
 * children, firstChild, lastChild
 */

const result = document.querySelector("#result");
// console.log(result);
// returns everything including whitespaces which is treated as a node
const allChildren = result.childNodes;
// console.log(allChildren);
const children = result.children;
// console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);
