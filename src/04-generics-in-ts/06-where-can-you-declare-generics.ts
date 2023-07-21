// Where can you declare Generics
// we can use generics in various places.
// We can declere our Generic type right after we decler the name of our type.
type Filter5<T> = {
  // this syntax tells something different than before. This say that Filter5 will always have a generic type of T. But this way in our case is counterproductive and missing the whole point of flexibility. that we needed.
  (array: T[], predicate: (item: T) => boolean): T[];
};

// another way is in a custom call signature that is using a shorthand syntax
type Filter6<T> = (array: T[], predicate: (item: T) => boolean) => T[];
type Filter7 = <T>(array: T[], predicate: (item: T) => boolean) => T[]; // if we want flexibility

// we can use it inline
const filter8 = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};
