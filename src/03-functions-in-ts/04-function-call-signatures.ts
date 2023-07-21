// Function Call Signatures
// lets assume that one of the Person2 parameters will be a greet method

enum AgeUnit2 {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;

type Person4 = {
  name: string;
  age: number;
  ageUnit: AgeUnit2;
  country: string;
  //   greet: Function; // this way we tell TS that this key will be a function. But this way TS will only check if this is a function but wont tell what type of function it is. Function type is to generic. Ts provide us with better method Function Call Signatures.
  // greet: (greeting: string, ageUnit: AgeUnit) => string; // Call signature - (what params it takes)=> what type it returns. We can give custom type parameters and primitive parameters
  greet: greetingFunction; // we can go a bit further and declare a greeting type function outside Person type and provide it as a type.
};

// now we can implement greet method to our person.
const person4: Person4 = {
  name: "Scott",
  age: 30.5,
  ageUnit: AgeUnit2.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${person4.name}`;
  },
};

console.log(person4);
console.log(person4.greet("Good morning"));
