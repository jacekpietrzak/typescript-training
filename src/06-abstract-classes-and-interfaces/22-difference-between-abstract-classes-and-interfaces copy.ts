/**
 * 22-difference-between-abstract-classes-and-interfaces 1 of 2
 * - they seem to be similar and in many cases there are.
 * - when to choose which one
 */

// we will compare abstract classes and interfaces

/** Abstract class */
abstract class Person0622 {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  //in abstract class we can have a method
  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}

/** Interface */
interface User0622 {
  name: string;
  email: string;
  phone: number;

  greeting: () => {};
}

// if we had to create a class that is inherit from abstract class or class that implements an interface. Both of them are providing us with a binding contract and nothing else.
// we will try to create classes based on abstract class and interface
// we can see that both classes are forced to use specific properties that are included in abstract class and interface.
// difference is: abstract classes can have methods within them that can be inherited by child classes, where interfaces can only have call signatures and cannot have actual implementations inside them.

/** class based on abstract class */
class RegisteredPerson0622 extends Person0622 {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}
// lets instantiate registeredPerson class
const registeredPerson0622: RegisteredPerson0622 = new RegisteredPerson0622(
  "Jack",
  "jack@mail.com",
  123456
);
// and try greeting method
registeredPerson0622.greeting();
console.log(registeredPerson0622);

/** class based on interface */
class RegisteredUser0622 implements User0622 {}
