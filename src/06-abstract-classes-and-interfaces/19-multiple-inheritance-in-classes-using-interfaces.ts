/**
 * 19-multiple-inheritance-in-classes-using-interfaces
 * - classes in TS can inherit only from one class. There can be only one parent class when createing child classes.
 * - this problem is solved by interfaces.
 */

class User0619 {
  constructor(public name: string) {}
}
class Password {
  constructor(public password: string) {}
}

// lets say we want to create a registeredUserClass that will have a property from User and Passowrd class

// class RegisteredUser extends User0619,Password{}

// in TS class can inherit only from one parent class but they can implement as many interfaces as needed.
