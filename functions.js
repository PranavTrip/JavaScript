// Functions in JavaScript

// A function may take some arguments and may not take some arguments

// A function without arguments
function hello() {
  console.log("This is a function which is not taking any argument");
  console.log("HELLO !");
}

console.log(hello()); //Calling the hello() function

// A function with arguments
// A function which take arguments may or may not return a value
// A function can return a only a single value at a time

let a;
let b;
let c;
function add(a, b) {
  console.log("This function adds two values passed to it");
  return a + b;
}

c = add(21, 22);
console.log(c);
