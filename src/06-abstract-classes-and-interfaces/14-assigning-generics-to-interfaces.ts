/**
 * 14-assigning-generics-to-interfaces
 */

// we start with creating interface.
// if we look at those properties we see that there are very generic. User can insert any string in type which doesnt need to be an automobile type. Our interface here is way to flexible. We want to have strict typeing but still have a flexibility for a user.
// We want to restrict values that our user can put in our
// This is a case where we can use generics.
// lets convert it to generics to do that we need to add them after name of interface in <Prop, Prop... >
// We will create some enums for all of those to pass to the interface.

enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0614<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}
