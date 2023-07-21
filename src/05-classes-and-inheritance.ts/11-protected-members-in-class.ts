/**
 * Protected access modifier in a class
 * - outside the class - no access
 * - child class - yes access
 * - parent class - yes access
 */

class Person11 {
  // private name: string;
  protected name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // we can create a public method to get the name
  public getName() {
    return this.name;
  }
}

// let create a new admin class that extends person class
class Admin extends Person11 {
  // lets try to create a method that returns the name of the admin.
  public returnName() {
    // we will try to return a name which is a private member of the class
    return this.name;
  }
}
const admin11: Admin = new Admin("Mark", 42);

// because Admin class extends Person class we are able to set the name and age property using admin class. That is why because even though name propoerty is private, the child class can set it during the instantiation of the class.

let person11: Person11 = new Person11("John", 32);
console.log(person11);

person11.name = "Jack";
console.log(person11);
console.log(person11.getName());
console.log(admin11);
