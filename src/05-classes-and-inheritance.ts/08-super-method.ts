// Super method
// What if I need another property which is specific to admin user and not needed by instancing user class? Lets assume we have a property: usersReporting, which is a number of users that is reporting to this particular admin user.

class User2 {
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

// while creating a new object based on a AdminUser2 class we will need to have a number of users reporting to this particular admin that we are trying to create. Because isAdmin has a default value we didnt need to add any new argument while instantiating a new admin user. In terms of usersReporting we will need an input from a person creating new user based on this AdminUser2 class. As we know we need a constructor method to pass in any arguments while instantiating a new class. When you decler a constructor in a child class you need to declare constructor with a "super" method.
class AdminUser2 extends User2 {
  isAdmin: boolean = true;
  usersReporting: number;
  // typescript understands that since you declaring constructor method inside child class you might want request certain additional parameters for AdminUser class while you want to instantiated. With a super() method you have to tell typescript as to where it should be looking for the 3 parameters of the user class which the admin user extends from. In our case theese 3 parameters will be name, email and age. You might still want to accept the name, email and age. In that case we will need to define them again as a parameters of the constructor function of AdminUser class.
  constructor(
    name: string,
    email: string,
    age: number,
    usersReporting: number
  ) {
    //   once you have accepted thees parameters you can pass them to the super() method and let TS know that it should assign theese properties to the user class.
    super(name, email, age); // name, email and age are passed on to the User Parent class constructor using super() method.

    //   we added userReporting parameter to constructor so we can assign it to AdminUser2 class. Now we can assign it below in constructor after super() method.
    this.usersReporting = usersReporting;
  }
}

// now we need to add fourth argument
const admin2: AdminUser2 = new AdminUser2("Jack", "jack@mail.com", 37, 5);

console.log(admin2);
