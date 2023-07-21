/**
 * 16-using-mutator-getter-method.ts
 * -
 */

class Person16 {
  private _age: number | undefined;

  constructor(private name: string) {}

  public getName() {
    return this.name;
  }

  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    this._age = age;
  }

  // lets create a get method for age is similar to set method
  public get age() {
    // first thing we will check if age is set
    if (this._age === undefined) {
      throw new Error("The age property has not been set");
    }
    return this._age;
  }
}

const jack: Person16 = new Person16("Jack");
// since we have set method we can access it by using the method. We are not using age as a function but as a property. We can do this because we are uisng set method on the age which is treated as a property.
jack.age = 70;

console.log(jack);

// we can also access the age prop directly from the object because we are using get method.
console.log(jack);
