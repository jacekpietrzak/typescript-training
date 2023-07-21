// Constructor functions in classes
// we will learn about special function that every calss has. Constructor function. Special thing about constructor is that it fires every time class is instantiated. Constructor also lets us assing parameters to it which we can use while we create a new instance of this class. In our example we can accept name and email values as a parameters in our constructor function to make them dynamic.
// Here is how we can declere constructor function in our class.
class PersonClass2 {
  name = "John";
  email = "email";

  constructor(name: string, email: string) {
    console.log("name: " + name);
    console.log("email: " + email); // we can see that the constructor is logging our parameters in the console log.
  }

  greet() {
    return `Hello ${this.name}`; // we can declare a method in the class. Whenever you declare a method in the class you dont use a function keyword.
  }
}

const personObject = new PersonClass2("Jacek", "jacek@mail.com");
const personObject2 = new PersonClass2("Madzia", "madzia@mail.com");
