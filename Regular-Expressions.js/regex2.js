// Regular Expressions - MetaCharacters
let regex = /He.lo/gi; //The '.' metacharacter allows any character in place of .
let str = "Hello world, hellllo everyone out there";
console.log(regex.exec(str));
regex = /Hel+o/gi; //The '+' metacharcter allows one or more occurence of the character before it
console.log(regex.exec(str));
console.log(regex.exec(str));
regex = /Hel*o/gi; //The '*' metacharacter allows zero or one occurence of the characcter before it
console.log(regex.exec(str));
regex = /Hell\&o/gi; //The '\' metacharacter allows the character after it to be the regular expression
console.log(regex.exec(str)); //This will return 'null' because there is no word like 'Hello&o' in the string
regex = /^H/gi; //The string should start with H to match the regular expression
console.log(regex.exec(str));
regex = /e$/gi; //The string should end with e to match the regular expression
console.log(regex.exec(str));
