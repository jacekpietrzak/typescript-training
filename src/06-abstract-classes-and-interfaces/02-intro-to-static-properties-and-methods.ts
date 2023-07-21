/**
 * 02-intro-to-static-properties-and-methods
 * - static members are those members that can be accessed without instantiating the class.
 * - can be used whenever you dont need to instantiate the class before accessing its methods and values. Usually if this method are not linked to eachother.
 * - Great example is the Math object.
 */

// here we dont need to instantiate the object yo use it methods and values.
const pi = Math.PI;

class Automobile {
  // static member with default value red created by adding static before name of the prop.
  public static color: string = "red";

  // lets create a public static method to calculate km per liter of the car

  public static calculateMileage(miles: number, litres: number) {
    return miles / litres;
  }
}

console.log(Automobile.color);
