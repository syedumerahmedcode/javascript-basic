//text content
// nodeValue

const item = document.getElementById("special");
const value = item.nodeValue;
// This retuns null, I am not sure why?
console.log(value);
// This returns the correct value
console.log(item.firstChild.nodeValue);
