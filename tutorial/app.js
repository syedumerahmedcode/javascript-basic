// Loops
// repeatedly run a block of code while the condition is true
// do while loop
// code block first, condition second
// runs at least once

let money = 0;

do {
  console.log("You have " + money + " dollars.");
  money++;
} while (money < 10);

// When with a false condition(money2<10 equals false), it gets executed at least once.
let money2 = 12;

do {
  console.log("You have " + money2 + " dollars.");
  money2++;
} while (money2 < 10);
