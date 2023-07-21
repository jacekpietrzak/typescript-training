/**
 * 09-introduction-to-abstract-methods
 * - in the lesson 08 we were overriting methods of printing holidays but we end up repetiting lots of code
 * - like abstract properties classes can have as well abstract methods.
 * - abstract method is a signature that method that the every child classe will have to implement.
 * - abstract method are just definitions and does not have any body.
 * - every child class must implement this method.
 * - good to force implementation of methods.
 */

// custom type
type Holidays09 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department09 {
  // abstract property
  protected abstract holidays: Holidays09;

  // shared method
  public addHolidays(holidays: Holidays09) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  // We will remove the whole method and convert it to abstract method. Because we will not have any implementations we will remove {} and we will set return for this method to void because it is not returning anything.

  public abstract printHolidays(): void;

  protected constructor(protected name: string) {}
}

// Child class
class ItDepartment09 extends Department09 {
  protected holidays: Holidays09 = [];
  constructor() {
    super("IT Department");
  }
  // we need to implement a method with exact same name that abstract method in the parent class.
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("No holidays to display");
    }
    // in case there is no holidays we will print this:
    console.log(`This is a list of holidays for ${this.name}:`);

    // If there are holidays we will loop through the array and list all holidays in the array.
    this.holidays.forEach((holiday, index) => {
      //   we will start with index to give a number and since index starts with 0 we will add 1 to start with 1
      console.log(
        `${index + 1}. Reason: ${holiday.reason}, Date: ${holiday.date}`
      );
    });
  }
}

// Child class
class AdminDepartment09 extends Department09 {
  protected holidays: Holidays09 = [];
  constructor() {
    super("Admin Department");
  }
  // we need to implement a method with exact same name that abstract method in the parent class.
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("No holidays to display");
    }
    // in case there is no holidays we will print this:
    console.log(`This is a list of holidays for ${this.name}:`);

    // If there are holidays we will loop through the array and list all holidays in the array.
    this.holidays.forEach((holiday, index) => {
      //   we will start with index to give a number and since index starts with 0 we will add 1 to start with 1
      console.log(
        `${index + 1}. Reason: ${holiday.reason}, Date: ${holiday.date}`
      );
    });
  }
}

// lets create holidays for our It department
const itHolidays09: Holidays09 = [
  {
    date: new Date(2022, 11, 1),
    reason: "IT Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
];

// lets create holidays for our Admin department
const adminHolidays09: Holidays09 = [
  {
    date: new Date(2022, 10, 1),
    reason: "Admin Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Christmas",
  },
];

// lets create an instance of it department
const itDepartment09: ItDepartment09 = new ItDepartment09();
const adminDepartment09: AdminDepartment09 = new AdminDepartment09();

// lets add holidays to our departments
itDepartment09.addHolidays(itHolidays09);
adminDepartment09.addHolidays(adminHolidays09);

// instead of logging whole object we can now use our print method
itDepartment09.printHolidays();
adminDepartment09.printHolidays();
