/**
 * 23-difference-between-abstract-classes-and-interfaces 2 of 2
 * - they seem to be similar and in many cases there are.
 * - when to choose which one
 * - we will try to create classes based on abstract class and interface
 * - if we had to create a class that is inherit from abstract class or class that implements an interface. Both of them are providing us with a binding contract and nothing else.
 * - we can see that both classes are forced to use specific properties that are included in abstract class and interface.
 */

/**
 * Differences between abstract classes and interfaces
 * 1. abstract classes can have methods within them that can be inherited by child classes, where interfaces can only have call signatures and cannot have actual implementations inside them.
 * 2. interfaces only contain public properties that the instance of a class must contain but do not contain any implementation of such properties or methods.
 * 3. implementation of interface method call signature is done within the class itself and not in the interface.
 * 4. in abstract classes we can have an implementation of the method and then any class that extends the abstract class, automatically get access to this particular method.
 * 5. classes can implement multiple interfaces but can extend only from one parent class.
 * 6. Abstract classes can contain static methods where interfaces can not contain static mathod
 */

/** Abstract class */
abstract class Person0623 {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  //in abstract class we can have a method
  public greeting() {
    console.log(`Hello ${this.name}`);
  }

  // lets create a static method - we can invoke it without instantiating the class.
  public static nameClass() {
    return `Class name is Person`;
  }
}

/** Interface */
interface User0623 {
  name: string;
  email: string;
  phone: number;

  // in interfaces we can have only a greet method call signature - no implementation.
  greeting: () => void;
}

/**
 * class based on abstract class
 */
class RegisteredPerson0623 extends Person0623 {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}
// lets instantiate registeredPerson class
const registeredPerson0623: RegisteredPerson0623 = new RegisteredPerson0623(
  "Jack",
  "jack@mail.com",
  123456
);
// and try greeting method
registeredPerson0623.greeting();
console.log(registeredPerson0623);
// we can invoke static method without instantiating the class.
console.log(Person0623.nameClass());

/**
 * class based on interface
 */
class RegisteredUser0623 implements User0623 {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {}

  // we need to implement a public method of greeting
  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}
