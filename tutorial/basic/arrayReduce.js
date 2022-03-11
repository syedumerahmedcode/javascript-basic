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
  { name: "Bob", age: 20, position: "developer", id: 1, salary: 1000 },
  { name: "Peter", age: 25, position: "designer", id: 2, salary: 3000 },
  { name: "Susy", age: 30, position: "the boss", id: 3, salary: 8000 },
  { name: "Anna", age: 35, position: "the big boss", id: 4, salary: 8000 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`current salary: ${currItem.salary}`);
  acc += currItem.salary;
  console.log(`acc: ${acc}`);
  return acc;
}, 0);
