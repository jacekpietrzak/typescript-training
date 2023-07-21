/**
 * 13-interfaces-and-generics
 */

// we start with creating interface.
// if we look at those properties we see that there are very generic. User can insert any string in type which doesnt need to be an automobile type. Our interface here is way to flexible. We want to have strict typeing but still have a flexibility for a user.
// This is a case where we can use generics.
interface Automobile0613 {
  type: string;
  brand: string;
  colors: string[];
  description: string;
}
