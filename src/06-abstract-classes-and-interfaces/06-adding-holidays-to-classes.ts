/**
 * 06-adding-holidays-to-classes
 */

// custom type
type Holidays06 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department06 {
  // abstract property
  protected abstract holidays: Holidays06;
  // shared method
  public addHolidays(holidays: Holidays06) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  protected constructor(protected name: string) {}
}

// Child class
class ItDepartment06 extends Department06 {
  protected holidays: Holidays06 = [];
  constructor() {
    super("IT Department");
  }
}

// Child class
class AdminDepartment06 extends Department06 {
  protected holidays: Holidays06 = [];
  constructor() {
    super("Admin Department");
  }
}

// lets create holidays for our It department
const itHolidays: Holidays06 = [
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
const adminHolidays: Holidays06 = [
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
const itDepartment: ItDepartment06 = new ItDepartment06();
const adminDepartment: AdminDepartment06 = new AdminDepartment06();

// lets add holidays to our departments
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

console.log(itDepartment);
console.log(adminDepartment);
