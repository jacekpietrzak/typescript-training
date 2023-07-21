// Read only Arrays
let numberArray: readonly number[] = [1, 2, 3];

// if we want to add anything to this array we will get an error
// numberArray.push(1);

type readOnlyPerson = readonly [string, string, number];

const person2: readOnlyPerson = ["John", "Smith", 32];

// long form syntax
type readOnlyArr = Readonly<string[]>;
// long form syntax with tuple
type readOnlyArr2 = Readonly<[string, string, number]>;
