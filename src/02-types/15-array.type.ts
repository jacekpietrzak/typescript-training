// Arrays
let numberArr: number[] = [1, 2, 3]; // number type arr
let stringArr: string[] = ["a", "b", "c"]; // string type arr
let stringArr2: Array<string> = ["a", "b", "c"]; // string type arr with a different syntax. Also correct
let numberAndStringArr: (number | string)[] = ["a", "b", 1, 2]; // union type arr. The best way is to have arrays of single type so you dont need to conditionally test each value with arrays.
// lets bring airplane type and use it in our array

type Airplanes = Airplane2[]; // created type of Airplanes that is based on type of Airplane2 from index signature type

const airplanes: Airplanes = [
  {
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
  },
  {
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
  },
];
