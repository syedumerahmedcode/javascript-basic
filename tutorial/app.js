/**
 * JSON.stringify(), JSON.parse()
 */

const friends = ["john", "peter", "oliver"];

/**
 * We have to do it like this, otherwise the whole
 * array is converetd and treated as a string implicitly.
 */
localStorage.setItem("friends", JSON.stringify(friends));

/**
 * We need JSON.parse() method. Otherwise, the whole array
 * is treated as a string and we get the character present
 * at the index of the string, not the element of the array.
 */
const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[1]);
