// Arrays propertoes and methods
let names = ["Alice", "Bob", "Olga", "John"];
//length
console.log(names.length);

//concat
const lastNames = ["Pepper", "onion", "Banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

//unshift - adds to the beginning of the array
allNames.unshift("Susy");
console.log(allNames);

//shift - removes to the beginning of the array
allNames.shift();
console.log(allNames);

//push - adds to the end of the array
allNames.push("Susy");
console.log(allNames);

//pop - removes to the end of the array
allNames.pop();
console.log(allNames);

//splice - mutates original array
const specificNames = allNames.splice(2, 1);
console.log(allNames);
console.log(specificNames);
