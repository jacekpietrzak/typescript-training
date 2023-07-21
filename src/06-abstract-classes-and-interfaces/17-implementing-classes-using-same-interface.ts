/**
 * 17-implementing-classes-using-same-interface
 * - lets implement a trac class based on the same interface/contract
 */

enum AutomobileTypes0617 {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands0617 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors0617 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0617<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

class Car0617
  implements Automobile0617<string, AutomobileBrands0617, AutomobileColors0617>
{
  public type: string = "car";
  constructor(
    public brand: AutomobileBrands0617,
    public colors: AutomobileColors0617[],
    public description: string
  ) {}
}

class Truck0617
  implements Automobile0617<string, AutomobileBrands0617, AutomobileColors0617>
{
  // since type property is mandatory and it is always remain the same, this track class will always return an instance of a truck.
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands0617,
    public colors: AutomobileColors0617[],
    public description: string
  ) {}
}

// lets create a specific car ferrari
const ferrari0617: Car0617 = new Car0617(
  AutomobileBrands0617.ferrari,
  [AutomobileColors0617.red, AutomobileColors0617.black],
  "this is a Ferrari"
);
console.log(ferrari0617);

const toyotaTruck: Truck0617 = new Truck0617(
  AutomobileBrands0617.toyota,
  [AutomobileColors0617.silver, AutomobileColors0617.black],
  "This is a Toyota truck"
);

console.log(toyotaTruck);

// each of those classes (car and truck) implements the same Automobile interface which is acting as a binding contract.
