// Try, Catch, Throw and Finally are some of the error handling methods in JS
// Try Block - executes when there is no error
try {
  console.log("It works without any error");
  // Throw block- throws a new error
  throw new Error("404");
  console.log("It will not work because of the error thrown in previous line");
} catch (error) {
  // Catch Block - handles the error
  console.log("The error has been handled");
} finally {
  // Finally Block - Runs once irrespective of errors
  console.log("All Tasks Done");
}
