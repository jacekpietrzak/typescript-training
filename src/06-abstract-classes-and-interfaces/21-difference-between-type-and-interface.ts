/**
 * 21-difference-between-type-and-interface
 * - we can now compare types, abstract classes and interfaces. There all seems to solve the same problem but are very different from eachother
 * types and interfaces has their own use cases - which to use depends on what you try to achieve.
 */

// lets start with the features that are unique to types and are not available when you use interfaces.
// lets declaere few types

type User0621 = {
  name: string;
};

type AdminUser0621 = {
  isAdmin: boolean;
};

/** What we can do with type but not interfaces */
// 1 - advantage of using types over interfaces is that types provide us with ability to create union types as well as interseciton types.
// intersection type - intersection of User & Admin
const userAndAdmin: User0621 & AdminUser0621 = {
  name: "John",
  isAdmin: true,
};

// union type - needs to have any of properties of those types or combined properties.
const userOrAdmin: User0621 | AdminUser0621 = {
  name: "John",
};

// 2 - Tuples can be declared using type keywords but not using interfaces.
type ResponseTuple = [string, number];

/** What we can do with interfaces but not type */
// 1 - TS automatically merges interfaces with the same name and combine them into one. You can do that with type - we will get an error of duplicate type.

interface Person0621 {
  name: string;
}

interface Person0621 {
  lastName: string;
}

const person0621: Person0621 = {
  name: "John",
  lastName: "Smith",
};

// 2 - interfaces can extends eachother - types can not
// we will add new interfaces
interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

// create interface that extends others. Character is made of Name and LastName interfaces.
interface Character0621 extends Name, LastName {}

const character0621: Character0621 = {
  name: "Magdalena",
  lastName: "Pietrzak",
};

// 3 - implementation of multiple interfaces is possible when you use them in conjunction with classes - Character interface can be called as a class as well.

class OtherCharacter implements Name, LastName {
  constructor(public name: string, public lastName: string) {}
}
// now we can instantiate new class
const otherCharacter: OtherCharacter = new OtherCharacter("Jacek", "Pietrzak");

console.log(otherCharacter);
