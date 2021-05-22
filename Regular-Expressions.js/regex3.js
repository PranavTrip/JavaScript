// Regular Expressions - Character Sets
let regex = /Hello/gi;
let str = "Hello world, helllo everyone out there";

regex = /H[a e i o u]llo/gi; //This character set allows any character from a,e,i,o,u, If any character is present in the string it will match!
console.log(regex.exec(str));
regex = /H[a e i o u]llo/gi;
let str1 = "Hallo world, hullo everyone out there";
console.log(regex.exec(str1));
console.log(regex.exec(str1));

regex = /H[0-9]llo/gi; // The range [0-9] allows any digit in the regular expression
str = "H9llo World";
console.log(regex.exec(str));

regex = /H[^e]llo/gi; // The excluding range[^e] will allow any character except e in the string to match with the regular expression
console.log(regex.exec(str));
