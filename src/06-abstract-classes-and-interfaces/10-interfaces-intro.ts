/**
 * 10-interfaces-intro
 * - Interfaces are like contracts, they define in advance how object or a class structure, is going to look once the object or a class is created by the user.
 * - in TS we declare interfaces by using interface keyword
 * - interfaces and types are very similar in many ways
 * - While dealing with just objects you can choose custom types or interfaces. What matters is that you use either of the two.
 * - but there are specific cases where only interfaces can be used so better way is to use interfaces with objects.
 */

// declaring is quite similar to types.
interface Person0610 {
  name: string;
  email: string;
  age: number;
  // interfaces can alswo have optional property
  phone?: number;
  // interfaces can also have call signatures. Here we will use optional call signature that returns nothing.
  greet?: () => void;
}

// assign interface to the object is like assigning a type
const person0610: Person0610 = {
  name: "Jack",
  email: "jack@mail.com",
  age: 37,
};
