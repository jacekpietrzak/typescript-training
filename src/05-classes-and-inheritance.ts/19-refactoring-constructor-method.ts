/**
 * 19-refactoring-constructor-method.ts
 * - we will refactor constructor - right now user can give us any age we want to have some constrains.
 */

class Person19 {
  //  to test if the user age is not out of range we will create a private method.

  private testUserAge(age: number) {
    if (age < 0 || age > 200) {
      throw new Error("The age must to be within range of 0-200");
    }
    return age;
  }

  constructor(private _name: string, private _age: number) {
    this.testUserAge(_age);
    //   once the condition is met we can asssign _age to this._age
    this._age = _age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.testUserAge(age);
    this._age = age;
  }

  public get age() {
    return this._age;
  }
}

const magdalena: Person19 = new Person19("magdalena", 25);

console.log(magdalena);

magdalena.age = 35;
console.log(magdalena);
console.log(magdalena.age);
console.log(magdalena.name);
