// Intro to Function Overloading
// call signatures for function overloading
// we will build air ticket reservation system for a round trip

// lets create reservation type
type Reservation = {
  departureDate: Date;
  returnDate: Date;
  departingFrom: string;
  destination: string;
};

// now we create custom type of call signature for reserve function which will be used for reserving these tickets. This will be a custom type of a call signature function. This function will return reservation.
type Reserve = (
  departureDate: Date,
  returnDate: Date,
  departingFrom: string,
  destination: string
) => Reservation;

// Javascript is a dynamic language. Its a common pattern is to call the same function in multiple ways with different parameters and often having a different type of return value depending on the kind of arguments you pass int to that function. Typescript maintenence this dynamism using function overloads. We will convert previous Reserve syntax to more explicit syntax to use it in function overloading.

type Reserve2 = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;
};
