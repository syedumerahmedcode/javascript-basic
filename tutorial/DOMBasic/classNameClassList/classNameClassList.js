/**
 * classname
 * classlist
 */
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
// console.log(classValue);

first.className = "colors text";
second.className = "colors";
// third.className = "text";
/**
 * NOTE:
 * className will always override the last class name
 * with the latest one.In other words, it can only hold
 * one class name at a time. In order to add more
 * class names in a DOM object, use classlist. Another
 * solution is to give spaces when giving class names.
 */

third.classList.add("text", "colors");
third.classList.remove("colors");
let result = third.classList.contains("text");
if (result) {
  console.log("It contains the class.");
} else {
  console.log("It doesnot contain the class.");
}

// third.classList.add("colors");
const classValueForThirdHeading = third.classList;
console.log(classValueForThirdHeading);
