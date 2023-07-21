/**
 * 04-shared-methods-in-abstract-classes
 */

type Holidays04 = {
  date: Date;
  reason: string;
}[];

// Abstract Parent class
abstract class Department04 {
  // abstract property
  protected abstract holidays: Holidays04;

  // we will declare a public method to add holidays
  public addHolidays(holidays: Holidays04) {
    //   firstly we will check if holidays is an array or not.
    if (Array.isArray(holidays)) {
      // if it is we will loop through each of this holidays
      for (const holiday of holidays) {
        // now we can push each holiday into our protected holidays array
        // since this method is in parent class, all the child classes inherits this method
        this.holidays.push(holiday);
      }
    }
  }

  protected constructor(protected name: string) {}
}

// Child class
class ItDepartment04 extends Department04 {
  protected holidays: Holidays04 = [];
}

// Child class
class AdminDepartment04 extends Department04 {
  protected holidays: Holidays04 = [];
}
