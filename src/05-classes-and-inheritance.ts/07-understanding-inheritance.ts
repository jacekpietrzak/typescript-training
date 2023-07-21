// Understanding inheritance
// Inheritance is another pillar of object programming. Is when one class inherits properties and methods of another class.
class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    // this are the properties that we expect every user to have in our program. There can be different properties and methodes but theesa are bare minimum for each user. This is classic use of inheritance becouse different users can have different methods and properties but all of them will have basic properties like name, email and age.
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

// We will create Admin user that will extends Basic User class. In this case our Admin user will be a child class of our User parent class. Admin user automatically inherits all the properties from the User class.
class AdminUser extends User {
  isAdmin: boolean = true; // is only available within admin user class and defaults to true.
}

const user1: User = new User("John", "john@mail.com", 34);
const admin: AdminUser = new AdminUser("Jack", "jack@mail.com", 37); // it will take 3 arguments as well that will inherit from User class.

console.log(user1);
console.log(admin);
