// Regular Expressions - Character Classes
// /d - A Digit
// /D - Not a Digit
// /w - A Word
// /W - Not a Word
// /s - WhiteSpace,Tabs,NewLine
// /S - Not a WhiteSpace,Tabs,NewLine

let regex = /He\dllo/;
let str = "He1llo World";
console.log(regex.exec(str));
regex = /He\Dllo/;
console.log(resizeBy.exec(str));
regex = /He\sllo/;
str = "Hello World";
console.log(regex.exec(str));
