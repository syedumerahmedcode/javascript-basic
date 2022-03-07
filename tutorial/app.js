/**
 * Powerful array methods
 * forEach, map, filetr, find, reduce
 * Iterate over array - no for loop required
 * Accept callback function as an argument,
 * call callback against each item in the array.
 * Reference Item in the callback parameter.
 */

/**
 * filter - does return a new array .
 * Can manipulate the size of the array
 * returns based on condition
 */
const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
  { name: "Anna", age: 35, position: "the big boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const leadershipTeam = people.filter(function (person) {
  return person.position.includes("boss");
});
console.log(leadershipTeam);
