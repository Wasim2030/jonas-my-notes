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

const book = getBook(2);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// title
// console.log(title, author)

const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;

//  ---------------------------------------------------------------

// in js some logical operators such as && and || operator have a feature called short circuiting. it means that in certain conditions the operator will immediately return the first value and not even look at the 2nd value

console.log(true && "Some string");
//  above . here is no short circuiting. When the first value is true the && operator will automatically retutn the 2nd operand (value)
//  -------------------------------------

// the short-circuiting works in the && operator when the first value is false

console.log(false && "Some string");

// above. here the operator doesnot even look at the 2nd value. can use it as an if eg
console.log(hasMovieAdaptation && "This book has a movie");
// above the && operator short circuits and doesnot even look at other part
// ------------------------------

// It also works with falsy value and truthy value(any vlaue which is not false)
// falsy value - 0, null, undefined, '' (eg empty string),
console.log("jonas" && "Some string");
// since it is true we get the second value.
// in above. since 'jonas' is a truthy value - means for, and operator it is as if it is a true value (behind the scene it gets converted to true)

// for falsy value
console.log(0 && "Some string");
// here we the first one. (short circuting in action coz it is a falsy value)
// -----------------------------------------------------------------------

// || - or operator - works ecactly in oppostite way. This short circuits when first operand (value) is true, and returns it. (if it is true so the operator doesnot even look at the 2nd value).
console.log(true || "Some string");
console.log(false || "Some string");

// we can use it to set default value eg
// console.log(book.translations.spanish); //for book one it returns spanish

// for book 2 - undefined
console.log(book.translations.spanish); //for book one it returns spanish

//  to set a default value if there is none -using operator
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;
// above- thus the value eg "NOT TRANSLATED" is assigned to variable "spanishTranslation"

// above - it can also go wrong eg. 0 is also a falsy value
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;
// above - use for book 1 and 2- for book 2 it is zero - falsy value - thus the result of this operator will be "no data" eg second part - thus wrong

// to fix above js has addead a new operator - nullish coalescing operator - works very similar to or operaotor but it does also shortcuircuit for falsy values.
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
//above - now the count will not be zero - but "no data"
// thus this ?? operator will only return the second value when the first value is null or undefined, but not when it is zero or empty string

const self1 = "" ?? "data";
self1;

const self2 = null ?? "data";
self2;
