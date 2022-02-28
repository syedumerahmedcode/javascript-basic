// String properties and methods
// wrapper String object, don't memorize methods

let text = "John Smith        ";
let result = text.length;
console.log("The number of characters in the name are: " + result);
console.log(text.toLocaleUpperCase());
console.log(text.charAt(0));

const person = {
  name: "John", // property
  greeting() {
    // method
    console.log("Hey, I am John");
  },
};

console.log(person);
console.log(person.name);
person.greeting();
