/**
 * 12-inherit-from-multiple-interfaces
 * - biggest adventage for interfaces is taht you can inherit from multiple interfaces.
 * - we want to create a new type of a user called Admin which needs to have all the details of the basic user and have some rools and permisions as well.
 */

// lets create an enum for roles
enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}
// create interface called Role
interface Role0612 {
  // one property role of type enum = Roles that will be one of the values of Roles enum
  role: Roles;
}

// lets create another enum with permissions - advantage of this enum is that we can have specific set of permissions that we can assign to our users and will remain consistant throughout appliccation
enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}
// lets create an interface for permissions
interface UserPermissions0612 {
  // permissions property will be of type array which can include values from PermissionsList enum.
  permissions: PermissionsList[];
}

interface User0612 {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

// lets create admin interface that extends multiple interfaces.
interface AdminUser0612 extends User0612, Role0612, UserPermissions0612 {
  // this interface can have its own properties as well.
  numberOfUsersReporting: number;
}

interface UserWithAddress0612 extends User0612 {
  address: string;
}

const userWithAddress0612: UserWithAddress0612 = {
  name: "Jack",
  email: "jack@mail.com",
  phone: 123456,
  gender: "male",
  address: "some street",
};

const rob: AdminUser0612 = {
  name: "Rob",
  email: "rob@mail.com",
  phone: 123456,
  gender: "male",
  role: Roles.admin,
  permissions: [
    PermissionsList.read,
    PermissionsList.write,
    PermissionsList.execute,
  ],
  numberOfUsersReporting: 5,
};

console.log(rob);
