// Arrays, Functions and objects
// Arrays - [], zero based
const friend1 = "Anna";
const friend2 = "Anna";
const friend3 = "Anna";
const friend4 = "Anna";

// how to set up an array--->
const friends = ["john", "Susan", "peter", "Bob", 45, undefined, null];

let bestFriend = friends[3];

console.log(friends);

console.log("The first friend is: " + friends[0]);

console.log("The third value in the friend array is: " + friends[2]);

console.log("If I access index 13, I will get: " + friends[13]);

console.log("My best friend is: " + bestFriend);

friends[4] = "Anna";

console.log(friends);

console.log("My new firend is: " + friends[4]);
