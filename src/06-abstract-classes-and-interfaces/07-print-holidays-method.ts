/**
 * 07-print-holidays-method
 */

// custom type
type Holidays07 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department07 {
  // abstract property
  protected abstract holidays: Holidays07;
  // shared method
  public addHolidays(holidays: Holidays07) {
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
    console.log(`This is a list of holidays for ${this.name}:`);

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
class ItDepartment07 extends Department07 {
  protected holidays: Holidays07 = [];
  constructor() {
    super("IT Department");
  }
}

// Child class
class AdminDepartment07 extends Department07 {
  protected holidays: Holidays07 = [];
  constructor() {
    super("Admin Department");
  }
}

// lets create holidays for our It department
const itHolidays07: Holidays07 = [
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
const adminHolidays07: Holidays07 = [
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
const itDepartment07: ItDepartment07 = new ItDepartment07();
const adminDepartment07: AdminDepartment07 = new AdminDepartment07();

// lets add holidays to our departments
itDepartment07.addHolidays(itHolidays07);
adminDepartment07.addHolidays(adminHolidays07);

// instead of logging whole object we can now use our print method
// console.log(itDepartment07);
// console.log(adminDepartment07);

itDepartment07.printHolidays();
adminDepartment07.printHolidays();
