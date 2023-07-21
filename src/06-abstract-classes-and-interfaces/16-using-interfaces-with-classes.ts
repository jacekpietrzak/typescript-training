/**
 * 16-using-interfaces-with-classes
 * - iunterfaces can be used to apply strict typing to classes as well
 * - classes then in turn can be used to enerate objects that we want by instantiating a class
 * - classes in TS can implement interfaces
 * - The most important use case of interfaces is to be used along with classes
 * - lets say we want to implement a car class. It will have all properties of automobile.
 */

enum AutomobileTypes0616 {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands0616 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors0616 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0616<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

// lets create a car class first that implements Automobile interface. Automobile interface is forcing us to implement a specific structure. Acting like a contract and is forcing a developer to follow the contract. Interfaces are not concrete which means there are flexible as long it is automobile declared in the interface.
class Car0616
  implements Automobile0616<string, AutomobileBrands0616, AutomobileColors0616>
{
  // we want this clas to be always a car. We will add this as a public prop to this class, and then assign a default value of a car so we always generate a car from this class.
  // it will by a string because we declared it as a string with a default value of a car.
  public type: string = "car";
  // lets add a constructor to our class to include all properties that left from the interface.
  constructor(
    public brand: AutomobileBrands0616,
    public colors: AutomobileColors0616[],
    public description: string
  ) {}
}

// lets create a specific car ferrari
const ferrari0616: Car0616 = new Car0616(
  AutomobileBrands0616.ferrari,
  [AutomobileColors0616.red, AutomobileColors0616.black],
  "this is ferrari"
);

console.log(ferrari0616);
