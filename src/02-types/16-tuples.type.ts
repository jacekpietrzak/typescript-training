// Tuples - special type of array - length and type of each of the value of the array is predefined.
// let assume we need to declare an array that represents a person and has 3 values in it. firstName, lastName, age
// example below is a tuple. Fixed length and fixed types for each value and exact same order.
let newPerson: [string, string, number?]; // to make a property optional we can add "?" at the value end.

newPerson = ["john", "Doe", 25];
newPerson = ["john", "Doe"];

/**
 * we want to create an array with properties:
 * [
 * NumberOfStudents: Number,
 * passing: boolean,
 * "John",
 * "Stella"
 * ]
 *  */

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "john", "Stella", "Mark"];
const failingStudents: listOfStudents = [2, false, "Marta", "Jack"];

// you should use Tuples as often as possible.
