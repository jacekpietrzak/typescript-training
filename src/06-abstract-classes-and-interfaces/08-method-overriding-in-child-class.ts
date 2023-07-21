/**
 * 08-method-overriding-in-child-class
 * - we can modify or override the method of the parent class, in the child classes but we need to accept the same parameters.
 */

// custom type
type Holidays08 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department08 {
  // abstract property
  protected abstract holidays: Holidays08;
  // shared method
  public addHolidays(holidays: Holidays08) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  // lets create a method to print holidays array
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("No holidays to display");
    }
    // in case there is no holidays we will print this:
    console.log(`This is a list of holidays:`);

    // If there are holidays we will loop through the array and list all holidays in the array.
    this.holidays.forEach((holiday, index) => {
      //   we will start with index to give a number and since index starts with 0 we will add 1 to start with 1
      console.log(
        `${index + 1}. Reason: ${holiday.reason}, Date: ${holiday.date}`
      );
    });
  }

  protected constructor(protected name: string) {}
}

// Child class
class ItDepartment08 extends Department08 {
  protected holidays: Holidays08 = [];
  constructor() {
    super("IT Department");
  }

  // We will copy this method from parent class and change it to show that we can override them
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
class AdminDepartment08 extends Department08 {
  protected holidays: Holidays08 = [];
  constructor() {
    super("Admin Department");
  }
}

// lets create holidays for our It department
const itHolidays08: Holidays08 = [
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
const adminHolidays08: Holidays08 = [
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
const itDepartment08: ItDepartment08 = new ItDepartment08();
const adminDepartment08: AdminDepartment08 = new AdminDepartment08();

// lets add holidays to our departments
itDepartment08.addHolidays(itHolidays08);
adminDepartment08.addHolidays(adminHolidays08);

// instead of logging whole object we can now use our print method
itDepartment08.printHolidays();
adminDepartment08.printHolidays();
