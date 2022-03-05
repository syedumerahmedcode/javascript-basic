// Truthy and Falsy
// "", '', ``, , -, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = ""; // Blank spyce generates falsy. Read comments above for other conditions.

if (text) {
  console.log("Hey the value is Truthy!");
} else {
  console.log("The value is falsy");
}

if (bool1) {
  console.log("Hey it works!");
}
if (bool2) {
  console.log("Hey it also works...");
}
