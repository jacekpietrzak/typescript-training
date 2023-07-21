// Creating first class
// All class names starts with a capital letter.
class Person2 {
  name = "John"; // we assign a property of this class "name" with a value "John"
  email = "john@mail.com";
  greet() {
    return `Hello ${this.name}`; // we can declare a method in the class. Whenever you declare a method in the class you dont use a function keyword.
  }
}

// How do we create an object person from this class?
// The whole purpose of this class is to help us generate the person object whenever we want.
