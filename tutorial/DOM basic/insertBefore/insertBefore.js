/**
 * createElement('element')
 * createTextNode('text content')
 * element.appendChild(childElement)
 *
 * insertElement('element', 'location')
 */

const result = document.querySelector("#result");
// Steps in creating an element and adding it to DOM attribute

// create empty element
const bodyDiv = document.createElement("div");

//create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
console.log(result.children);
document.body.insertBefore(bodyDiv, result);
