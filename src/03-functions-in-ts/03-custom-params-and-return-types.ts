// Custom parameters and return types
enum AgeUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
};

const person3: Person = {
  name: "Scott",
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: "USA",
};
// lets assume that we want to write a function that takes person age given in years and converts it into months
function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(convertAgeToMonths(person3));
