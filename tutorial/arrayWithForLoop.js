// Arrays and for loops
const names = ["Adam", "Susy", "Bob"];
const lastName = "ShakeAndBake";
let newArray = [];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
