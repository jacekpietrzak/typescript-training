/**
 * 14-getting-more-control-on-members-of-a-class
 * - right now we have a problem with declaring an age. We can give anything we want.
 */

class Person14 {
  constructor(private name: string, public age: number) {
    // we achieved some constrains to the age variable but there are some flaws to this approach.
    // 1 We would need to write a lot of logic if this class got big
    // 2 if we want to change an age we would need to run this check again
    // 3 after instantiation we can use values outside of the range declared in the if statement because if statement is only fireing while instantiation of the class. That is why this is not a good option. Next lesson will help.
    // if (age < 0 || age > 200) {
    //   throw new Error("The age must be between 0-200");
    // }
  }
  public getName() {
    return this.name;
  }
}

const person14: Person14 = new Person14("Jack", 45);
const mark: Person14 = new Person14("Mark", 35);
// we dont want to be able to assign an age more than 200 and less than 0. To do that we can have a condition in our constructor.

// since age is public we can change it to numbers outside of the if statement because if statement is only fireing once while instantiating the class by createing an object based on that class. That is why
person14.age = 210;
mark.age = -10;

console.log(person14);
console.log(mark);
