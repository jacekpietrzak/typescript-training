/**
 * 18-implementing-multiple-interfaces-in-class
 * - TS allows implement multiple interfaces to a class.
 * - this will help make your code modular
 * - lets assume that all commercial vehicles like truck need some additional properties as compere to private cars. We want all the commercial vehicles to have to more properties. Copacity and Licence renewall date.
 */

enum AutomobileTypes0618 {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands0618 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors0618 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0618<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

// lets create a new interface and call it CommercialVehicle
interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

// now we can implement CommercialVehicle interface to Truck class by adding it after ","

class Truck0618
  implements
    Automobile0618<string, AutomobileBrands0618, AutomobileColors0618>,
    CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands0618,
    public colors: AutomobileColors0618[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date
  ) {}
}

const toyotaTruck0618: Truck0618 = new Truck0618(
  AutomobileBrands0618.toyota,
  [AutomobileColors0618.silver, AutomobileColors0618.black],
  "This is a Toyota truck",
  "10 tonnes",
  new Date("2024-11-15")
);

// we combined 2 interfaces and our track has now properties from both interfaces. We can have complex classes build from small modular interfaces. This interfaces can be used across multiple classes.
console.log(toyotaTruck0618);
