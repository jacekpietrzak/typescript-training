// void and never types - they dont exist in JS but exist in TS
// void - is assigned to a function that returns no value.

const addNumbers = () => {
  console.log(2 + 4);
};

// let execute thos function and see what we get
addNumbers(); // brings value 6 to the console but returns nothing. TS tells that this function is a void type. Any function that returns nothing can be assigned a type of void.

const addNumbers2 = (): void => {
  console.log(2 + 4);
};
// void function will end and the program will go to the next line of code.

// never - is assigned to a function that never completes.
const throwNewError = () => {
  throw new Error("your program terminated because of error");
};
// this function will always throw an error and will never completes. This type of function can be assigned type of never because it will never terminates.

const throwNewError2 = (): never => {
  throw new Error("your program terminated because of error");
};
// let execute this function and see what we get.
throwNewError2();
// this function will return an error that we declared. The program will terminate after this function.
