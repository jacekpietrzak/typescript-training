/**
 * 15-using-mutator-setter-method.ts
 * Introduciton to Accessors and Mutators
 * 'getters' and 'setters'
 */

class Person15 {
  // we will create age prop outside constructor and set age wit setter method
  // to use set method you use set keyword followed by name of the property you want to set using the set method. We will use public access modifier because we want the set method to be available publicly once instantiated

  // because we used same prop name in the setter method we need to change this prop name. In the TS community it is popular to start the name of the private property that are set with a setter with underscore like this _age. Now we are getting the error that is not used in the constructor or is not initialized. We can correct this by adding the type of _age as number | undefined
  private _age: number | undefined;

  constructor(private name: string) {}

  public getName() {
    return this.name;
  }

  // we will create set method and name it age because we want to set age prop that we declared at the beginning of the class. We will accept one parameter named age:number. In set method we will apply the logic to set age only if the age is between 0-200
  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    // if the age is within range we will set the age. Age is passed from the user.
    this._age = age;
  }
}

const person15: Person15 = new Person15("Jack");
const lukas: Person15 = new Person15("Lukas");

console.log(person15);
console.log(lukas);
