// Maps in JavaScript

// Creating a new MAP
let myMap = new Map();

// Defining keys
const key1 = "myStr",
  key2 = {},
  key3 = function () {};
console.log(myMap);

// Setting the keys in the Map
myMap.set(key1, "This is a string");
myMap.set(key2, "This is an object");
myMap.set(key3, "This is an empty function");

// Size of the Map
console.log(myMap.size);
console.log(myMap);

// Getting the values in the Map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1, value2, value3);

// Deleting key3 from Map
myMap.delete(key3);
console.log(myMap);

// Checking if the Map has key3 or not
let res = myMap.has(key3);
console.log(res);

// Printing the keys of map
console.log("Keys in Map are :", myMap.keys());

// Printing the values of the map
console.log("Values in Map are: ", myMap.values());

// Printing the entries of the map
console.log("Entries of the Map are: ", myMap.entries());
