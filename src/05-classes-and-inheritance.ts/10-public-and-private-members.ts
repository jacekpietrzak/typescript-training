/**
 * public and private members
 * by default if you wont mentione the class it is assumed as a public member.
 * - access modifier is always declared to hte member of the clasbefore the name of the property
 * - at the beginning it might seem useless but in the future we will se that it will be very good to enhance security
 */

class Person10 {
  private name: string;
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

let person10: Person10 = new Person10("John", 32);
console.log(person10);

person10.name = "Jack";
console.log(person10);
console.log(person10.getName());
