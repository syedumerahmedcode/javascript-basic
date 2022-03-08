/**
 * Powerful array methods
 * forEach, map, filetr, find, reduce
 * Iterate over array - no for loop required
 * Accept callback function as an argument,
 * call callback against each item in the array.
 * Reference Item in the callback parameter.
 */

/**
 * reduce
 * iterates, callback function
 * reduces to a single value - number, array, object
 * 1 parameter ('acc') - total of all calculations
 * 2 parameter ('curr') - current iteration/value
 */
const people = [
  { name: "Bob", age: 20, position: "developer", id: 1 },
  { name: "Peter", age: 25, position: "designer", id: 2 },
  { name: "Susy", age: 30, position: "the boss", id: 3 },
  { name: "Anna", age: 35, position: "the big boss", id: 4 },
];

//const boss = people.reduce
console.log(boss);

const personById4 = people.find(function (person) {
  return person.id === 4;
});
console.log(personById4);

const personUnknown = people.find(function (person) {
  return person.id === 344;
});
console.log(personUnknown);
