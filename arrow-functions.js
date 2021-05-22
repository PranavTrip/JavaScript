// Arrow Functions are modern way of writing functions in JS

// Old Way
function add(x, y) {
  console.log("The nunbers were added");
  return x + y;
}
console.log(add(1, 2));

// Using Arrow Functions
let multiplication = (a, b) => {
  console.log("Multiplied");
  return a * b;
};

console.log(multiplication(12, 12));
