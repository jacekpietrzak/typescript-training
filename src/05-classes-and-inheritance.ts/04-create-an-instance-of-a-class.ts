// Create an instance of a class
class PersonClass {
  name = "John"; // we assign a property of this class "name" with a value "John"
  email = "john@mail.com";
  greet() {
    return `Hello ${this.name}`; // we can declare a method in the class. Whenever you declare a method in the class you dont use a function keyword.
  }
}

// Lets create new person object using Person class

const person6 = new PersonClass(); // we declare person variable and we want this variable to hold an object for us creted from on PersonClass class. We use the "new" keyword nad call the class name using parentheses () just like we call a function.
// Lets log person6 object and se what we got
console.log(person6); // the greet method is missing in a log of our object but we know that it is in our class. If we expand prototypes in console log we will se that there is greet method.

// lets try to call our method and log to our consol.
console.log(person6.greet());

// lets create another person object
const person7 = new PersonClass(); // we can see that person 6 and 7 generates the same objects with the same values assigned to the properties. Such a class have a no use. We want our class to be flexible and generate new person object with different properties every time. That is where constructor functions come into the picture.
