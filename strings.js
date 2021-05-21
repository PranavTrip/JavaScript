// Strings in JavaScript

let str1 = "Pranav";
let str2 = "Tripathi";
// To get the character at the desired position
console.log(str1.charAt(2));

// Concatenating two strings
// There are two ways to concatenate strings in JS
console.log(str1 + str2);
let concatenatedString = str1.concat(str2);
console.log(concatenatedString);

// To search for the index of any character in the string
console.log(str1.indexOf("a", 0));

console.log(str2.lastIndexOf("h", str2.length));

// Slicing a string
let newString = str1.slice(0, 3);
console.log(newString);

// To get the length of the string
console.log(str1.length);
console.log(str2.length);

// Spliting a string
let splitString = str2.split("t", 4);
console.log(splitString);

// Returning a substring
console.log(str2.substring(3, 7));

// Converting the cases
let upString = str1.toUpperCase();
console.log(upString);
let lowerString = str2.toLowerCase();
console.log(lowerString);

// Searching for substring
console.log(str2.search("path"));

// Slicing string using SUBSTR method
let slicedString = str1.substr(0, 3);
console.log(slicedString);
