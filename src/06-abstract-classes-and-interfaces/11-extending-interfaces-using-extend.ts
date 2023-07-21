/**
 * 11-extending-interfaces-using-extend
 */

interface User0611 {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

// lets assume that we want to grab address only from specific users and address is not needed for all users. We dont want to keep address as an optional propertty but as a seperate interface for users with address. We can inherit property of one interfeca to another by using extend keyword.

interface UserWithAddress extends User0611 {
  address: string;
}

const userWithAddress: UserWithAddress = {
  name: "Jack",
  email: "jack@mail.com",
  phone: 123456,
  gender: "male",
  address: "some street",
};
