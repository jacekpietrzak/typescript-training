// this keyword in classes
// lets try to make nam and email dynamic by populating properties with arguments.
class PersonClass3 {
  name: string; // is equal this.name. from "this" class give me the "name" property
  email: string; // is equal this.email

  constructor(nameParam: string, emailParam: string) {
    // this name and email are only available inside constructor function. To assing values to name and email properties we need to use "this" keyword. this keyword inside the class refers to all the properties inside class. "this" refers to the class it is in.
    this.name = nameParam;
    this.email = emailParam;
  }

  greet() {
    return `Hello ${this.name}`; // we can declare a method in the class. Whenever you declare a method in the class you dont use a function keyword.
  }
}

const personObject3 = new PersonClass3("Jacek", "jacek@mail.com");
const personObject4 = new PersonClass3("Madzia", "madzia@mail.com");

console.log(personObject3.greet(), personObject3);
console.log(personObject4.greet(), personObject4);

// our class is now fully dynamic and is generating based on arguments that we are passing to the class while instantiating the class.
