/**
 * createElement('element')
 * createTextNode('text content')
 * element.appendChild(childElement)
 */

const result = document.querySelector("#result");
// Steps in creating an element and adding it to DOM attribute

// create empty element
const bodyDiv = document.createElement("div");

//create text node
const text = document.createTextNode("a simple body div");
// add text node to body so that it is visible
bodyDiv.appendChild(text);
// add bodydiv(containing text node) to the document
// so that it appears on the screen
document.body.appendChild(bodyDiv);
