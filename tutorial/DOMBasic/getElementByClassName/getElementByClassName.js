/**
 * Select the element or the group of elements that we want
 * Decide the effect that we want to apply to the collection
 *
 * getElementsByClassName('className')
 *
 * HTMLCollection
 *
 */
const special = document.getElementsByClassName("special");
special[2].style.color = "blue";
console.log(special);
