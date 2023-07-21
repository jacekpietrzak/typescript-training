// Access modifiers for class properties.
// restrict access of properties and methods or the members of the class to its child clas or to it instances depending on which access modifier you are using.

class NewPerson2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newPerson2: NewPerson2 = new NewPerson2("Jack", 30);
// we can change any property  of this object
newPerson2.name = "Mike";
// in many applications we maight dont want this behavior that user can change it outside the class. This is when access modifiers are comming to use. We have 3 access modifiers in TS:
/**
 * 1 Public
 *      a outside the class - yes access
 *      b child class - yes access
 *      c parent class - yes access
 * 2 protected
 *      a outside the class - no access
 *      b child class - yes  access
 *      c parent class - yes access
 * 3 private - any member that has been assigned private access modifier is only accessible within the parent class itself and not outside the parent class. Private members cant be accessed even within child class.
 *      a outside the class - no access
 *      b child class - no access
 *      c parent class - yes access
 */

console.log(newPerson2);
