// Loops
// repeatedly run a block of code while the condition is true
// while loop

let amount = 10;
while (amount > 0) {
  console.log("I have " + amount + " dollars and I'm going to the mall");
  amount--;
  if (amount == 0) {
    console.log("I am broke as I have " + amount + " dollars");
  }
}
