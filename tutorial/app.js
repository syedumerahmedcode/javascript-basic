/**
 * Web storage API - provided by browser
 * session storage, local storage
 * steItem, getItem, removeItem, clear
 * F12--> Application --> Local Storage
 *
 * localStorage.setItem("name", "John")
 * sessionStorage.setItem("name", "John")
 *
 * Session data - aviable till the browser is open
 * local data - Available from opening till closing of the browser
 */

// localStorage.setItem("name", "John");
// sessionStorage.setItem("name", "John");

localStorage.setItem("name", "John");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "Developer");
localStorage.setItem("address", "Street 123");

const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name");
const anotherName = localStorage.getItem("name");
console.log(anotherName);
localStorage.clear();
