// Arrays in JavaScript
let arr1 = [2, 3, 1, 56, 21, 32, 100, 55, 45, 34, 43];
// let arr2 = new Array(5);
let arr2 = ["new", "old", "oldest", "latest"];

// Length of an array
console.log("Length of array 1 is " + arr1.length);
console.log("Length of array 2 is " + arr2.length);

// Searching an element
console.log(arr1.indexOf(56));

// Sorting an array
// Sorting in Ascending order
let sortedArray = arr1.sort((a, b) => a - b);
console.log(sortedArray);
// Sorting in Desceding order
let sortedArray2 = arr1.sort((a, b) => b - a);
console.log(sortedArray2);

// Reversing an array
let reversedArray = arr1.reverse();
console.log(reversedArray);

// Concatenating two arrays
let concatenatedArray = arr1.concat(arr2);
console.log(concatenatedArray);

// Inserting an element in an array
// Inserting an element at the end of an array
let newArr = arr2.push("Fruits");
console.log(arr2);
// Inserting at the beginning of an array
let newArr1 = arr1.unshift("Fruits");
console.log(arr1);

// Deleting an element from an array
// Deleting from last
let newArr3 = arr2.pop();
console.log(arr2);
// Deleting from beginning
let newArr4 = arr1.shift();
console.log(arr1);

// Splicing in an array
let splicedArray = arr1.splice(56);
console.log(arr1);
