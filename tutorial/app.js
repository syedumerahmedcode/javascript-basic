/**
 * Powerful array methods
 * forEach, map, filetr, find, reduce
 * Iterate over array - no for loop required
 * Accept callback function as an argument,
 * call callback against each item in the array.
 * Reference Item in the callback parameter.
 */
/**
 * forEach
 * does not return new array
 */

const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
];
/**
 * Callback function which is called from forEach() function.
 * @param {Person Object} person
 */
function showPerson(person) {
  console.log(person.position.toUpperCase());
}

/**
 * ForEach is a higher order function that accepts a callback
 * function --> which we defined in your javascript file.
 */
people.forEach(showPerson);

/**
 * forEach() used via anonymous function.
 */
people.forEach(function (item) {
  console.log(item.age + 10);
});
