type Book = {
  title: string;
  pages: number;
  isbn: string;
};

type LibraryType = "national" | "academic" | "public"; // union type

type Member = {
  name: string;
  phone: string;
  [key: string]: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: LibraryType;
  books: Book[];
  genres: string[];
  members: Member[];
};

const library: Library = {
  name: "New York Library",
  address: "24 Some Street, New York",
  numberOfBooks: 1254,
  type: "national", // can accept 3 values: "national", "academic", "public" enum?
  books: [
    {
      title: "Harry Potter",
      pages: 756,
      isbn: "9971-5-0210-0",
    },
    {
      title: "Davinci Code",
      pages: 386,
      isbn: "9971-5-0210-0",
    },
  ],
  genres: ["fiction", "history", "computers", "poetry"], // no limit to how many genres library can have
  members: [
    {
      name: "John Doe",
      phone: "+166984548",
    },
    {
      name: "Mark Doe", // Mandatory
      phone: "+166984548", // Mandatory
      email: "mark@email.com", // Can have additional optional fields. No limitation to additional properties
    },
  ],
};
