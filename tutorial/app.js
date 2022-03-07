/**
 * Powerful array methods
 * forEach, map, filetr, find, reduce
 * Iterate over array - no for loop required
 * Accept callback function as an argument,
 * call callback against each item in the array.
 * Reference Item in the callback parameter.
 */

/**
 * map - does return a new array .
 * does not change size of original array.
 * uses values from original array when
 * making a new one.
 */
const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
  { name: "Anna", age: 35, position: "the big boss" },
];

const ages = people.map(function (person) {
  return person.age + 20;
});
console.log(ages);
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});
console.log(newPeople);
