// Sets in JS

// Defining the set
let mySet = new Set();
console.log(mySet);

// Adding some values to the set
mySet.add("Hello");
mySet.add("World");
console.log(mySet);

// Knowing the  size of set
console.log(mySet.size);

// Adding Hello one more time to the set but it will not show up because sets only show unique values
mySet.add("Hello");
console.log(mySet);

// Deleting Hello from the set
mySet.delete("Hello");
console.log(mySet);

// Checking if set has Hello or not
let res = mySet.has("Hello");
console.log(res);

// Printing the keys of set
console.log(mySet.keys());

// Printing the values of set
console.log(mySet.values());

// Printing the entries of set
console.log(mySet.entries());

// Clearing the set
mySet.clear();
console.log(mySet);
