// Objects - key/value pairs methods
// dot notation

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 40,
  education: false,
  married: true,
  siblings: ["Alice", "Bob", "Carol"],
  greeting: function () {
    console.log("Hello, my name is John");
  },
};

console.log(
  "The name of the person is " + person.firstName + " " + person.lastName
);
const age = person.age;
console.log("The age of the person is " + age);
person.education = true;
const isPersonEducated = person.education;
console.log("Is the person educated: " + isPersonEducated);
console.log("Is person married: " + person.married);
console.log("The person has the following siblings: " + person.siblings);
person.greeting();
