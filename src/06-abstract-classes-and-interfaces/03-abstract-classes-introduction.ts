/**
 * 03-abstract-classes-introduction
 * - they can contain abstract members in a class.
 * - abstract classes can not be instantiated.
 * - whole purpose of createing abstract class is to create child classes from an abstract class.
 * - abstract members of the class need to be implemented to each of a child classes.
 * - abstract members in the parent class exist to force their implementation in child classes
 */

// we will declare a parent class that will have many child classes and all theese classes will inherit from Department parent class.
// to convert a class to abstract one we need to add abstract keyword before the name

// Custom Holidays type
type Holidays = {
  date: Date;
  reason: string;
}[];
// since we have Holiday type lets add abstract holidays propertry to our class.

abstract class Department {
  protected abstract holidays: Holidays;

  // because we cant instantiate abstract class we can make our construcotr protected which means that only child classes has access to it.
  protected constructor(protected name: string) {}
}

// lets create 2 new departments that inherit from this Department class and are child classes.
// lets assume theese 2 departments want to have their own holiday lists. If theese holidays wolud be the same for each we could do this in abstract class but becaouse we want them to be different, we will create them in each of the child department. But we want to be mandatory when for each department to have it. That is where abstract members com in handy. Lets create a type at the beginning.

// thanks to holidays abstract member that we created in Department parent abstract class we are forcing our child departments to include holidays object type but can be different set of holidays

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}
