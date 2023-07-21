/**
 * 18-improving-our-class
 *  - We will focus on how we can use all concepts we learned
 */

class Person18 {
  // since we want the age to be set while instantiation of the class we need to have it in constructor.
  //   private _age: number | undefined;
  constructor(private _name: string, private _age: number) {}

  // we will create a getter and setter for our name prop

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    if (age < 0 || age > 200) {
      throw new Error("The age must to be within range of 0-200");
    }

    this._age = age;
  }

  public get age() {
    //   we dont need this part anymore because user is forced to give us an age when instantiated the class.
    // if (this._age === undefined) {
    //   throw new Error("The age property has not been set");
    // }
    return this._age;
  }
}

const magda: Person18 = new Person18("Magda", 25);

console.log(magda);

magda.age = 35;
console.log(magda);
console.log(magda.age);
console.log(magda.name);
