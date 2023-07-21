// Type Aliases with type keyword
// other way to deal with declaration of type using type keyword
// We start with declaring type aliases
type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

// after declaration we can use it for our new object
let newArticle: Article = {
  author: "John",
  content: "Content",
  title: "John's article",
};

// we can use type as a template for other object if they need the same properties.
let post: Article = {
  author: "Sam",
  content: "Content",
  title: "Sam's article",
};
