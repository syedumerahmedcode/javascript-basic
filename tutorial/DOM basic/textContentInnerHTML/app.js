/**
 * innerHTML
 * textContent
 */

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
// console.log("test");
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = "random value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
            <li>list item additional 1</li> <li>list item additional 2</li>`;
document.body.appendChild(ul);
// console.log(ul.innerHTML);
