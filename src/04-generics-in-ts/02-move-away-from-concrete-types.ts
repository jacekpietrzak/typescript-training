// Moving away from concrete types
// Concrete types are returning specific type of values like booleans, strings, numbers, dates and custom types. It clearly states what type is it.
// This is concrete implementation:
type Reserve4 = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation3 | never;
};
// but sometimes we do not know what type of arguments we pass to a function.
// TS have a way to deal with that type of scenario.
