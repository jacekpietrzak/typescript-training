// typed nested objects

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

// type Airplane = {
//   model: string;
//   flightNumber: string;
//   timeOfDeparture: Date;
//   timeOfArrival: Date;
//   caterer: {
//     // we can abstract this caterer object to a seperate type
//     name: string;
//     address: string;
//     phone: number;
//   };
// };

// by extracting caterer type we can make a new type for Airplane using caterer type inside it.

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

const airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "484, Some Street, New York",
    phone: 1452125,
  },
};
