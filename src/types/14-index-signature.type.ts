// Index signatures
// Many times we will have a situatuion where the exact keys and values of object properties are not known to us but we do know a pattern of such keys and prperties.

// let assume that we are building a ticket management system for an airline and they need to keep track of all seat numbers and passengers traveling on those seat numbers.
// First we will declare airplane type

type Airplane2 = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string; // index signature will tell TS exactly what type of key and value we want to have. This tells that seats can have a number of properties as long as name of the property is a string and the value assigned to this prop is also a string. One object can have only one index signature but you can use union types for index signature example: "[key:string | number] : string | number" If we use only {} type TS will read it as an object of ANY type which we want to avoid.
    orderProperty: string; // index signatures can coexist with other types but if index signature is a type of string you need to follow the same type in the other properties of this object. If we want to have a differen type we need to add to the other property a union type: orderProperty: number, [key: string]: string | number
  };
};

// lets create an airplane object based on the type we created. Different airplane will have different numbers of seats.
const airplane2: Airplane2 = {
  flightNumber: "ss2112",
  airplaneModel: "A380",
  dateOfDeparture: "01/01/2022",
  timeOfDeparture: "20:22",
  from: "JFK",
  to: "DCA",
  seats: {
    orderProperty: "some order",
    "10A": "Mark Thomas",
    "10B": "Izabele Thomas",
  },
};
