const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(2);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// ---------------------------------------------------------------------------------
// const book = getBook(2);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// rest operator
// destrucuring as in previous lecture. let we also want to get all the other geners- for that we use rest operator (...otherGeneres)
// it creates an array that contains the value that have not been previously destructured
// const [primaryGenere, secondaryGenere, ...otherGeneres] = genres; //...otherGeneres can only be placed at last

// console.log(primaryGenere, secondaryGenere, otherGeneres);

// -------------------------------------------------------------------------
// const book = getBook(2);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

//spread operator - it is used all the time - can be used both on arrays and object

// const newGeneres = [genres, "epic fantasy"];
// newGeneres;
// prblem in above - epic fantsy will be outside array of array.

// -----------------------------------------------------------------------------------
// const book = getBook(2);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// so using spread opetaor - will put in a single array
// const newGeneres = [...genres, "epic fantasy"];
// newGeneres;

// can also put to end
// const newGeneres1 = ["epic fantasy", ...genres];
// newGeneres1;

// -------------------------------------------------------------------------------------
// done spread opetator with arrays. above
// ---------------------------------------------------------------------------------

// now for objects.
// spread operator in objects - it allows us to add new properties and also to update extsting one

// const book = getBook(1);
// book;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// let creating a varaible and  new object based on current book which has a new property, let - moviePublicationDate
// const updatedBook1 = { book, moviePublicationDate: "2001-12-19" };
// updatedBook1;
// above. this is not what we want, instead we want one big object which contains all.
// ------------------------------------------------------------------------------------

// const book = getBook(1);
// solution of above is simply spread out all properties of this object into the new object
// const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
// updatedBook;

// above. now all the things are inside updated book object.

// thus this is how we add new property to an object using the spread operator.
// ---------------------------------------------------------------------------------------------

// we can also use operator to update proprties by overriding them

const book = getBook(1);

// overring pages property

const updatedBook = {
  ...book,

  // adding a new propety
  moviePublicationDate: "2001-12-19",

  // below - it will override the earlier pages - overriding an existing property
  pages: 1200,
};

// updatedBook;

//  ------------------------------------------------------------------------------

// note for above
// const book = getBook(1);

// overring pages property
// const updatedBook = {
// if pages is placed at first. it is correct. but it doesnot update. so spreadout operator need to be at first
// pages: 1200,
// ...book,
// moviePublicationDate: "2001-12-19",
// };

// updatedBook;

// ----------------------------

//  to create a new object, add new properties to it or override existing ones - use spread operator
// also true for arrays
