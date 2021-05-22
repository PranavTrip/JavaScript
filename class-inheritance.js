// Inheritance is a simple OOPs concept which allows children to inherit properties from thier parents.
// A child class acquiring the properties of a parent class is known as Class Inheritance

// Create a PARENT class
class Employee {
  constructor(Name, Experience, Role) {
    this.name = Name;
    this.experience = Experience;
    this.role = Role;
  }
  //   Adding some functions
  slogan() {
    return "Welcome Employee";
  }
  joiningYear() {
    return 2021 - this.experience;
  }
   add(a, b) {
    return a + b;
  }
}

// Extending a class from the parent class - Inheritance
class Programmer extends Employee {
  constructor(Name, Experience, Role, Language) {
    super(Name, Experience, Role);
    this.langauage = Language;
  }
}

let Pranav=new Programmer('Pranav',3,'Developer','JavaScript'); 
console.log(Pranav);
console.log(Pranav.name);
console.log(Pranav.role);
console.log(Pranav.joiningYear());
console.log(Pranav.langauage);
console.log(Pranav.add(1,4));
