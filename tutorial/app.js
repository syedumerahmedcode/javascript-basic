/**
 * Powerful array methods
 * forEach, map, filetr, find, reduce
 * Iterate over array - no for loop required
 * Accept callback function as an argument,
 * call callback against each item in the array.
 * Reference Item in the callback parameter.
 */

/**
 * find
 * returns a single instance - (in this case object)
 * returns first match, if no match undefined
 * great for getting unique value
 */
const people = [
  { name: "Bob", age: 20, position: "developer", id: 1 },
  { name: "Peter", age: 25, position: "designer", id: 2 },
  { name: "Susy", age: 30, position: "the boss", id: 3 },
  { name: "Anna", age: 35, position: "the big boss", id: 4 },
];

const boss = people.find(function (person) {
  return person.position.includes("boss");
});
console.log(boss);

const personById4 = people.find(function (person) {
  return person.id === 4;
});
console.log(personById4);

const personUnknown = people.find(function (person) {
  return person.id === 344;
});
console.log(personUnknown);
