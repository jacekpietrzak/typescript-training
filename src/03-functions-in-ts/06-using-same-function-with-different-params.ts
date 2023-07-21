// Using same function with different params
// JS functions are dynamic in nature. They can accept different parameters and return different values based on arguments passed to the function. The way to do this in TS is by using Function Overloads.
// In our example we will assume that there are customers that want to book only one way ticket. In that case we can make a returnDate an optional property.

type Reservation3 = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// we made the returnDate an optional property. We need to tell our reserve function signature as well that there might be case that we wont probide a returnDate as a parameter. To do so we need to add another call signature type. Because we used explicit syntax to define call signatures is that we can add multiple call signatures to a single type.

type Reserve3 = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation3 | never; // because there is a possibility that we wont receive all 3 mandatory parameters we need to return an error in this scenario. Which means that we will have function that throw an error, terminates and never finish
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation3
    | never; // because there is a possibility that we wont receive all 3 mandatory parameters we need to return an error in this scenario. Which means that we will have function that throw an error, terminates and never finish
};
// Since we have two call signatures in this type TS now knows that we can call this function in multiple ways and might return different values.
// Now we can declare a single reserve function which can reserve both return tickets and one way ticket.
// How many parameters will the function take? TS takes in common properties out of theese both call signatures and then formulates parameters for this type of a function. Since first parameter is common in both signatures this will be taken in as it is. Second parameter is not in both signatures. TS will take return date and departing from and make it as a type of Union of returnDate and departingFrom Date | string. Third parameter will be again combined third parameter of first call signature and third of second call signature. You can name theese parameters as you want but it is the best to name them the way so you can later on identify which 2 parameters were cobined together. Fourth parameter will be destination because in the second call signature we dont have fourth parameter but it is gonna be an optional parameter. Below we are redeclering the type of a parameter. But we did it to understand it better. We didnt need to do that because reserve function is of Reserve3 type.
const reserve: Reserve3 = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    // we are checking if we received Reserve first call signature. Difference between those is that second parameter is in a form of Date and that destination exist.
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
