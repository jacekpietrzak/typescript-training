// enums - type that is used to enumarate value of a data type.
// lets declare simple person type

// const roles = ["admin", "author", "editor"];
// now we can add role property to person. But in this situation we will need to go back to our array to know which index is for each role.

// import * as roles from "./roles";
// now we can access roles with dot notation in order to access roles. This way all the roles can be consisten within whole project. This way most of developers use constants for the values that are repetetive and be used across various JS modules in the same app. But TS give us better solution

// roles.ADMIN;
// roles.AUTHOR;
// roles.EDITOR;

// typescript way for this situation using enum. TS automaticaly assignes number values for each value starting from 0

enum Roles {
  admin, // 0
  author, // 1
  editor, // 2
}
// let log author and see what value we will get
console.log(Roles.author); // console gives value of 1
// we can manually assign values that we want to show.
enum Roles2 {
  admin = "admin",
  author = "author",
  editor = "editor",
}

console.log(Roles2.author); // console gives author

type Person = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// let assume that we need to assign a user role to each user. We can declare an array with a set of rules.
// better approach is to have a seperate file with roles and import those roles to file that I need.

// now with enums we can have a person this way:
type Person2 = {
  name: string;
  email: string;
  password: string;
  role: Roles2; // this way instead of saying that this is a string we say that role is any value from Roles2 enum
};

// lets declare a person and see it in action:
const person1: Person2 = {
  name: "Sam",
  email: "sam@email.com",
  password: "pass123",
  role: Roles2.editor,
};

console.log(person1);

// we can go a step ahead and put this enum in seperate faile in this case our roles.ts and import it where we need.

import { Roles3 } from "../roles";
// and use it in our person
type Person3 = {
  name: string;
  email: string;
  password: string;
  role: Roles3; // this way instead of saying that this is a string we say that role is any value from Roles2 enum
};

const person3: Person3 = {
  name: "Sam",
  email: "sam@email.com",
  password: "pass123",
  role: Roles3.admin,
};

console.log(person3);
