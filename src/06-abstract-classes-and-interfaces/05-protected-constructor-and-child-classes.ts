/**
 * 05-protected-constructor-and-child-classes
 * - since constructor is protected we can access it only from parent or child
 * - we dont want to have a public constructor because we will be able to instantiate departments that are based on wrong classes. For instance Accounts department based on ItDepartment child class.
 */

// custom type
type Holidays05 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department05 {
  // abstract property
  protected abstract holidays: Holidays05;

  // shared method
  public addHolidays(holidays: Holidays05) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  protected constructor(protected name: string) {}
}

// Child class
class ItDepartment05 extends Department05 {
  protected holidays: Holidays05 = [];
  // to set the name we need to use constructor in the child class and this constructor needs to have super() method so we can set the name that is inherited from the parent class.
  constructor() {
    super("IT Department");
  }
}

// Child class
class AdminDepartment05 extends Department05 {
  protected holidays: Holidays05 = [];
  constructor() {
    super("Admin Department");
  }
}
