console.log("Objects in JavaScript");
// Objects in JS can be created using 2 methods:
// i) Using Literals
// ii) Using Constructor

// Using Literals
// Using Literals only one object can be created at a time so this method is sometimes inefficient
let myObj1 = {
  // This Object contains some information about a BOOK
  name: "General Physics",
  author: "I.E Irodov",
  published: 2020,
  description: "Unavailable",
};
console.log(myObj1);
console.log(myObj1.name);

console.log("********************************************************");
// Using Constructors
function objConst(name, author, published) {
  // This Object contains some information about BOOKS
  this.name = name;
  this.author = author;
  this.published = published;
}
// We just made a constructor for an obejct
// Create a new Object using this constructor
let book1 = new objConst("NCERT", "Unknown", 2021);
let book2 = new objConst("C for Everyone", "Yashwant Kanetkar", 2004);
console.log(book1);
console.log(book2);
