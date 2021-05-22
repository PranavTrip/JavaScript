// Regular Expressions in JS
// Defining a Regular Expression
let regex = /Hello/;
// There are two modifiers -
// g- global
// i- case insensitive
regex = /Hello/gi;
// This makes our expression global and case insensitive

// Let us create a string containing the word 'Hello' and one string without the word 'Hello'
let trueStr = "Hello World, hello everyone out there";
let falseStr = "How you all are doin... All Okay?";

// exec() function
console.log(regex.exec(trueStr)); //Gives the index of first Hello
console.log(regex.exec(trueStr)); //Gives the index of second hello
console.log(regex.exec(falseStr)); //Returns null because there is no hello in the string

// test() function
console.log(regex.test(trueStr)); //Returns True
console.log(regex.test(falseStr)); //Returns False

// match() function
console.log(trueStr.match(regex)); //Gives an array of all the matches of Hello in string
console.log(falseStr.match(regex)); //Returns null

// search() function
console.log(trueStr.search(regex)); //Returns 0 if match is found
console.log(falseStr.search(regex)); //returns -1 if match is not found

// replace() function
console.log(trueStr.replace(regex, "Hey!")); //Replaces every occurence of the word 'Hello' with 'Hey'
console.log(falseStr.replace(regex, "Hey!")); //Returns the original string
