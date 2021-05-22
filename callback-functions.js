// Callback functions in JavaScript
// Firstly we will write a function named DISPLAY
function display() {
  console.log("Numbers Added");
}

// Another function named ADDITION
function addition(x, y, callback) {
  setTimeout(() => {
    console.log(`The sum of ${x} and ${y} is ${x + y}`);
    callback();
  }, 2000);
}
addition(5, 10, display);
// Even after the DISPLAY function is executed first but it waits for the ADDITION function to get executed because of the callback argument that is passed in the ADDITION function
