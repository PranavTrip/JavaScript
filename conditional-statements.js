// Conditional Statements in JavaScript comprises of : If, If-else-If, If-else, Switch
// If, If-else, If-else-If

let age = 13;
let name = "Pranav";
let favNum = "007";

// == operator is used to compare only values
// === operator is used to compare both value and type

if (age >= 18 && age <= 90) {
  console.log("Eligible for voting");
} else if (favNum === "007") {
  console.log("Matched");
} else if (favNum == 007) {
  console.log("Matched but different type");
} else {
  console.log(`The name is ${name}`);
}
