// null and undefined
// null - something that javascript cant compute and ran into an error.
// undefined - something that is not defined yet.

let user: string;
console.log(user); // we will get undefined because user is not defined yet

let saveButton = document.getElementById("save");
console.log(saveButton); // we are getting null because there is no element with this id in our DOM.

let loggedInUsername: string;

const users = [
  { name: "Obby", age: 12 },
  { name: "Hina", age: 32 },
];

// because loggedInUsername is declared but not defind find() method returns undefined
const loggedInUser = users.find((user) => {
  user.name === loggedInUsername;
});

// console.log(loggedInUser.age); // undefined

// because saveButton cant get the element from the dom which doesnt exist it will returns null. TS thinks that this element either will be of type HTMLElement or null. The best would be to define this value. There are 2 ways to get rid of this error. We can tell TS that there will be an element of id "save". To do that we can add "!" to the end. This "!" tells TS that we know that this statement will defenitely return an element which will have an id "save" so TS can stop worring about it. When we add "!" the error goes away.
let saveButton2: HTMLElement = document.getElementById("save")!;
// or we can tell TS that this element will be either HTMLElement or null. But we will need to do a type check.
let saveButton3: HTMLElement | null = document.getElementById("save")!;
// so we need to pass condition like so:
if (saveButton3 !== null) {
  // do something
}
// this condition will make sure that if saveButton is not a null than do something.
