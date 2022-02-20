/*
## Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. re-assign address to "first street" later
5. log all values in the console

*/

const firstName = "John";
const last_name = "Smith";
let address = "Main street 100";
address = "first street";
const postalCode = "12345";
const city = "Stockholm";

const street = "Upper street";
const country = "Sweden";
const fullMailingAddress = street + " " + country;
// Follolwing line shows how one can print multiple variable within the a single console log output.
console.log(
  "The Bio data is: " + firstName,
  last_name,
  address,
  postalCode,
  city
);
console.log("The full mailing address is: " + fullMailingAddress);
