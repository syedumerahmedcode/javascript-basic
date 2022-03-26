/**
 * classname
 * classlist
 */
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
console.log(classValue);

second.className = "colors";
third.className = "text";
/**
 * NOTE:
 * className will always override the last class name
 * with the latest one.In other words, it can only hold
 * one class name at a time. In order to add more
 * class names in a DOM object, use classlist
 */
