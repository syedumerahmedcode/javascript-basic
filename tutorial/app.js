// switch case statements
// dice values: 1 - 6
// without break, all switch case below the matching criteria will be executed because of the fall through mechanism

const dice = 1;

switch (dice) {
  case 1:
    console.log("You got one");
    break;
  case 2:
    console.log("You got two");
    break;
  case 3:
    console.log("You got three");
    break;
  case 4:
    console.log("You got four");
    break;
  case 5:
    console.log("You got five");
    break;
  case 6:
    console.log("You got six");
    break;
  default:
    console.log("You did not roll the dice.");
    break;
}
