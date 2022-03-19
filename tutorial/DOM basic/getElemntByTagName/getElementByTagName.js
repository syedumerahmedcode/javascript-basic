/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * getElementsByTagName('tagName')
 * HTMLCollection = array like object
 * index, length property but not array methods
 *
 * querySelectorAll() in most cases
 * NodeList - objects are collections of nodes
 * can run forEach()
 * turn them into array - spread operator
 * after that we can use any array properties
 *
 *
 */

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings);
// This will not work as there are only two h2 tags
// HTMLTableCaptionElement, it throws an error in console
// headings[3].style.color = "red";

const items = document.getElementsByTagName("li");

// This results in the following error:
// TypeError: items.forEach is not a function
// items.forEach(function (item) {});

const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});
console.log(items);
console.log(betterItems);
